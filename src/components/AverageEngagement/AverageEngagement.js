import React, { Component } from 'react'
import './AverageEngagement.css';
import {Icon} from 'semantic-ui-react';
import Tooltip from "rc-tooltip";
import 'rc-tooltip/assets/bootstrap.css';
// import 'rc-tooltip/assets/bootstrap_white.css';

export default class AverageEngagement extends Component {
    render() {
      return (
        <div className="AverageEngagement">
          <h4 className="AverageEngagement__title">
            Comparative average engagement rate %
          </h4>
          <div className="AverageEngagement__listBox">
            <div className="AverageEngagement__box AverageEngagement__Magnetic">
              <div className="AverageEngagement__pourcent">7.2%</div>
                      
              <p className="AverageEngagement__name">
                Magnetic
                <span className='AverageEngagement__point'>
                  {" "}
                    <Tooltip  animation="zoom" placement="top" trigger={['hover']} overlay={<div className='AverageEngagement__tooltip'><span>Subtotal of all interactions collected during</span> <span>the campaign divided by the number of impressions.</span></div>}>
                  <Icon
                    name="question circle outline"
                  /> 
                 </Tooltip>        
                </span>
              
              </p>
                     
            </div>
            <div className="AverageEngagement__box AverageEngagement__facebook">
              <div className="AverageEngagement__pourcent"> 1.4%</div>
              <p className="AverageEngagement__name">Facebook ad</p>
            </div>
            <div className="AverageEngagement__box">
              <div className="AverageEngagement__pourcent"> 3.2%</div>
              <p className="AverageEngagement__name">Classic Agency</p>
            </div>
          </div>
        </div>
      );
 }
}
