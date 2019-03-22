import React, { Component } from 'react'
import  './CampaignPage.css' ;
import CampaignForms  from '../../components/CampaignForms/CampaignForms';


class CampaignPage extends Component {
 
   
  render() {
    return (
      <div className='CampaignPage'>
          <div class="calendly-inline-widget" data-url="https://calendly.com/magneticbusiness" style={{minWidth:'340px', height:'580px'}}></div>
      </div>
    )
  }
}


export default CampaignPage;