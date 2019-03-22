import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard';
import './DashboardHomePage.css';

class DashboardHomePage extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
   }
  render() {
      return <div className='DashboardHomePage'><Dashboard /></div>
  }
}
 export default DashboardHomePage;