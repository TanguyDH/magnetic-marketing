import React, { Component } from 'react'
import InputList from '../../UI/InputList/InputList';
import UploadFile from '../../UI/UploadFile/UploadFile';

export default class Step2 extends Component {
                 state = {
                  file1: '',
                  file2: '',
                  file3: '',
                  file4: '',
                  file5: '',
                  file6: '',
                   benefits: [],
                   do: [],
                   dont: []
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
                 render() { 
                
                  console.log('benefits', this.state.benefits);
                  console.log('do', this.state.do);
                  console.log('dont', this.state.dont);
                   return (
                     <div className="Step">
                       <div className="Step__flex">
                         <div className="Step__part1">
                           <div className="Step__inputs">
                             <div className="Step__inputBox">
                               <div className="Step__label">
                                 benefits of your product
                               </div>
                               <InputList
                                 handleBenefits={this.handleBenefits}
                               />
                             </div>
                           </div>

                           <div className="Step__form">
                             <div className="Step__inputBox">
                               <div className="Step__label">
                                 Do
                               </div>
                               <InputList
                                 handleBenefits={this.handleDo}
                               />
                             </div>
                           </div>
                           <div className="Step__inputs">
                             <div className="Step__inputBox">
                               <div className="Step__label">
                                 Don't
                               </div>
                               <InputList
                                 handleBenefits={this.handleDont}
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
                             <UploadFile handleFile={this.handleFile1} />
                             <UploadFile handleFile={this.handleFile2} />
                             <UploadFile handleFile={this.handleFile3} />
                             <UploadFile handleFile={this.handleFile4} />
                             <UploadFile handleFile={this.handleFile5} />
                             <UploadFile handleFile={this.handleFile6} />
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
                         <button onClick={this.props.nextStep}>
                           Next Step
                         </button>
                       </div>
                     </div>
                   );
                 }
               }
