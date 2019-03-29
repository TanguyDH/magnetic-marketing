import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard';
import './DashboardHomePage.css';
import DashboardNavigation from '../../components/DashboardNavigation/DashboardNavigation';


class DashboardHomePage extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
   }
  render() {
      return <div>
      <DashboardNavigation />
      <div className='DashboardHomePage'>
      <Dashboard />
      </div>
      </div>
  }
}
 export default DashboardHomePage;