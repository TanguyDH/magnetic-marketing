import React, { Component } from 'react';
import './Dashboard.css';
import {connect} from 'react-redux';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import CampaignListDashboard from './CampaignListDashboard/CampaignListDashboard';

 class Dashboard extends Component {
  
  render() {
    const {currentUser} = this.props;
    return (
      <div>
        <HeaderDashboard  currentUser={currentUser}/>
        <CampaignListDashboard />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.currentUser,
    isLoading: state.currentUser.isLoading
  };
}





export default connect(mapStateToProps)(Dashboard);