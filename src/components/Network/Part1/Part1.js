import React, { Component } from 'react'
import './Part1.css'
import network1 from '../../assets/img/network1.png';
import {Icon} from 'semantic-ui-react';
import magneticTime from '../../assets/img/magneticTime.png';
export default class Part1 extends Component {
  render() {
    return (
      <div className="Part1">
        <h3 className="Part__title">
          Use the time spent by Magnets audience on social networks.
        </h3>
        <div className="Part1__box">
          <img src={magneticTime} className="Part1__img" alt='img' />
          <p className="Part1__text">
            <p>
           
              Europeans spend an average of more than ​an hour and a
              half​per day using social networks.
            </p>
            <p>
              
              The main occupation is the consultation of the contents
              published by their friends.
            </p>
          </p>
        </div>
      </div>
    );
  }
}

