import React, { Component } from 'react';
import './BrandSaying.css';
import Slider from "react-slick";


class BrandSaying extends Component {
  render() {
      var settings = {
          dots: true,
          infinite: true,
          speed: 700,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          cssEase: "linear"
      };
    return (
      <div className="BrandSaying">
        <h3 className="BrandSaying__title">What Brands are saying</h3>
        <Slider {...settings}>
          <div className="BrandSaying__box">
            <p className="BrandSaying__say">
              &laquo;Magnetic has transmitted, as he knows so well, the
              innovations of our product to the magnets, which themselves
              have passed on to those around them&raquo;
            </p>
            <div className="BrandSaying__profile">

            </div>
          </div>


          <div className="BrandSaying__box">
            <p className="BrandSaying__say">
              &laquo;The magnets are so creative and makes it easy for me
              and I get very fast feedback from the Magnetic service&raquo;
            </p>
           
          </div>
          <div className="BrandSaying__box">
            <p className="BrandSaying__say">
              &laquo;Magnetic has been a great partner in helping us find
              ways to create a word of mouth&raquo;
            </p>
            <div className="BrandSaying__profile">
              
            </div>
          </div>
       
        </Slider>
      </div>
    );
  }
}

export default BrandSaying;