import React, { Component } from 'react'
import './PricingPage.css'
import Pricing from '../../components/Pricing/Pricing';
import CollapsePrice from "../../components/CollapsePrice/CollapsePrice";

class PricingPage extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
   }
  render() {
    return (
      <div className="PicingPage">
        <div className="PicingPage__polygon1" />
        <div className="PicingPage__polygon2" />
        <div className='Pricing'>
         
          <Pricing />
          <CollapsePrice />
         
        </div>
      </div>
    );
  }
}

export default PricingPage;