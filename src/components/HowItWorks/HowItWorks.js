import React, { Component } from 'react'
import './HowItWorks.css';
import  {Icon} from 'semantic-ui-react';
import LaunchCampaign from '../../components/UI/LaunchCampaign/LaunchCampaign';


class HowItWorks extends Component {
  render() {
    return <div className="howItWork">
        <h3 className="howItWork__title">How it works ?</h3>

        <div>
          <div className="howItWork__box howItWork__box-1">
                <div className="howItWork__iconBox">
             
              <Icon name="target" size='big' />
            </div>
            <p className="howItWork__text">
              Create a campaign with Magnetic and choose your target.
            </p>
          </div>

          <div className="howItWork__box howItWork__box-2">
            <div className="howItWork__iconBox">
                 <Icon name="sliders horizontal" size='big' />
            </div>
            <p className="howItWork__text">
             Our Ai advises each targeted magnets so that they create and
               publish authentic and personalized content on their social networks.

            </p>
          </div>

          <div className="howItWork__box howItWork__box-3">
                <div className="howItWork__iconBox">
            <Icon name="chart bar" size='big' />
            </div>
            <p className="howItWork__text">
              Find out how and why your campaign worked
               thanks to our complete anlayses.
            </p>
          </div>
        </div>

          <LaunchCampaign text='Launch a campaign' />

     
      </div>;
  }
}


export default HowItWorks;