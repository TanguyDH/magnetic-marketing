import React, { Component } from 'react'
import './Navigation.css';
import { NavLink, withRouter } from 'react-router-dom';
import SideBar from './SideBar/SideBar'
import {connect} from 'react-redux';


class Navigation extends Component {
  state ={
    theposition: undefined
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height
  
    this.setState({
      theposition: scrolled,
    })
  }

  
    render() {
  
        return (
          <div className="navigation" style={{backgroundColor: this.state.theposition > 0.005 ? 'white' : '', boxShadow: this.state.theposition > 0.005 ? '0.3px 0.3px 0px 0px rgba(12,34,66,0.09),5px 3px 50px 0px rgba(12,34,66,0.13)' : ''}}>
              <div className="navigation__logo">
              <NavLink className="navigation__logo-link" to="/">
                Magnetic
              </NavLink>
            </div>

            <nav>

              <div>
            
              <NavLink
                exact
                activeStyle={{ fontWeight: "bold" }}
                className="navigation__link"
                to="/"
              >
                Business
              </NavLink>
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="navigation__link"
                to="/pricing"
              >
                Pricing
              </NavLink>

              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="navigation__link"
                to="/faq"
              >
                Faq
              </NavLink>

              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="navigation__link"
                to="/solution"
              >
                Solution
              </NavLink>

              <a
                className="navigation__link"
                href="https://medium.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
              
              </div>

              <div>

              <NavLink
                className="navigation__link"
                to={this.props.currentUser.currentUser ?'/dashboard' : '/login'}
              >
                { this.props.currentUser.currentUser ?' MY ACCOUNT' : ' LOG IN'}
              </NavLink>

             
              <NavLink
              className="navigation__link-account"
              to='/signup'
            >
             GET STARTED
            </NavLink>

            </div>
          

            </nav>
            

            <SideBar />
          </div>
        );
    }
}


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
}


export default withRouter(connect(mapStateToProps)(Navigation));



