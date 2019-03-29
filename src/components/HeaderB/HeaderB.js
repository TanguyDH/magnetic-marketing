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
               <h2>Magnetic Bussiness.</h2>
               <h4>Storytelling through  Nano-influencers .</h4>
               <Link 
              to='./signup'
              className="headerB__button"
            >
              Get Started
            </Link>
            </p>
           
          
         
        </div>
      </div>
    );
  }
}




export default HeaderB;