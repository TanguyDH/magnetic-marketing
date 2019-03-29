import React, { Component } from 'react'
import './Signup.css';
import firebase from '../../firebase';
import logo from '../assets/img/logo.gif'
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import { Input, Select, Checkbox, Message } from "semantic-ui-react";
import Spinner from '../UI/Spinner/Spinner';
import { Link } from 'react-router-dom';
import { setUser } from '../../store/actions/UserState';

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    companyName: "",
    companyType: "",
    companySize: "",
    workEmail: "",
    password: "",
    // agree: undefined,
    newsletter: undefined,
    errors: [],
    loading: false,
    usersRef: firebase.database().ref('users')
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChangeCompanyType = (e, data) => {
    this.setState({ companyType: data.value });
  };
  handleChangeCompanySize = (e, data) => {
    this.setState({ companySize: data.value });
  };
 
  handleChangeAgree = (e, data) => {
    this.setState({ agree: data.checked });
  };

  handleChangeNewsletter = (e, data) => {
    this.setState({ newsletter: data.checked });
  };
  isFormEmpty = ({
    firstName,
    lastName,
    companyName,
    companyType,
    companySize,
    workEmail,
    password,
    agree,
    newsletter
  }) => {
    return (
      !firstName.length ||
      !lastName.length ||
      !companyName.length ||
      !companyType.length ||
      !companySize.length ||
      !workEmail.length ||
      !password.length ||
      // !(agree === true) ||
      !(newsletter === true)
    );
  };
  isFormValid = () => {
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.setState({ errors: [], loading: true });

      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.state.workEmail,
          this.state.password
        )
        .then(createdUser => {
          
          console.log(createdUser);
         
          createdUser.user
            .updateProfile({
              displayName: `${this.state.firstName} ${this.state.lastName}`,
              photoURL: this.state.companyName
            })
            .then(() => {
              this.props.setUser(createdUser.user);
              this.props.history.push('/dashboard');
              this.setState({
                loading: false
              });

              this.saveUser(createdUser, this.state).then(() => {
                console.log("user saved");
              })
              .catch((err) => {
                this.setState({ errors: this.state.errors.concat(err) });
              })
            })
            .catch(err => {
              console.error(err);
              this.setState({
                errors: this.state.errors.concat(err),
                loading: false
              });
            });
        })
        .catch(err => {
          console.error(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          });   
        });
    }
  }


  saveUser = (createdUser, {firstName, lastName, companyName, companyType, companySize, workEmail}) => {
   return this.state.usersRef.child(createdUser.user.uid).set({
      firstName: firstName,
      lastName: lastName,
      companyName: companyName,
      companyType: companyType,
      companySize: companySize,
      workEmail: workEmail
    })
  }

  displayErrors = errors => {
    return errors.map((error, i) => <p key={i}>{error.message}</p>);
  }

  render() {
    const {
      firstName,
      lastName,
      companyName,
      companyType,
      companySize,
      workEmail,
      password,
      agree,
      newsletter,
      loading
    } = this.state;
    const companyTypeArray = [
      { key: "1", value: "Brand", text: "Brand" },
      {
        key: "3",
        value: "Innovative Startups",
        text: "Innovative Startups"
      }
    ];
    const companySizeArray = [
      { key: "1", value: "1 - 10", text: "1 - 10" },
      { key: "2", value: "11 - 50", text: "11 - 50" },
      { key: "3", value: "51 - 200", text: "51 - 200" },
      { key: "4", value: "201 - 1000", text: "201 - 1000" },
      { key: "5", value: "1000+", text: "1000+" }
    ];
    return this.state.loading ? <Spinner />: (
      <div className="Signup">
        <div className="Signup__header">
          <img src={logo} className="Signup__logo" alt='logo' />
          <h3> Sign up to Magnetic</h3>
        </div>
        <div className="Signup__box">
          <form>
            <div className="Signup__inputs">
              <div className="Signup__inputBox">
                <div className="Signup__label">First Name</div>
                <Input
                  fluid
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="Signup__inputBox">
                <div className="Signup__label">Last Name</div>
                <Input
                  fluid
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="Signup__inputBox">
              <div className="Signup__label">Company Name</div>
              <Input
                fluid
                type="text"
                name="companyName"
                value={companyName}
                onChange={this.handleChange}
              />
            </div>

            <div className="Signup__inputs">
              <div className="Signup__inputBox">
                <div className="Signup__label">Company Type</div>
                <Select
                  placeholder="Company Type"
                  name="companyType"
                  onChange={this.handleChangeCompanyType}
                  options={companyTypeArray}
                  value={companyType}
                />
              </div>
              <div className="Signup__inputBox">
                <div className="Signup__label">Company Size</div>
                <Select
                  placeholder="Company Size"
                  options={companySizeArray}
                  name="companySize"
                  onChange={this.handleChangeCompanySize}
                  value={companySize}
                />
              </div>
            </div>

            <div className="Signup__inputBox">
              <div className="Signup__label">Work Email</div>
              <Input
                fluid
                type="text"
                name="workEmail"
                value={workEmail}
                onChange={this.handleChange}
              />
            </div>

            <div className="Signup__inputBox">
              <div className="Signup__label">Create Password</div>
              <Input
                fluid
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>

            {/* <div className="Signup__checkboxBox">
              <Checkbox
                label=" "
                name="agree"
                value={agree}
                onChange={this.handleChangeAgree}
              />
              <p>I agree to the T&C's and Privacy Policy</p>
            </div> */}

            <div className="Signup__checkboxBox">
              <Checkbox
                label=""
                name="newsletter"
                value={newsletter}
                onChange={this.handleChangeNewsletter}
              />
              <p>Sign me up to MAGNETIC's newsletter</p>
            </div>
         
          <div className="Signup__error">
            {this.state.errors.length > 0 && (
              <Message error>{this.displayErrors(this.state.errors)}</Message>
            )}
          </div>
          <button onClick={this.handleSubmit} className="Signup__button">
          
            Let's do this
          </button>

          </form>

          <p className="Signup__LoginSentence">
            Already have an account?{" "}
            <Link
              onClick={this.closeModal}
              className="Signup__logIn"
              to="/login"
            >
              Log in
            </Link>
          </p>
         
        </div>
      </div>
    );
  }
}




export default withRouter(connect(null, {setUser})(Signup));