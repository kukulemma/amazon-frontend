const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { setGlobalOptions } = require("firebase-functions");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const app = express();

setGlobalOptions({ maxInstances: 10 });

app.use(cors({ origin: true }));
// app.use(cors({ origin: "http://localhost:5174" }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success!",
  });
});

app.post("/payment/create", async (req, res) => {
  try {
    const total = Number(req.query.total);
    if (total > 0) {
      console.log("Payment received:", total);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "USD",
      });
      res.status(201).json({ clientSecret: paymentIntent.client_secret });
    } else {
      res.status(400).json({ message: "Total must be greater than 0" });
    }
  } catch (error) {
    console.error("Stripe error:", error);
    res
      .status(500)
      .json({ message: "Payment processing failed", error: error.message });
  }
});

exports.api = onRequest(app);
