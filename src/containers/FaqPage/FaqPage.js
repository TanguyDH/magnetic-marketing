import React, { Component } from 'react'
import './FaqPage.css';
import Faq from '../../components/Faq/Faq';
import LaunchCampaign from "../../components/UI/LaunchCampaign/LaunchCampaign";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

class FaqPage extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
   }
  render() {
    return (
      <div>
      <div className="FaqPage">
      <Navigation />

        <div>
          <Faq />
          <div className='FaqPage__launchCampaign'>
            <LaunchCampaign />
          </div>
        </div>
        
      </div>
      <Footer />
      </div>
    );
  }
}

export default FaqPage;