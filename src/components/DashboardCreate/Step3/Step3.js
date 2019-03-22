import React, { Component } from 'react'
import Slider from "rc-slider";
import './Step3.css';
import {Input} from 'semantic-ui-react';
// import SelectPlaces from "react-select-places";
// import "react-select/dist/react-select.css";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";
import categoryOptions from './categoryOptions';

const Range = Slider.Range;


export default class Step3 extends Component {
  state = {
    value: [13,80],
    male: true,
    female: true,
    selectInterest: null
  };
  onSliderChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  }
//  onChange = (val) => {
//   console.log("Selected: " + val);
// }

handleSelectInterest = (value)  =>{
  this.setState({ selectInterest: value });
}


    render() {
    const {selectInterest} = this.state;
    
        return (
          <div className="Step">
            <div className="Step__flex">
              <div className="Step__part1">
                <div className="Step__inputs">
                  <div className="Step__inputBox">
                    <div className="Step__label">Age (13 - 80)</div>
                    <p className="Step3__age">
                      {this.state.value[0]} - {this.state.value[1]}{" "}
                    </p>
                    <Range
                      allowCross={false}
                      value={this.state.value}
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
                  components={makeAnimated()}
                  isMulti
                  value={selectInterest}
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
              <button onClick={this.props.nextStep}>Next Step</button>
            </div>
          </div>
        );
    }
}
