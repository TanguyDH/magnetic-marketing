import React, { Component } from 'react'
import './CampaignForms.css';
import StepZilla from "react-stepzilla";
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';

 const steps = [
              {name: 'Step1', component: <StepOne />},
              {name: 'Step2', component: <StepTwo />},
               {name: 'Step3', component: <StepThree />}
            ];

class CampaignForms extends Component {
  render() {
    return <div className='CampaignForms'>
      <StepZilla steps={steps} showNavigation={true} nextButtonCls='btn__right' backButtonCls='btn__left' />
      </div>;
  }
}


export default CampaignForms;