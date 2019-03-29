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
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import LaunchCampaign from "../../components/UI/LaunchCampaign/LaunchCampaign";

class HomeB extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
   }
  render() {
    return (
      <div className='HomeB'>
        <Navigation />
        
        <HeaderB />

        <Mission />
      
        <WhyUs />
       
        <AverageEngagement />
        <Advantage />

        <Creativity />

        <MoreSectionNetwork />

        <HowItWorks />

        <div className='HomeB__launchCampaign'>
            <LaunchCampaign />
          </div>

        <BrandSaying />
       
        <Footer />
      </div>
    );
  }
}


export default HomeB;