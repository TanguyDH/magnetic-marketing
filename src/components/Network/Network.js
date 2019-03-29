import React, { Component } from 'react'
import './Network.css';
import Part1 from  './Part1/Part1';
import Part2 from './Part2/Part2';
import Part3 from './Part3/Part3';
import LaunchCampaign from "../../components/UI/LaunchCampaign/LaunchCampaign";

export default class Network extends Component {
  render() {
    return (
      <div className='Network'>
           <Part1 />
         
           <Part2 />
      
           <Part3 />

        <div style={{ textAlign: 'center' }}>
          <LaunchCampaign />
        </div>
      </div>
    )
  }
}
