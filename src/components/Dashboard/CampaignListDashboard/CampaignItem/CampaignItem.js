import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
import './CampaignItem.css';
import moment from 'moment';

class CampaignItem extends Component {

   timeFromNow = (timeStamp) => {
    return moment(timeStamp).fromNow();
 }

    render(){
        return (
            <Link to={`/dashboardCreate/${this.props.campaign && this.props.campaign.id}`} className='CampaignItem'>
        
           <img  src={this.props.campaign && this.props.campaign.fileHero} className='CampaignItem__img'    />
        

          <div className='CampaignItem__description'>
         
            <p className='CampaignItem__campaignName' >{this.props.campaign && this.props.campaign.campaignName}</p>
            {/* <p className='CampaignItem__time' >{this.timeFromNow(this.props.campaign && this.props.campaign.timeStamp)}</p> */}
                <p className='CampaignItem__button'>
                  Complete
                </p>
          </div>
            
          
          </Link>

         
        );
     
    } 
}


export default CampaignItem;