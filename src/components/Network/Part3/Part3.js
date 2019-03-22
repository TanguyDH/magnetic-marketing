import React, { Component } from 'react'
import './Part3.css'
import network3 from '../../assets/img/network3.png';
import {Link} from 'react-router-dom';

export default class Part3 extends Component {
    render() {
        return (
          <div className="Part3">
         
            <h3 className="Part__title">Packages designed for you.</h3>
            <div className="Part3__box">
            <img src={network3} className="Part3__img" alt='img' />
              <p className="Part3__text">
                <p>
                  Our prices are adapted according to your budget
                  whether you are a start-up that launches into the
                  market or a large brand established on the market.
                </p>
                <p>
                   We understand that your needs are different and we,
                        therefore, offer packs and a follow-up adapted to each
                    case.
                </p>
                <Link to='./pricing' className='Part3__button'>Consult Pricing	&rarr;</Link>
              </p>

              
            </div>
          </div>
        );
    }
}
