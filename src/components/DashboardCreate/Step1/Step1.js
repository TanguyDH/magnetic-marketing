import React, { Component } from 'react'
import './Step1.css';
import "filepond/dist/filepond.min.css";
import { Input, TextArea, Form, Select} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import primary from './primary';
import secondary from './secondary';
import UploadFile from '../../UI/UploadFile/UploadFile';
import {connect} from 'react-redux';
import firebase from '../../../firebase';
import Spinner from '../../UI/Spinner/Spinner';

 class Step1 extends Component {
    state = {
    fileHero: this.props.campaign ? this.props.campaign.fileHero : "",
    fileLogo: this.props.campaign ? this.props.campaign.fileLogo : "",
    brandName: this.props.campaign ? this.props.campaign.brandName : "",
    campaignName: this.props.campaign ? this.props.campaign.campaignName : "",
    productDescription:this.props.campaign ? this.props.campaign.productDescription : "",
    productUrl: this.props.campaign ? this.props.campaign.productUrl : "",
    whereGetProduct: this.props.campaign ? this.props.campaign.whereGetProduct : "",
    productCategoryPrimary: this.props.campaign ? this.props.campaign.productCategoryPrimary : "",
    productCategorySecondary: this.props.campaign ? this.props.campaign.productCategorySecondary : "",
    campaignRef: firebase.database().ref("campaigns"),
    isLoading: false
};
handleProductCategoryPrimary = (e, data) => {
  this.setState({ productCategoryPrimary: data.value });
};
handleProductCategorySecondary = (e, data) => {
  this.setState({ productCategorySecondary: data.value });
};


   handleFileHero = value => {
     this.setState({fileHero: value})
   }
   handleFileLogo = value => {
    this.setState({fileLogo: value})
  }
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCampaign = (next) => {
    this.setState({isLoading: true});
    this.state.campaignRef
        .child(this.props.currentUser.uid)
        .child(this.props.match.params.id)
        .update({
          ...this.props.campaign,
          timeStamp: firebase.database.ServerValue.TIMESTAMP,
          id: this.props.match.params.id,
          fileHero: this.state.fileHero,
          fileLogo: this.state.fileLogo,
          brandName: this.state.brandName,
          campaignName: this.state.campaignName,
          productDescription:this.state.productDescription,
          productUrl: this.state.productUrl,
          whereGetProduct: this.state.whereGetProduct,
          productCategoryPrimary: this.state.productCategoryPrimary,
          productCategorySecondary: this.state.productCategorySecondary
        })
        .then(() => {
          this.setState({isLoading: false});
           next();
        })
        .catch(err => {
          this.setState({isLoading: false});
          console.error(err);
        })
  }

  render() {
    console.log('helooooo', this.props.campaign);
    const { 
    brandName,
    campaignName,
    productDescription,
    productUrl,
    whereGetProduct,
    productCategoryPrimary,
    productCategorySecondary} 
     = this.state;
  
    return this.state.isLoading ? <Spinner /> : (
      <div className="Step">
        <div className="Step__flex">
          <div className="Step__part1">
            <div className="Step__inputs">
              <div className="Step__inputBox">
                <div className="Step__label">Upload Hero Image</div>
                  <UploadFile value={this.state.fileHero} handleFile={this.handleFileHero} />
              </div>
            </div>
            <div className="Step__inputs">
              <div className="Step__inputBox">
                <div className="Step__label">Upload Logo</div>
                <UploadFile value={this.state.fileLogo} handleFile={this.handleFileLogo} />
              </div>
            </div>
          </div>

          <div className="Step__part2">
            <div className="Step__inputs">
              <div className="Step__inputBox">
                <div className="Step__label">Brand Name</div>
                <Input
                 fluid
                  type="text"
                  name="brandName"
                  value={brandName}
                  onChange={this.handleChange} 
                   />
              </div>
            </div>

            <div className="Step__inputs">
              <div className="Step__inputBox">
                <div className="Step__label">Product or Campaign Name</div>
                <Input 
                 fluid
                 type="text"
                 name="campaignName"
                 value={campaignName}
                 onChange={this.handleChange} 
                 />
              </div>
            </div>

            <div className="Step__inputs">
              <div className="Step__inputBox">
                <div className="Step__label">Product Description</div>
                <Form>
                  <TextArea
                  type="text"
                  name="productDescription"
                  value={productDescription}
                  onChange={this.handleChange} 
                   />
                </Form>
              </div>
            </div>

            <div className="Step__inputs">
              <div className="Step__label">Product Category</div>
              <div className="Step__inputsBox">
                <div className="Step__inputBox">
                  <Select name='productCategoryPrimary' onChange={this.handleProductCategoryPrimary} value={productCategoryPrimary} options={primary}   fluid placeholder="PRIMARY" />
                </div>
                <div className="Step__inputBox">
                  <Select name='productCategorySecondary' onChange={this.handleProductCategorySecondary} value={productCategorySecondary} options={secondary} fluid placeholder="SECONDARY" />
                </div>
              </div>
            </div>

            <div className="Step__inputs">
              <div className="Step__inputBox">
                <div className="Step__label">Product Url</div>
                <Input
                fluid 
                type="text"
                name="productUrl"
                value={productUrl}
                onChange={this.handleChange} 
                 />
              </div> 
            </div>

            <div className="Step__inputs">
              <div className="Step__inputBox">
                <div className="Step__label">Where to get our product</div>
                <Form>
                  <TextArea
                    type="text"
                    name="whereGetProduct"
                    value={whereGetProduct}
                    onChange={this.handleChange} 
                   />
                </Form>
              </div>
            </div>
          </div>
        </div>

        <div className="Step__line" />

        <div className="Step__button">
          <div />
          <button  onClick={() =>{this.handleCampaign(this.props.nextStep)}}>Next Step</button>
        </div>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.currentUser
  };
}


export default  withRouter(connect(mapStateToProps)(Step1));