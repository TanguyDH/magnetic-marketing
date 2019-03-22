import React, { Component } from 'react'
import './HeaderDashboard.css';
import {Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner';


class HeaderDashboard extends Component {

  state ={
    user: undefined
  }

  componentDidMount(){
    this.setState({user: this.props.currentUser});
  }
  
  render() {
    return this.props.isLoading ? <Spinner /> : (
      <div className="HeaderDashboard">
        <div className="HeaderDashboard__Magnetic">Magnetic Dashboard</div>
        <div className="HeaderDashboard__search">
          <input
            className="HeaderDashboard__input"
            placeholder="Search Campaign"
          />{" "}
          <Icon name="search" />{" "}
        </div>
        <div className="HeaderDashboard__line" />
        <div className="HeaderDashboard__add">
          <div className="HeaderDashboard__who">
            <div className="HeaderDashboard__letter">{this.state.user && this.state.user.photoURL[0]}</div>
            <div className="HeaderDashboard__nameBox">
              <div className="HeaderDashboard__brand">{this.state.user&& this.state.user.photoURL}</div>
              <div className="HeaderDashboard__name">{this.state.user && this.state.user.displayName}</div>
            </div>
          </div>
          <Link to="/dashboardCreate" className="HeaderDashboard__button">
            Create Campaign
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderDashboard;