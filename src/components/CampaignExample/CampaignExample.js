import React, { Component } from 'react'
import './CampaignExample.css';
import lime1 from '../assets/img/lime1.jpg';
import lime2 from '../assets/img/lime2.jpg';
import lime3 from "../assets/img/lime3.jpg";
import lime4 from "../assets/img/lime4.jpg";
import lime5 from "../assets/img/lime5.jpg";
import lime6 from "../assets/img/lime6.jpg";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";




const images = [lime1, lime2, lime3, lime4, lime5, lime6];




export default class CampagneExample extends Component {
 state = {
    photoIndex: 0,
    isOpen: false,
};
  
render() {
    const { photoIndex, isOpen } = this.state;
    return <div className="campagneExample">
        <span className="campagneExample__button" onClick={() => this.setState(
              { isOpen: true }
            )}>
          Campaign example ->
        </span>

        {isOpen && <Lightbox imageTitle="Campagne Lime d'un magnet" imageCaption="notre Ai va ciber le magnet avant une campagne par différent critéres tels que
             (les centres d' intérêt, le lieux, le genre, ...).Afin de garentir un fort engagement et
              une forte crédibilité. De plus, Les communautés de nos magnets sont composées de leurs amis et 
              de leurs familles. Lorsque votre ami vous recommandes, vous le croyez." mainSrc={images[photoIndex]} nextSrc={images[(photoIndex + 1) % images.length]} prevSrc={images[(photoIndex + images.length - 1) % images.length]} onCloseRequest={() => this.setState(
                { isOpen: false }
              )} onMovePrevRequest={() => this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })} onMoveNextRequest={() => this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })} />}
      </div>;
}
}
