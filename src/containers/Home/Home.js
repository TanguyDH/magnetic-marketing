import React, { Component } from 'react'
import './Home.css';

import Header from '../../components/Header/Header';
import Testimony from '../../components/Testimony/Testimony';


class Home extends Component {
  render() {
    return (
      <div className='Home'>
          <Header />
          <Testimony />
      </div>
    )
  }
}

export default Home;