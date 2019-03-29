import React, { Component } from 'react'
import './CampaignListDashboard.css';
import {Link} from 'react-router-dom';
import firebase from '../../../firebase';
import {connect} from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner';
import CampaignItem from './CampaignItem/CampaignItem';
import {Table} from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';


class CampaignListDashboard extends Component {
  state= {
    campaignRef: firebase.database().ref('campaigns'),
    campaigns: [],
    isLoading: true
  }
  componentDidMount() {
    this.addListeners();
  }
  componentWillUnmount() {
    this.removeListeners();
  }

  removeListeners = () => {
    this.state.campaignRef.off();
  };


 

  addListeners = () => {
    let loadedCampaigns = [];
    this.state.campaignRef
    .child(this.props.currentUser.uid)
    .orderByChild('timeStamp')
    .on("child_added", snap => {
     
        loadedCampaigns.push(snap.val());
     
     
      this.setState({ campaigns: loadedCampaigns });
    })
   
   
  };

  displayCampaigns = campaigns =>
  campaigns.length > 0 &&
 
  campaigns.slice(0).reverse().map(campaign => (
      <CampaignItem campaign={campaign} />
));

  render() {
    console.log('arr', this.state.campaigns);
    return  (
      <div className="CampaignListDashboard">


    {this.state.campaigns.length > 0 ? 
     <div className="CampaignListDashboard__list">
        
        {this.displayCampaigns(this.state.campaigns)}
   
   </div>
   :
   <div className="CampaignListDashboard__first">   
   <p>You have no campaign yet.</p> 
   <p> As a campaign are scheduled with you,they'll appear here.</p>
   <Link className="CampaignListDashboard__first-button" to={`/dashboardCreate/${uuidv4()}`}>Create my First Campaign &rarr;</Link>
   </div> 
  }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.currentUser
  };
}




export default connect(mapStateToProps)(CampaignListDashboard);



