import React, { Component } from 'react'
import './PartOne.css';

// import ReactPlayer from "react-player";

class PartOne extends Component {
  render() {
    return (
      <div className="PartOne">
        <div className="PartOne__box">
          <div className="PartOne__title">
            <span className="PartOne__1">1</span>
            <span>opinion mining</span>
          </div>
          <p className="PartOne__p">
            When is someone who is familiar recommends your product , the
            issue of non-trusting is faded away. Magnets will chat about the
            qualities of your product and will put a positive impact on your
            brand on social media.
          </p>
        </div>

        <div className="PartOne__box PartOne__box-2">
          <div className="PartOne__title">
            <span className="PartOne__1">2</span>
            <span>prospection</span>
          </div>
          <p className="PartOne__p">
            We could get you all pieces of information about people
            interested in your product and who are inquired to buy it. On
            the purpose to retargeting them and being disposed to convince
            them while saving time.
          </p>
        </div>

        <div className="PartOne__box PartOne__box-3">
          <div className="PartOne__title">
            <span className="PartOne__1">3</span>
            <span>A​ new way of vision</span>
          </div>
          <p className="PartOne__p">
            By authenticity and credibility of the recommendation ,
            surrounded people of magnets will have a new vision of your
            product and will be more interested in using it because from now
            he knows personally someone who is using it.
          </p>
        </div>
      </div>
    );
  }
}

export default PartOne;