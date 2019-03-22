import React, { Component } from "react";
import "./StatisticalModal.css";
import taux from "../assets/img/taux-dengagement.png";


import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [taux];

export default class StatisticalModal extends Component {
  state = {
    photoIndex: 0,
    isOpen: false
  };

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className="statisticalModal">
        <span
          className="statisticalModal__button"
          onClick={() => this.setState({ isOpen: true })}
        >
         Statistical ->
        </span>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}
