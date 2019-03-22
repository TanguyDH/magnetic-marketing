import React, { Component } from 'react'
import './Creativity.css';
import ReactPlayer from "react-player";
import {Link} from 'react-router-dom';
import video from '../assets/video/videoM.mp4'

 class Creativity extends Component {
  render() {
    return (
      <div className="Creativity">
        <div className="Creativity__text">
          <h3 className="Creativity__title">
            Your product will be talked about.
          </h3>
          <p className="Creativity__p">
            <p>
              The first goal at Magnetic is that your product creates
              interest and receive attention which is the recipe for the
              sale.The magnets receive custom indications so everyone has a
              story to reaffirm highlighting the qualities of your product.
            </p>
            <p>
              So we put everything on personalization and Magnetic
              understands this, indeed the chatbot adopts a unique posture
              according to each magnet so that it uses its creativity to
              promote your brand and in that way each recommendation is
              unique.
            </p>
            <Link
              to='./signup'
              className="Creativity__button"
            >
              Get magnets talking about your brand today &rarr;
            </Link>
          </p>
        </div>
        <div className="Creativity__videoBox">
          <ReactPlayer
            className="Creativity__video"
            url={video}
            playing
            muted
            loop
          />
        </div>
      </div>
    );
  }
}




export default Creativity;