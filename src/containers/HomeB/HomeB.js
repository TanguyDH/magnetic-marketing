import React, { Component } from 'react'
import './HomeB.css';

import Mission from "../../components/Mission/Mission";
import HeaderB from '../../components/HeaderB/HeaderB';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import WhyUs from '../../components/WhyUs/WhyUs';
import Advantage from "../../components/Advantage/Advantage";
import BrandSaying from "../../components/BrandSaying/BrandSaying";
import Creativity from "../../components/Creativity/Creativity";
import MoreSectionNetwork from '../../components/MoreSectionNetwork/MoreSectionNetwork';
import AverageEngagement from '../../components/AverageEngagement/AverageEngagement';


class HomeB extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
   }
  render() {
    return (
      <div>
        <HeaderB />
      
        <WhyUs />
       
        <AverageEngagement />
        <Advantage />

        <Creativity />

        <MoreSectionNetwork />

        <HowItWorks />


        <BrandSaying />


        
      </div>
    );
  }
}


export default HomeB;