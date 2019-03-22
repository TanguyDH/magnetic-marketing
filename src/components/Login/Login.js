import React, { Component } from 'react'
import './Login.css';
import {withRouter } from 'react-router-dom';
import { Input } from "semantic-ui-react";
import logo from '../assets/img/logo.gif'
import {Link} from 'react-router-dom'
import firebase from '../../firebase';
import {Message} from 'semantic-ui-react';
import Spinner from '../UI/Spinner/Spinner';
import {connect} from 'react-redux'
import { setUser } from '../../store/actions/UserState';


 class Login extends Component {
   state = {
     email: '',
     password: '',
     errors: [],
     loading: false 
   }
   handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
     if(this.isFormValid(this.state)){
      event.preventDefault();
       this.setState({loading: true});
       firebase
         .auth()
         .signInWithEmailAndPassword(this.state.email, this.state.password)
         .then(signInUser => {
           console.log(signInUser);
           this.setState({loading: false, errors: []});
           this.props.setUser(signInUser.user);
           this.props.history.push('/dashboard');
         })
         .catch(err => {
           console.error(err);
           this.setState({loading: false, errors: this.state.errors.concat(err)});
         })
     }
  }

  isFormValid = ({email, password}) => email && password;

  displayErrors = errors =>
  errors.map((error, i) => <p key={i}>{error.message}</p>);

    render() {
        return (
          <div className="Login">
            <div className="Login__header">
              <img src={logo} className="Login__logo" alt='logo' />
              <h3>Log into your Magnetic account.</h3>
            </div>

            <div className="Login__box">
              <form className="Login__inputs">
                <div className="Login__inputBox">
                  <div className="Login__label">Email</div>
                  <Input onChange={this.handleChange} name='email' value={this.state.email} fluid type="text" />
                </div>
                <div className="Login__inputBox">
                  <div className="Login__label">Password</div>
                  <Input onChange={this.handleChange} name='password' value={this.state.password} fluid type="password" />
                </div>
             
              <div className="Login__error">
            {this.state.errors.length > 0 && (
              <Message error>{this.displayErrors(this.state.errors)}</Message>
            )}
          </div>
           <button onClick={this.handleSubmit} className="Login__button">
            {this.state.loading ? <Spinner />: ''}
            Continue
              </button>
              </form>

            <p className="Login__SignupSentence">
                Don't have an account?{" "}
                <Link
                to='/signup'
                
                  className="Login__Signup"
                >
                  Sign up
                </Link>
                {" "}
              </p>
            </div>
          </div>
        );
    }
}


export default withRouter(connect(null,{setUser})(Login));