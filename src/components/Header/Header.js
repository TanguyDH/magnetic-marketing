import React, { Component } from 'react'
import './Header.css';
import { Icon, Button } from "semantic-ui-react";
import main from "../assets/img/main.png";



var DivStyle = {
  backgroundImage: `
    url(${main})`,
  height: "85vh",
  backgroundSize: "cover",
  backgroundPosition: 'center'
};



class Header extends Component {
  state = {
    loading: false
  };




  render() {
    return (
      <header className="header" style={DivStyle}>
        <div>
          <h1 className="header__title">
            Deviens Magnet<span className="header__emoji">{"\u2728"}</span>
          </h1>
          <p className="header__description">
            <Icon name="hand point right outline" />
           Recommande tes marques préférées .
            <Icon name="hand point left outline" />
          </p>
         {this.state.loading ? 
             <Button  loading size='huge'>
            Loading
          </Button>
           :  <a
            onClick={this.loading}
            href="https://www.m.me/288398428546133"
            className="header__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="facebook messenger" color="blue" />
            Lance-toi !
          </a> 
       }
        </div>
      </header>
    );
  }
}

export default Header;