import React, { Component } from 'react'
import './SliderPricing.css';
import {connect} from 'react-redux';
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";
import NumberFormat from "react-number-format";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap_white.css";
import { setSliderValue } from '../../../store/actions/SliderValue';


const Handle = Slider.Handle;
// const marks = {
//   5000: <strong>5 k</strong>,
//   50000: "50 k",
//   100000: "100 k",
//   150000: "150 k",
//   200000: "200 k",
//   250000: <strong>250 k</strong>,
//   300000: <strong>...</strong>
// };




class SliderPricing extends Component {
  

   handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
     this.props.setSliderValue(value);
    return (
      <Tooltip visible={false} placement="top" key={index}>
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };
    
  render() {
    return (
      <div className="SliderPricing">
        <div className="SliderPricing__peopleReached">
          <p className="SliderPricing__p">
            I want to impact
            <NumberFormat
              value={this.props.sliderValue}
              displayType={"text"}
              thousandSeparator={" "}
              prefix={""}
              className="SliderPricing__number"
            />
            Magnet followers to spread my brand.
          </p>
        </div>
        <div className="SliderPricing__box">
          <Slider
            
            trackStyle={{ backgroundColor: "#12cbc4", height: 10 }}
            handleStyle={{
              height: 22,
              width: 22,
              marginLeft: -5,
              marginTop: -5,
              backgroundColor: "#12cbc4"
            }}
            step={6}
            railStyle={{ height: 10 }}
            min={5000}
            max={300000}
            handle={this.handle}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { setSliderValue: value => dispatch(setSliderValue(value)) };
}

const mapStateToProps = state => {
  return {
    sliderValue: state.sliderValue.sliderValue
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderPricing);