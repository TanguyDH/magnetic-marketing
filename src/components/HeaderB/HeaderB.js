import React, { Component } from 'react'
import './HeaderB.css';
import {Link} from 'react-router-dom';


import ParticlesComponent from './Particles/Particles';

class HeaderB extends Component {
  render() {
    return (
      <div className="headerB">
        <ParticlesComponent />

        <div>

            <p className="headerB__description">
               <h2>Storytelling Marketing.</h2>
               <h4>Understand and touch your targets.</h4>
            </p>
            <Link 
              to='./signup'
              className="headerB__button"
            >
              Get Started
            </Link>
        </div>
      </div>
    );
  }
}




export default HeaderB;