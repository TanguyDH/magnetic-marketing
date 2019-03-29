import React, { Component } from 'react'
import './Navigation.css';
 
// import { Icon, Step } from "semantic-ui-react";



export default class Navigation extends Component {
  render() {
    const { currentStep } = this.props;
    return (
      <div className="Navigation">
        <div
          className="Navigation__item"
          style={{
            color: currentStep === 1 ? "#55E6C1" : "",
            borderBottom: currentStep === 1 ? "solid 3px #55E6C1" : ""
          }}
        >
          Create
        </div>
        <div
          className="Navigation__item"
          style={{
            color: currentStep === 2 ? "#55E6C1" : "",
            borderBottom: currentStep === 2 ? "solid 3px #55E6C1" : ""
          }}
        >
          Brief
        </div>
        <div
           className="Navigation__item"
          style={{
            color: currentStep === 3 ? "#55E6C1" : "",
            borderBottom: currentStep === 3 ? "solid 3px #55E6C1" : ""
          }}
        >
          Target
        </div>
        <div
          className="Navigation__item"
          style={{
            color: currentStep === 4 ? "#55E6C1" : "",
            borderBottom: currentStep === 4 ? "solid 3px #55E6C1" : ""
          }}
        >
          Review
        </div>
        <div
           className="Navigation__item"
          style={{
            color: currentStep === 5 ? "#55E6C1" : "",
            borderBottom: currentStep === 5 ? "solid 3px #55E6C1" : ""
          }}
        >
          Submit
        </div>
      </div>
    );
  }
}

