import React, { Component } from 'react';
import './Dashboard.css';
import firebase from '../../firebase';
import {connect} from 'react-redux';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import CampaignListDashboard from './CampaignListDashboard/CampaignListDashboard';
import Spinner from '../UI/Spinner/Spinner';

 class Dashboard extends Component {
  // state = {
  //   usersRef: firebase.database().ref('users'),
  //   user: null,
  //   isLoading: false
  // }

  // componentDidMount() {
    
  //        let user;
  //       this.setState({isLoading: true});
  //      this.state.usersRef.child(this.props.currentUser.currentUser.uid)
  //          .once('value')
  //          .then(snapshot => {
  //            user= snapshot.val();
  //            this.setState({user, isLoading: false});
  //          })
  //          .catch((err) => {
  //            this.setState({isLoading: false});
  //          })
        
  // }
  
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