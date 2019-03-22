import React, { Component } from 'react'
import './Pricing.css';
import HeaderPricing from './HeaderPricing/HeaderPricing';
import SliderPricing from './SliderPricing/SliderPricing';
import PLanPrice from './PlanPrice/PlanPrice';

class Pricing extends Component {
  render() {
    return (
      <div className='Pricing'>
        <HeaderPricing />
        <SliderPricing />
        <PLanPrice />
      </div>
    );
  }
}

export default Pricing;