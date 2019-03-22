

import React, { Component } from 'react'
import './WhyUs.css';
import {Icon} from 'semantic-ui-react';
import img from '../assets/img/network2.png';
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import ReactPlayer from "react-player";
import video from '../assets/video/magnetic.mp4'





class WhyUs extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {

    return (
      <div className="WhyUs">
        <h3 className="WhyUs__title">Our offer</h3>
        <div className="WhyUs__introBox">
          <p className="WhyUs__introText">
            <p>
              <p>
              We put your product in the magnets content on Instagram stories. Magnets are
              ordinary people, users or real fans of your product with between 3,000{" "}
              <Tooltip
                animation="zoom"
                placement="top"
                trigger={["hover"]}
                overlay={
                  <div className="WhyUs__tooltip">
                    <span>Our AVS tech prevents Magnets with</span>{" "}
                    <span>fake followers or engagement submitting.</span>
                  </div>
                }
              >
                <span className="WhyUs__true">true</span>
              </Tooltip>{" "}
            
              followers and 100 followers on social media composed
              of people close .
              </p>
              <p>
              We will asked them a series of questions about them related to your brand. Then
              they will tell a personal story in relation to your brand.
              This will impact word of mouth of your
              company and optimize several factors necessary for the
              development of your brand.
              </p>
            </p>
          </p>
          <ReactPlayer
            className="WhyUs__video"
            url={video}
            playing
            muted
            loop
          />
    
          {/* <img src={img} className="WhyUs__img" alt='img' /> */}
        </div>

        <div className="WhyUs__section">
          <div className="WhyUs__box">
            <h5 className="WhyUs__header">
              <div>
                <Icon className="WhyUs__icon" name="heart outline" />
              </div>
              opinion mining
            </h5>
            <p className="WhyUs__text">
              When is someone who is familiar recommends your product , the
              issue of non-trusting is faded away. Magnets will chat about
              the qualities of your product and will put a positive impact
              on your brand on social media.
            </p>
          </div>
          <div className="WhyUs__box">
            <h5 className="WhyUs__header">
              <div>
                <Icon
                  className="WhyUs__icon"
                  name="file alternate outline"
                />
              </div>
              prospection
            </h5>
            <p className="WhyUs__text">
              We could get you all pieces of informations about people
              interested in your product for your studies and surveys.
              On the purpose to retargeting them, pick up feedback and being disposed to convince
              them while saving time.
            </p>
          </div>

          <div className="WhyUs__box">
            <h5 className="WhyUs__header">
              <div>
                <Icon className="WhyUs__icon" name="lightbulb outline" />
              </div>
              A​ new way of vision
            </h5>
            <p className="WhyUs__text">
              By authenticity and credibility of the recommendation ,
              surrounded people of magnets will have a new vision of your
              product and will be more interested in using it because from
              now he knows personally someone who are using it.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyUs;
