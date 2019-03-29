import React, { Component } from 'react'
import InputList from '../../UI/InputList/InputList';
import UploadFile from '../../UI/UploadFile/UploadFile';
import firebase from '../../../firebase';
import Spinner from '../../UI/Spinner/Spinner';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

class Step2 extends Component {
                 state = {
                  file1: this.props.campaign ? this.props.campaign.file1 : '',
                  file2: this.props.campaign ? this.props.campaign.file2 : '',
                  file3: this.props.campaign ? this.props.campaign.file3 : '',
                  file4: this.props.campaign ? this.props.campaign.file4 : '',
                  file5: this.props.campaign ? this.props.campaign.file5 : '',
                  file6: this.props.campaign ? this.props.campaign.file6 : '',
                  values: this.props.campaign ? this.props.campaign.values : [],
                   benefits: this.props.campaign ? this.props.campaign.benefits : [],
                   do: this.props.campaign ? this.props.campaign.do : [],
                   dont: this.props.campaign ? this.props.campaign.dont : [],
                   campaignRef: firebase.database().ref("campaigns"),
                   isLoading: false
                 };

                 handleFile1 = value => {
                  this.setState({file1: value})
                }
                handleFile2 = value => {
                 this.setState({file2: value})
               }
               handleFile3 = value => {
                this.setState({file3: value})
              }
              handleFile4 = value => {
               this.setState({file4: value})
             }
             handleFile5 = value => {
              this.setState({file5: value})
            }
            handleFile6 = value => {
             this.setState({file6: value})
           }
              
                 handleBenefits = (value) => {
                   this.setState({benefits: value });
                 }
                 handleDo = (value) => {
                  this.setState({do: value });
                }
                handleDont = (value) => {
                  this.setState({dont: value });
                }
                handleValues = (value) => {
                  this.setState({values: value });
                }
                
  handleCampaign = (next) => {
    this.setState({isLoading: true});
    this.state.campaignRef
        .child(this.props.currentUser.uid)
        .child(this.props.match.params.id)
        .update({
          ...this.props.campaign,
          timeStamp: firebase.database.ServerValue.TIMESTAMP,
          file1: this.state.file1,
          file2: this.state.file2,
          file3: this.state.file3,
          file4: this.state.file4,
          file5: this.state.file5,
          file6: this.state.file6,
          benefits: this.state.benefits,
          values: this.state.values,
          do: this.state.do,
          dont: this.state.dont
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
                
                  console.log('benefits', this.state.benefits);
                  console.log('do', this.state.do);
                  console.log('dont', this.state.dont);
                   return this.state.isLoading ? <Spinner /> : (
                     <div className="Step">
                       <div className="Step__flex">
                         <div className="Step__part1">
                           <div className="Step__inputs">
                             <div className="Step__inputBox">
                               <div className="Step__label">
                                 benefits of your product
                               </div>
                               <InputList
                                 handleInputList={this.handleBenefits}
                                 value={this.state.benefits}
                               />
                             </div>
                           </div>


                           <div className="Step__form">
                             <div className="Step__inputBox">
                               <div className="Step__label">
                                 Values of Your Brand
                               </div>
                               <InputList
                                 handleInputList={this.handleValues}
                                 value={this.state.values}
                               />
                             </div>
                           </div>

                           <div className="Step__form">
                             <div className="Step__inputBox">
                               <div className="Step__label">
                                 Do
                               </div>
                               <InputList
                                 handleInputList={this.handleDo}
                                 value={this.state.do}
                               />
                             </div>
                           </div>
                           <div className="Step__inputs">
                             <div className="Step__inputBox">
                               <div className="Step__label">
                                 Don't
                               </div>
                               <InputList
                                 handleInputList={this.handleDont}
                                 value={this.state.dont}
                               />
                             </div>
                           </div>
                         </div>

                         <div className="Step__part2">
                           <div className="Step__inputs">
                             <div className="Step__inputBox">
                               <div className="Step__label">
                                 Mood Images (minimum 2 images)
                               </div>
                             <UploadFile value={this.state.file1} handleFile={this.handleFile1} />
                             <UploadFile value={this.state.file2} handleFile={this.handleFile2} />
                             <UploadFile value={this.state.file3} handleFile={this.handleFile3} />
                             <UploadFile value={this.state.file4} handleFile={this.handleFile4} />
                             <UploadFile value={this.state.file5} handleFile={this.handleFile5} />
                             <UploadFile value={this.state.file6} handleFile={this.handleFile6} />
                             </div>
                           </div>
                         </div>
                       </div>

                       <div className="Step__line" />
                       <div className="Step__button">
                         <button
                           onClick={this.props.previousStep}
                         >
                           Previous Step
                         </button>
                         <button onClick={() =>{this.handleCampaign(this.props.nextStep)}}>
                           Next Step
                         </button>
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


              export default withRouter(connect(mapStateToProps)(Step2));
              