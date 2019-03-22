import React, { Component } from 'react'
import './StepOne.css';
import {Input} from 'semantic-ui-react';



class StepOne extends Component {
  render() {
    return <div className="StepOne">
        <h3 className="StepOne__title">
        Tell us about you
        </h3>
        <div className="StepOne__forms">
              <Input name='mail' fluid placeholder="Mail address" icon="at" iconPosition="left"  type='email'/>
            <Input name='society' fluid placeholder="Society " icon="home" iconPosition="left"  type='text' />
            <Input name='phone' fluid placeholder="Phone " icon="phone" iconPosition="left"  type='text' />
            <Input name='web' fluid placeholder="Website " icon="linkify" iconPosition="left"  type='text' />
        </div>
      </div>;
  }
}
export default StepOne;