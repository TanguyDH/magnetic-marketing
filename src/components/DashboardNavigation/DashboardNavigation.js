import React, { Component } from 'react'
import "./DashboardNavigation.css";
import {NavLink} from 'react-router-dom';
import logo from '../assets/img/logo.gif';
import firebase from '../../firebase';


class DashboardNavigation extends Component {
  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('sign out'))
  }
  render() {
    return (
      <div className="DashboardNavigation">
        <div className="DashboardNavigation__logoBox">
          <img className="DashboardNavigation__logo" src={logo} alt='logo' />
          <div>Magnetic</div> 
        </div>
        <nav>
          <NavLink className="DashboardNavigation__link" to='/faq'>
            Faq
          </NavLink>

          <button onClick={this.handleSignout} className="DashboardNavigation__link">
            Log Out
          </button>
        </nav>
      </div>
    );
  }
}


export default DashboardNavigation;