import React, { Component } from 'react'
import './HeaderPricing.css';

 class HeaderPricing extends Component {
  render() {
    return (
      <div className="HeaderPricing">
        <h6 className="HeaderPricing__pricing">price estimation</h6>
        <h2 className="HeaderPricing__title1">
          Plans for Business of All Sizes.
        </h2>
        <h5 className="HeaderPricing__title2">
          We Offer 15% more Impact for Innovative Startups.
        </h5>
      </div>
    );
  }
}

export default HeaderPricing;