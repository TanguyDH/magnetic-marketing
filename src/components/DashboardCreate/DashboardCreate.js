import React from 'react';
import StepWizard from "react-step-wizard";
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Step4 from "./Step4/Step4";
import Step5 from "./Step5/Step5";
import Navigation from './Navigation/Navigation';

class DashboardCreate extends React.Component {

  onStepChange = () => {
    window.scrollTo(0, 0);
  }
    render() {
     
        return (
          <div>
            <StepWizard
              nav={<Navigation />}
              onStepChange={this.onStepChange}
              initialStep={1}
            >
              <Step1 />
              <Step2 />
              <Step3 />
              <Step4 />
              <Step5 />
            </StepWizard>
          </div>
        );
    }
}


export default DashboardCreate;