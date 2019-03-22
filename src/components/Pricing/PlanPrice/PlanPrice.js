import React, { Component } from 'react';
import "./PlanPrice.css";
import {connect} from 'react-redux';
import PlanStarter from './PlanStarter/PlanStarter';
import PlanPlus from './PlanPlus/PlanPlus';
import PlanPro from './PlanPro/PlanPro';
import PlanPremium from './PlanPremium/PlanPremium';

const stepStarter = 50000;
const stepPlus = 150000;
const stepPro = 250000;


class PLanPrice extends Component {
  displayPlanPrice = value => {
    if(value > stepPro) {
      return 'none'
    }else {
      return 'flex'
    }
  }

  render() {
    return (
      <div className='PlanPrice__box'>

      <div className="PlanPrice" style={{ display:this.displayPlanPrice(this.props.sliderValue.sliderValue)}}>
         <PlanStarter stepStarter={stepStarter} stepPro={stepPro} stepPlus={stepPlus} />
          <PlanPlus stepStarter={stepStarter} stepPro={stepPro} stepPlus={stepPlus} />
          <PlanPro stepStarter={stepStarter} stepPro={stepPro} stepPlus={stepPlus} /> 
      </div>

      <div>
        <PlanPremium />
      </div>

      </div>
    );
  }
}


const mapStateToProps = state => {
    return {
        sliderValue: state.sliderValue
    };
}


export default connect(mapStateToProps)(PLanPrice);