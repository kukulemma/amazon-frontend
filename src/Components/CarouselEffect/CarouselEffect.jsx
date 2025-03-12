import React from "react";
import { Carousel } from "react-responsive-carousel";
import classes from "./CarouselEffect.module.css";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => {
          //console.log(imageItemLink);
          return <img key={imageItemLink} src={imageItemLink} />;
        })}
      </Carousel>
      <div className={classes["hero_img--bottom"]}></div>
    </div>
  );
};

export default CarouselEffect;
