import React, { Component } from 'react'
import './PricingPage.css'
import Pricing from '../../components/Pricing/Pricing';
import CollapsePrice from "../../components/CollapsePrice/CollapsePrice";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

class PricingPage extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
   }
  render() {
    return (
      <div>
      <div className="PicingPage">
         <Navigation />
        <div className="PicingPage__polygon1" />
        <div className="PicingPage__polygon2" />
        <div className='Pricing'>
         
          <Pricing />
          <CollapsePrice />
       
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default PricingPage;