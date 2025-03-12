import axios from "axios";
const axiosInstance = axios.create({
  //local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-15447/us-central1/api",

  //deployed version of firebase function
  
  baseURL: "https://api-lxhf3jm35a-uc.a.run.app",

  //deployed version of amazon server on render.com
  // baseURL: "https://amazon-api-deploy-1pgr.onrender.com/",
});
export { axiosInstance };
