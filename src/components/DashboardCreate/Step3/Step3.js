import React, { Component } from 'react'
import Slider from "rc-slider";
import './Step3.css';
import {Input} from 'semantic-ui-react';
// import SelectPlaces from "react-select-places";
// import "react-select/dist/react-select.css";
import Select from "react-select";

import categoryOptions from './categoryOptions';
import firebase from '../../../firebase';
import Spinner from '../../UI/Spinner/Spinner';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

const Range = Slider.Range;


class Step3 extends Component {
  state = {
    sliderValue: this.props.campaign ? this.props.campaign.sliderValue :  [13,80],
    male: this.props.campaign ? this.props.campaign.male : true,
    female: this.props.campaign ? this.props.campaign.female :true,
     selectInterest: this.props.campaign ? this.props.campaign.selectInterest : '',
    campaignRef: firebase.database().ref("campaigns"),
    isLoading: false
  };
  onSliderChange = (value) => {
    console.log(value);
    this.setState({
      sliderValue: value,
    });
  }


handleSelectInterest = (value)  =>{
  this.setState({ selectInterest: value });
}

handleCampaign = (next) => {
  this.setState({isLoading: true});
  this.state.campaignRef
      .child(this.props.currentUser.uid)
      .child(this.props.match.params.id)
      .update({
        ...this.props.campaign,
        timeStamp: firebase.database.ServerValue.TIMESTAMP,
        sliderValue: this.state.sliderValue,
        male:this.state.male,
        female: this.state.female,
        selectInterest: this.state.selectInterest
      })
      .then(() => {
        this.setState({isLoading: false});
         next();
      })
      .catch(err => {
        this.setState({isLoading: false});
        console.error(err);
      })
}


    render() {
   
    
        return this.state.isLoading ? <Spinner /> : (
          <div className="Step">
            <div className="Step__flex">
              <div className="Step__part1">
                <div className="Step__inputs">
                  <div className="Step__inputBox">
                    <div className="Step__label">Age (13 - 80)</div>
                    <p className="Step3__age">
                    {this.state.sliderValue[0]} - {this.state.sliderValue[1]}
                    </p>
                    <Range
                      allowCross={false}
                      value={this.state.sliderValue}
                      onChange={this.onSliderChange}
                      trackStyle={[{ backgroundColor: "#55E6C1" }]}
                      handleStyle={[
                        {
                          height: 20,
                          width: 20,
                          marginLeft: -14,
                          marginTop: -9,
                          backgroundColor: "#55E6C1"
                        },
                        {
                          height: 20,
                          width: 20,
                          marginLeft: -14,
                          marginTop: -9,
                          backgroundColor: "#55E6C1"
                        }
                      ]}
                      min={13}
                      max={80}
                    />
                  </div>
                </div>

                <div className="Step__inputs">
                  <div className="Step__label">Gender</div>
                  <div className="Step__genderBox">
                    <div className="Step3__gender" style={{background: this.state.male ? '#55E6C1' : '', color:this.state.male ? '#fff' : ''}} onClick={() => this.setState({ male: !this.state.male})}>
                      <p>Male</p>
                    </div>
                    <div className="Step3__gender" style={{background: this.state.female ? '#55E6C1' : '', color:this.state.female ? '#fff' : ''}}  onClick={() => this.setState({ female: !this.state.female})}>
                      <p>Female</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Step__part2">
                <div className="Step__inputs">
                  <div className="Step__inputBox">
                    <div className="Step__label">Target Places</div>
                    <Input fluid type="text" />
                  </div>
                </div>
              </div>
            </div>

            <div className="Step__inputs">
              <div className="Step__inputBox">
                <div className="Step__label">With an interest In</div>
                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  value={this.state.selectInterest}
                  onChange={this.handleSelectInterest}
                  options={categoryOptions}
                  theme={theme => ({
                    ...theme,
                    borderRadius: 5,
                    colors: {
                      ...theme.colors,
                      primary25: "#55E6C1",
                      primary: "#eee"
                    }
                  })}
                />
              </div>
            </div>

            <div className="Step__line" />
            <div className="Step__button">
              <button onClick={this.props.previousStep}>
                Previous Step
              </button>
              <button onClick={() =>{this.handleCampaign(this.props.nextStep)}}>Next Step</button>
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


export default withRouter(connect(mapStateToProps)(Step3));