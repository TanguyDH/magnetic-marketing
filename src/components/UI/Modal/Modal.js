import React, { Component } from 'react'
import './Modal.css';
import Modal from 'react-modal';
import { Input, Select, Icon } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setModalValue} from '../../../store/actions/ModalState';



class ModalSignup extends Component {

  openModal = () => {
    this.props.setModalValue(true);
  }

  closeModal  = () =>{
    this.props.setModalValue(false);
  }


  render() {
    const companyType = [
      { key: "1", value: "1", text: "Brand" },
      { key: "3", value: "3", text: "Innovative Startups" }
    ];
    const companySize = [
      { key: "1", value: "1", text: "1 - 10"},
       {key: "2", value: "2", text: "11 - 50"},
      { key: "3", value: "3", text: "51 - 200" },
      { key: "4", value: "4", text: "201 - 1000" },
      { key: "5", value: "5", text: "1000+" }
    ];
    return (
      <div>
        
          <Modal
            isOpen={this.props.modalState}
            onRequestClose={this.closeModal}
            className="ModalSignup"
            contentLabel="Modal #2 Global Style Override Example"
            overlayClassName="overlay"
          >
          
            <div className="ModalSignup__close" onClick={this.closeModal}>
              <Icon name="close" />
            </div>
            <div className="ModalSignup__header">
              <p className="ModalSignup__title">Sign up - it's free</p>
              <p className="ModalSignup__subTitle">
                Already have an account?{" "}
                <Link
                  onClick={this.closeModal}
                  className="ModalSignup__logIn"
                  to="/login"
                >
                  Log in
                </Link>
              </p>
            </div>

            <form>
              <div className="ModalSignup__inputs">
                <div className="ModalSignup__inputBox">
                  <div className="ModalSignup__label">First Name</div>
                  <Input fluid type="text" />
                </div>
                <div className="ModalSignup__inputBox">
                  <div className="ModalSignup__label">Last Name</div>
                  <Input fluid type="text" />
                </div>
              </div>

              <div className="ModalSignup__inputBox">
                <div className="ModalSignup__label">Company Name</div>
                <Input fluid type="text" />
              </div>

              <div className="ModalSignup__inputs">
                <div className="ModalSignup__inputBox">
                  <div className="ModalSignup__label">Company Type</div>
                  <Select
                    placeholder="Company Type"
                    options={companyType}
                  />
                </div>
                <div className="ModalSignup__inputBox">
                  <div className="ModalSignup__label">Company Size</div>
                  <Select
                    placeholder="Company Size"
                    options={companySize}
                  />
                </div>
              </div>

              <div className="ModalSignup__inputBox">
                <div className="ModalSignup__label">Work Email</div>
                <Input fluid type="text" />
              </div>

              <div className="ModalSignup__inputBox">
                <div className="ModalSignup__label">Create Password</div>
                <Input fluid type="password" />
              </div>

              <button className="ModalSignup__button">Let's do this</button>
            </form>
         
        </Modal>
      </div>
    );
  }
}




const mapStateToProps = state => {
  return {
    modalState: state.modalValue.modalValue
  };
}
const mapDispatchToProps = dispatch => {
  return {
    setModalValue: value => dispatch(setModalValue(value))
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalSignup);