import React, { Component } from 'react'
import './PlanStarter.css';
import {connect} from 'react-redux';
import {Icon} from "semantic-ui-react";
import NumberFormat from "react-number-format";
import {Link} from 'react-router-dom';

class PlanStarter extends Component {
     calculateStarter = value => {
    if (value < this.props.stepStarter){
      return Math.round((value / 400) * 30);
    }else {
      return Math.round((this.props.stepStarter / 400) * 30);
    }
   
  }
    render() {
        return (
          <div
            className="PlanPrice__plan"
            style={{
              opacity:
                this.props.sliderValue.sliderValue >
                this.props.stepStarter
                  ? ".3"
                  : "1",
              display:
                this.props.sliderValue.sliderValue >
                this.props.stepStarter
                  ? window.innerWidth > 1000
                    ? "block"
                    : "none"
                  : "block"
            }}
          >
            <div className="PlanPrice__icon">
              <Icon name="assistive listening systems" />
            </div>
            <h3 className="PlanPrice__title">Basic</h3>
            <div className="PlanPrice__price-box">
              <p className="PlanPrice__price-text">Starting at</p>
              <p className="PlanPrice__price">
                <Icon name="euro sign" />
                <NumberFormat
                  value={this.calculateStarter(
                    this.props.sliderValue.sliderValue
                  )}
                  displayType={"text"}
                  thousandSeparator={" "}
                  prefix={""}
                />
              </p>
            </div>
            <p className="PlanPrice__who">
            
            </p>
            <ul className="PlanPrice__list">
              <li className="PlanPrice__item">Authentics contents</li>
              <li className="PlanPrice__item">
                Access to all data of the campaign
              </li>
              <li className="PlanPrice__item">
                receive content within days
              </li>
              <li className="PlanPrice__item">
                <strong>7</strong> days of campaign
              </li>
              <li className="PlanPrice__item">
                <strong>3</strong> types of campaign
              </li>
            </ul>
            <Link to='/signup' className="PlanPrice__button">Continue</Link>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sliderValue: state.sliderValue
    };
}


export default connect(mapStateToProps)(PlanStarter);