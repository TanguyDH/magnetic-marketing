import React, { Component } from 'react'
import './CampaignListDashboard.css';
import {Link} from 'react-router-dom';

export default class CampaignListDashboard extends Component {
  render() {
    return (
      <div className="CampaignListDashboard">


            <div className="CampaignListDashboard__first">
          
            <p>You have no campaign yet.</p> 
            <p> As a campaign are scheduled with you,
        they'll appear here.</p>
               
        <Link className="CampaignListDashboard__first-button" to='/dashboardCreate'>Create my First Campaign &rarr;</Link>
            </div>
      </div>
    );
  }
}
