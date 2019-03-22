import React, { Component } from 'react';
import './Testimony.css';
import {Icon} from 'semantic-ui-react';
import Testi1 from "../assets/img/testimony1.png";
import Testi2 from "../assets/img/testimony2.png";
import Testi3 from "../assets/img/testimony3.png";

class Testimony extends Component {
  render() {
    return (
      <div className="testimony">
        <div className="testimony__global">
          <div className="testimony__box">
            <img className="testimony__img" src={Testi1} alt="testimony1" />
            <div className="testimony__name">Sophie, 18</div>
            <div className="testimony__text">
              &ldquo; J’attends les missions avec impatience, je n’ai jamais
              vu quelque chose d’aussi facile et amusant, en plus ca me
              permet de me faire de l’argent de poche{" "}
              <Icon name="hand victory" /> &ldquo;
            </div>
          </div>

          <div className="testimony__box">
            <img className="testimony__img" src={Testi2} alt="testimony1" />
            <div className="testimony__name">Mehdi, 20</div>
            <div className="testimony__text">
              &ldquo; Avec Magnetic je me sens libre de soutenir les marques
              que j’aime, je fais parler ma créativité tout en engrangeant
              des gains , ce qui est super comme activité{" "}
              <Icon name="hand rock" /> &ldquo;
            </div>
          </div>

          <div className="testimony__box">
            <img className="testimony__img" src={Testi3} alt="testimony1" />
            <div className="testimony__name">Laura, 24</div>
            <div className="testimony__text">
              &ldquo; A travers les missions qui me correspondent tellement,
              le choix de refuser et les articles de qualité. Magnetic
              m’aide vraiment dans la construction de mon influence et c’est
              carrément devenu un mode de vie.
              <Icon name="smile outline" /> &ldquo;
            </div>
          </div>
        </div>

      
      </div>
    );
  }
}


export default Testimony;