import React, { Component } from "react";
import {Input, Select} from 'semantic-ui-react';
import NumberFormat from "react-number-format";
import DatePicker from 'react-date-picker';
import './Step5.css';
import firebase from '../../../firebase';
import Spinner from '../../UI/Spinner/Spinner';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

class Step5 extends Component {
  state = {
    date: this.props.campaign ? this.props.campaign.date : new Date(),
    firstName: this.props.campaign ? this.props.campaign.firstName : '',
   lastName: this.props.campaign ? this.props.campaign.lastName : '',
    phoneNumber: this.props.campaign ? this.props.campaign.phoneNumber : '',
    companyName: this.props.campaign ? this.props.campaign.companyName : '',
    city: this.props.campaign ? this.props.campaign.city : '',
    postCode: this.props.campaign ? this.props.campaign.postCode : '',
     streetAdress: this.props.campaign ? this.props.campaign.streetAdress : '',
    state: this.props.campaign ? this.props.campaign.state : '',
    country: this.props.campaign ? this.props.campaign.country : '',
    budget: this.props.campaign ? this.props.campaign.budget : '',
    campaignRef: firebase.database().ref("campaigns"),
    isLoading: false
   }
 
  onChange = date => this.setState({ date })

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCampaign = () => {
    this.setState({isLoading: true});
    this.state.campaignRef
        .child(this.props.currentUser.uid)
        .child(this.props.match.params.id)
        .update({
          ...this.props.campaign,
          timeStamp: firebase.database.ServerValue.TIMESTAMP,
          date: this.state.date,
          firstName: this.state.firstName,
         lastName: this.state.lastName,
          phoneNumber: this.state.phoneNumber,
          companyName: this.state.companyName,
          city: this.state.city,
          postCode: this.state.postCode,
           streetAdress: this.state.streetAdress,
          state: this.state.state,
          country: this.state.country,
          budget: this.state.budget,
        })
        .then(() => {
          this.setState({isLoading: false});
          this.props.history.push('/dashboard');
          
        })
        .catch(err => {
          this.setState({isLoading: false});
          console.error(err);
        })
  }
  

  render() {
    const options = [
      { key: 'euro', text: 'euro', value: 'euro' }
    ];
    const {  firstName,
    lastName,
     phoneNumber,
    companyName,
    city,
     postCode,
    streetAdress,
     state,
    country,
    budget
  } 
   = this.state;
    return this.state.isLoading ? <Spinner /> : (
      <div className="Step">
        <div className="Step__title">Your Details</div>

        <div className="Step__inputsBox">
          <div className="Step__inputBox">
            <div className="Step__label">First Name</div>
            <Input
            fluid
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
             />
          </div>
          <div className="Step__inputBox">
            <div className="Step__label">Last Name</div>
            <Input 
            fluid
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
             />
          </div>
        </div>

        <div className="Step__inputs">
          <div className="Step__inputBox">
            <div className="Step__label">Phone Number</div>
            <Input 
             fluid
             type="number"
             name="phoneNumber"
             value={phoneNumber}
             onChange={this.handleChange}
             />
          </div>
        </div>

        <div className="Step__title">Billing Details</div>

        <div className="Step__flex">
          <div className="Step__part1">
            <div className="Step__input">
              <div className="Step__inputBox">
                <div className="Step__label">Company Name</div>
                <Input
                fluid
                type="text"
                name="companyName"
                value={companyName}
                onChange={this.handleChange}
                 />
              </div>
            </div>
            <div className="Step__input">
              <div className="Step__inputBox">
                <div className="Step__label">City / Suburb</div>
                <Input 
                 fluid
                 type="text"
                 name="city"
                 value={city}
                 onChange={this.handleChange}
                 />
              </div>
            </div>

            <div className="Step__input">
              <div className="Step__inputBox">
                <div className="Step__label">Post code / Zip</div>
                <Input
                 fluid
                 type="number"
                 name="postCode"
                 value={postCode}
                 onChange={this.handleChange}
                  />
              </div>
            </div>
          </div>
          <div className="Step__part2">
            <div className="Step__input">
              <div className="Step__inputBox">
                <div className="Step__label">Street Adress</div>
                <Input 
                 fluid
                 type="text"
                 name="streetAdress"
                 value={streetAdress}
                 onChange={this.handleChange}
                 />
              </div>
            </div>
            <div className="Step__input">
              <div className="Step__inputBox">
                <div className="Step__label">State / Province / Region</div>
                <Input
                 fluid
                 type="text"
                 name="state"
                 value={state}
                 onChange={this.handleChange}
                 />
              </div>
            </div>
            <div className="Step__input">
              <div className="Step__inputBox">
                <div className="Step__label">Country</div>
                <Input 
                fluid
                type="text"
                name="country"
                value={country}
                onChange={this.handleChange}
                 />
              </div>
            </div>
          </div>
        </div>

        <div className="Step__title">
          Campaign Budget{"  "}
        </div>

        <div className="Step__input">
          <div className="Step__inputBox">
            <Input
             onChange={this.handleChange}
             name='budget'
             value={budget}
              fluid
               type="number"  action>
              <input />
              <Select compact options={options} defaultValue="euro" />
            </Input>
          </div>
          <p>
            I want to impact
            <NumberFormat
              value={0}
              displayType={"text"}
              thousandSeparator={" "}
              prefix={""}
              className="SliderPricing__number"
            />
            people to spread my brand.
            </p>
        </div>

        {/* <div className="Step__title">Account</div>

        <div className="Step__input">
          <div className="Step__inputBox">
            <div className="Step__label">Credit Card No.</div>
            <Input fluid type="number" />
          </div>
        </div>

        <div className="Step__inputs">
          <div className="Step__inputsBox">
            <div className="Step__inputBox">
              <div className="Step__label">Expiry</div>
              <Input fluid />
            </div>

            <div className="Step__inputBox">
              <div className="Step__label">Cvc</div>
              <Input type="number" fluid />
            </div>
          </div>
        </div> */}

        <div className="Step__title">Start Campaign</div>

        <div className="Step__input">
          <div className="Step__inputBox">
            <div className="Step__label">Start</div>
            <DatePicker
            minDate={new Date()}
          onChange={this.onChange}
          value={this.state.date}
        />
          </div>
        </div>

        <div className="Step__line" />
        <div className="Step__button">
          <button onClick={this.props.previousStep} >Previous Step</button>
          <button onClick={this.handleCampaign}>Submit</button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.currentUser
  };
}


export default withRouter(connect(mapStateToProps)(Step5));