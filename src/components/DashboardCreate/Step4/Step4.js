import React, { Component } from "react";


export default class Step3 extends Component {
  render() {
    return (
      <div className="Step">
         <div className="Step__flex">
              <div className="Step__part1">
              1
              </div>

              <div className="Step__part2">
                  2
            </div>
            </div>
        <div className="Step__line" />
        <div  className="Step__button">
          <button onClick={this.props.previousStep}>Previous Step</button>
          <button onClick={this.props.nextStep}>Next Step</button>
        </div>
      </div>
    );
  }
}
