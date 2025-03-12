import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";


const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  console.log(productId);
  useEffect(() => {
    setIsLoading(true);   //page refresh
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setIsLoading(false);  //data present
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  console.log(product);
  return (
    <LayOut>
      {isLoading? (
        <Loader />
      ) : (
        <ProductCard 
        product={product} 
        flex={true} 
        renderDesc={true}
        renderAdd={true} />
      )}
    </LayOut>
  );
};

export default ProductDetail;
