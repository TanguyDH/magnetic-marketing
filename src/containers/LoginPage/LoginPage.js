import React, { Component } from 'react'
import './LoginPage.css';
import Login from '../../components/Login/Login';

export default class LoginPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="LoginPage">
       <Login />
      </div>
    );
  }
}
