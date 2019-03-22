import React, { Component } from "react";
import "./PlanPremium.css";
import {Icon} from "semantic-ui-react";
import {Link} from 'react-router-dom';

class PlanPremium extends Component {
  render() {
    return (
      <div className="PlanPremium__plan">
        <div className="PlanPrice__icon">
          <Icon name="assistive listening systems" />
        </div>
        <h3 className="PlanPrice__title">Premium</h3>
        <div className="PlanPrice__price-box">
          <p className="PlanPrice__price-text" />
          <p className="PlanPrice__price">Custom plan</p>
        </div>
        <p className="PlanPrice__who">
         
        </p>
        <ul className="PlanPremium__list">
          <div>
            <li className="PlanPrice__item">
              <span className="PlanPremium__check">
                <Icon name="check" />
              </span>
              Authentics contents
            </li>

          
          
              <li className="PlanPrice__item">
              <span className="PlanPremium__check">
                <Icon name="check" />
              </span>
                Access to all data of the campaign
              </li>
          
            <li className="PlanPrice__item">
              <span className="PlanPremium__check">
                <Icon name="check" />
              </span>
              receive content within days
            </li>
            <li className="PlanPrice__item">
              <span className="PlanPremium__check">
                <Icon name="check" />
              </span>
              Custom Plan
            </li>

            <li className="PlanPrice__item">
              <span className="PlanPremium__check">
                <Icon name="check" />
              </span>
              negociation on days
            </li>
          </div>
          <div>
            <li className="PlanPrice__item">
              <span className="PlanPremium__check">
                <Icon name="check" />
              </span>
              negociation on types of campaign
            </li>
            <li className="PlanPrice__item">
              <span className="PlanPremium__check">
                <Icon name="check" />
              </span>
              Sharing the expertise of Magnetic with your marketing team
            </li>
            <li className="PlanPrice__item">
              <span className="PlanPremium__check">
                <Icon name="check" />
              </span>
              Specific strategic on long term with your brand.
            </li>
          </div>
        </ul>
        <Link to='/signup' className="PlanPrice__button">Continue</Link>
      </div>
    );
  }
}

export default PlanPremium;
