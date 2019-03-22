import React, { Component } from 'react'
import './Part2.css';
import magnetic1 from '../../assets/img/magnetic1.jpg';
import magnetic2 from '../../assets/img/magnetic2.jpg';
import magnetic3 from '../../assets/img/magnetic3.jpg';
export default class Part2 extends Component {
  render() {
    return (
      <div className="Part2">
        <h3 className="Part__title">Why Instagram stories ?</h3>

        <div className="Part2__section">

          <div className="Part2__box">
          <p className="Part2__text">
             
          Recommendations with Instagram will focus on organic reach and
              visuals contents.
              Recommendations with Instagram will focus on organic reach and
              visuals contents.
              Recommendations with Instagram will focus on organic reach and
              visuals contents.
              Recommendations with Instagram will focus on organic reach and
              visuals contents.
            </p>
          
              <img className="Part2__img" src={magnetic1} />
            
          </div>



          <div className="Part2__box">
          <img className="Part2__img" src={magnetic2} />
          <p className="Part2__text">
              Recommendations with Instagram will focus on organic reach and
              visuals contents.
              Recommendations with Instagram will focus on organic reach and
              visuals contents.
              Recommendations with Instagram will focus on organic reach and
              visuals contents.
              Recommendations with Instagram will focus on organic reach and
              visuals contents.
            </p>
          
             
            
          </div>



          <div className="Part2__box">
          <p className="Part2__text">
              Recommendations with Instagram will focus on organic reach and
              visuals contents.
              Recommendations with Instagram will focus on organic reach and
              visuals contents.
              Recommendations with Instagram will focus on organic reach and
              visuals contents.
              Recommendations with Instagram will focus on organic reach and
              visuals contents.
            </p>
          
              <img className="Part2__img" src={magnetic3} />
            
          </div>

        

        </div>
      </div>
    );
  }
}
