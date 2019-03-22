import React, { Component } from "react";
import {Input, Select} from 'semantic-ui-react';
import NumberFormat from "react-number-format";
import DatePicker from 'react-date-picker';
import './Step5.css';

export default class Step3 extends Component {
  state = {
    date: new Date(),
    firstName: '',
   lastName: '',
    phoneNumber: '',
    companyName: '',
    city: '',
    postCode: '',
     StreetAdress: '',
    state: '',
    country: '',
    budget: ''
   }
 
  onChange = date => this.setState({ date })

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

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
    StreetAdress,
     state,
    country,
    budget
  } 
   = this.state;
    return (
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
                 name="StreetAdress"
                 value={StreetAdress}
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
          <button onClick={this.props.previousStep}>Previous Step</button>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}
