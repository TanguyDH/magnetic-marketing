import React, { Component } from 'react'
import './NetworkPage.css';
import Network from '../../components/Network/Network';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

export default class NetworkPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
  render() {
    return (
      <div>
      <div className='NetworkPage'>
           <Navigation />
            <Network /> 
            
      </div>
      <Footer />
      </div>
    )
  }
}
