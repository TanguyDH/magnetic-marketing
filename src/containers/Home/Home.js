import React, { Component } from 'react'
import './Home.css';

import Header from '../../components/Header/Header';
import Testimony from '../../components/Testimony/Testimony';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
          <Header />
          <Testimony />
          <Footer />
      </div>
    )
  }
}

export default Home;