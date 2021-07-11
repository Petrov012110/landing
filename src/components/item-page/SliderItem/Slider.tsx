import React, { Component } from "react";
import Slider from "react-slick";

export const Sli = () => {

    const settings = {
      customPaging: function() {
        return (
          <a>
            <img src={`https://sun9-26.userapi.com/impg/mKsVyrH-9U9D3gRz-yNOAgNei8OaLgT4D5L-LA/ITe-lmN90Uc.jpg?size=2120x1280&quality=96&sign=3e88fc668e5a1d18a3be727114e7272b&type=album`} />
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
        <Slider {...settings}>
          <div className="container-img">
            <img className="carousel-img" src={'https://sun9-12.userapi.com/impg/o9GNlo2sWCaKv8FkL4a-7TL2SU9qnBWUy_aExA/8EPPlPYwWos.jpg?size=1080x720&quality=96&sign=8d55ca716e61c3279a789c957170e6b8&type=album'} />
          </div>
          <div className="container-img">
            <img className="carousel-img" src={'https://sun9-26.userapi.com/impg/mKsVyrH-9U9D3gRz-yNOAgNei8OaLgT4D5L-LA/ITe-lmN90Uc.jpg?size=2120x1280&quality=96&sign=3e88fc668e5a1d18a3be727114e7272b&type=album'} />
          </div>
          <div className="container-img">
            <img className="carousel-img" src={'https://sun9-29.userapi.com/impg/BmyWA1rbnCmSLFJGrUHNBrUxeY_VMdwmfUIVxA/FFlOmTuUKBA.jpg?size=700x936&quality=96&sign=7633617cb5baa8323318f70ef14028e5&type=album'} />
          </div>
          <div className="container-img">
            <img className="carousel-img" src={'https://sun9-26.userapi.com/impg/mKsVyrH-9U9D3gRz-yNOAgNei8OaLgT4D5L-LA/ITe-lmN90Uc.jpg?size=2120x1280&quality=96&sign=3e88fc668e5a1d18a3be727114e7272b&type=album'} />
          </div>
        </Slider>
      </div>
    );
  
}