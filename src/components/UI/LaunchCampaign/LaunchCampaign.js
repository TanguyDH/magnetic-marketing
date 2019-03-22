import React, { Component } from 'react'
import './LaunchCampaign.css';
import {Link} from 'react-router-dom';


class LaunchCampaign extends Component {
  render() {
      return (
        <Link to='signup'  className="LaunchCampaign" >
          Get Started
        </Link>
      );
  }
}





export default LaunchCampaign;