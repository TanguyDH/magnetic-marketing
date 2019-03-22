import React, { Component } from 'react'
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import './SideBar.css';
import { Icon } from "semantic-ui-react";

export default class SideBar extends Component {
      state= {
        modal: false
    }

      openModal = () => {
        this.setState({ modal: true });
    };

    closeModal = () => {
        this.setState({ modal: false });
    };
  render() {
    return (
      <React.Fragment>
        <div onClick={this.openModal} className="SideBar__icon">
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </div>
        <Modal
          className="SideBar__modal"
          overlayClassName="overlay"
          isOpen={this.state.modal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <div onClick={this.closeModal}>
            <div className="SideBar__close" onClick={this.closeModal}>
              <Icon name="close" />
            </div>

            <NavLink className="SideBar__link" to="/">
              Business
            </NavLink>
            <NavLink className="SideBar__link" to="/pricing">
              Pricing
            </NavLink>

            <NavLink className="SideBar__link" to="/faq">
              Faq
            </NavLink>

            <NavLink className="SideBar__link" to="/solution">
              Solution
            </NavLink>

            <a
              className="SideBar__link"
              href="https://medium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>

            <NavLink className="SideBar__link" to="/">
              My Account
            </NavLink>

            {/* <NavLink exact className="SideBar__joinMagnet" to="/magnet">
              Join Magnets
            </NavLink> */}
            <a href="mailto:team@heymagnetic.com" className="SideBar__link">
              team@heymagnetic.com
            </a>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}



// <div className="SideBar__logoBox">
//     <NavLink className="SideBar__logo" to="/">
//         Magnetic
//               </NavLink>
// </div>

// <MdMenu
//     className="SideBar__icon"
//     onClick={this.openModal}
//     fontSize="30px"
//     color="#000"
// />