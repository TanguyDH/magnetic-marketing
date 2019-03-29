import React, { Component } from 'react'
import Signup from '../../components/Signup/Signup';
import './SignupPage.css';


export default class SignupPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
  render() {
    return (
      <div className='SignupPage'>
        <Signup />
      </div>
    )
  }
}
