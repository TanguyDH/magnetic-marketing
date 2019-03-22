import React, { Component } from 'react'
import './Advantage.css';
import {Icon} from 'semantic-ui-react';

class Advantage extends Component {
  render() {
    return (
      <div className="Advantage">
        <div className="Advantage__box">
          <div className="Advantage__icon">
            <Icon name="gem outline" />
          </div>
          <h3 className="Advantage__title">Authenticity</h3>
          <div className="Advantage__text">
            We realize for you a personalized campaign. Each posts is unique , Magnets
            create their own contents and post it in their own words. You
            have the choice in the scope of the campaign, as well as in the
            affected people and in the representation.
          </div>
        </div>

        <div className="Advantage__box">
          <div className="Advantage__icon">
            <Icon name="certificate" />
          </div>
          <h3 className="Advantage__title">Earn new contents</h3>
          <div className="Advantage__text">
            Use the contents of the magnets in your Instagram stories and
            all your promotions. Through your campaign, the magnets agree to
            give you in all forms their content dedicated to your campaign.
            And you can use them within 3 business years on all your
            platforms.
          </div>
        </div>

        <div className="Advantage__box">
          <div className="Advantage__icon">
            <Icon name="handshake outline" />
          </div>
          <h3 className="Advantage__title">Credibility </h3>
          <div className="Advantage__text">
            What better way to get someone to use your product, or take an
            interest in your brand than a friend's or a family member's
            recommendation. A person of the entourage inspires confidence
            and authenticity, 2 essential ingredients for the sale of your
            brand.
          </div>
        </div>

        <div className="Advantage__box">
          <div className="Advantage__icon">
            <Icon name="magic" />
          </div>
          <h3 className="Advantage__title">Artificial intelligence </h3>
          <div className="Advantage__text">
            Having the ability to deeply analyze hundreds of profiles.
             Magnets data is collected and analyzed to optimize the
            promotion of your product. We will reach the people most likely
            to reach an environment that needs your brand and product.
          </div>
        </div>
      </div>
    );
  }
}


export default Advantage