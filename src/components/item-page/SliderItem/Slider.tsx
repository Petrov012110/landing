import React, { Component } from "react";
import Slider from "react-slick";
const img1 = require("../../../assets/images/img1.jpg");
const img2 = require("../../../assets/images/img2.jpg");
const img3 = require("../../../assets/images/img3.jpg");
const img4 = require("../../../assets/images/img4.jpg");

export const SliderSlick = () =>  {
  
    const settings = {
      customPaging: function(i: number) {
        return (
          <a>
            <img src={`img${i + 1}`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
        </Slider>
      </div>
    );
  
}