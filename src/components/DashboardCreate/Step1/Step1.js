import React, { Component } from 'react'
import './Step1.css';
import "filepond/dist/filepond.min.css";
import { Input, TextArea, Form, Select} from 'semantic-ui-react';
import primary from './primary';
import secondary from './secondary';
import UploadFile from '../../UI/UploadFile/UploadFile';

 class Step1 extends Component {
    state = {
    fileHero: '',
    fileLogo: '',
    brandName: '',
    campaignName: '',
    productDescription:'',
    productUrl: '',
    whereGetProduct: '',
    productCategoryPrimary: '',
    productCategorySecondary: ''
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

  render() {
    const { 
    brandName,
    campaignName,
    productDescription,
    productUrl,
    whereGetProduct,
    productCategoryPrimary,
    productCategorySecondary} 
     = this.state;
  
    return (
      <div className="Step">
        <div className="Step__flex">
          <div className="Step__part1">
            <div className="Step__inputs">
              <div className="Step__inputBox">
                <div className="Step__label">Upload Hero Image</div>
                  <UploadFile handleFile={this.handleFileHero} />
              </div>
            </div>
            <div className="Step__inputs">
              <div className="Step__inputBox">
                <div className="Step__label">Upload Logo</div>
                <UploadFile handleFile={this.handleFileLogo} />
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
          <button onClick={this.props.nextStep}>Next Step</button>
        </div>
      </div>
    );
  }
}
export default Step1;