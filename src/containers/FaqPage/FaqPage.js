import React, { Component } from 'react'
import './FaqPage.css';
import Faq from '../../components/Faq/Faq';
import LaunchCampaign from "../../components/UI/LaunchCampaign/LaunchCampaign";

class FaqPage extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
   }
  render() {
    return (
      <div className="FaqPage">
        
        <div>
          <Faq />
          <div className='FaqPage__launchCampaign'>
            <LaunchCampaign />
          
          </div>
        </div>
      </div>
    );
  }
}

export default FaqPage;