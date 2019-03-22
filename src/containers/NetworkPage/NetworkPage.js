import React, { Component } from 'react'
import './NetworkPage.css';
import Network from '../../components/Network/Network';

export default class NetworkPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
  render() {
    return (
      <div className='NetworkPage'>
            <Network /> 
            
      </div>
    )
  }
}
