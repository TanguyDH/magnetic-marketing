import React, { Component } from "react";
import './Step4.css';

export default class Step3 extends Component {
  

  render() {
    return (
      <div className="Step">
         <div className="Step__flex">
              <div className="Step__part1">

                 <div className='Step4__box'>
                  <div className='Step4__title'>
                      Introduction
                  </div>
                  <div className='Step4__NanoInfluencersInfo'>
                     <div className='Step4__NanoInfluencersInfo--1'>
                      <img src={this.props.campaign.fileLogo} alt='img' className='Step4__logoImg'/>
                       <div>
                         <p className='Step4__brandName'>{this.props.campaign.brandName}</p>
                         <p className='Step4__campaignName'>{this.props.campaign.campaignName}</p>
                       </div>
                    </div>
                    </div>
                    </div>
                 
                
                    <div className='Step4__box'>
                  <div className='Step4__title'>
                    About Us
                  </div>
                  <div className='Step4__NanoInfluencersInfo'>
                     <div className='Step4__NanoInfluencersInfo--2'>
                         <p className='Step4__brandName'>{this.props.campaign.productDescription}</p>
                    </div>
                  </div>
                  </div>


                  <div className='Step4__box'>
                  <div className='Step4__title'>
                     Images Board
                  </div>
                  <div className='Step4__NanoInfluencersInfo'>
                     <div className='Step4__NanoInfluencersInfo--3'>
                     <img src={this.props.campaign.file1} alt='img' className='Step4__boardImg'/>
                     <img src={this.props.campaign.file2} alt='img' className='Step4__boardImg'/>
                     <img src={this.props.campaign.file3} alt='img' className='Step4__boardImg'/>
                     <img src={this.props.campaign.file4} alt='img' className='Step4__boardImg'/>
                     <img src={this.props.campaign.file5} alt='img' className='Step4__boardImg'/>
                     <img src={this.props.campaign.file6} alt='img' className='Step4__boardImg'/>
                    </div>
                  </div>
                  </div>


                  <div className='Step4__box'>
                  <div className='Step4__title'>
                   Benefits
                  </div>
                  <div className='Step4__NanoInfluencersInfo'>
                     <div className='Step4__NanoInfluencersInfo--4'>
                         {this.props.campaign.benefits.map((benefit) => {
                           return <p className='Step4__textListInput'>{benefit}</p>
                         })}
                    </div>
                  </div>
                  </div>

                  <div className='Step4__box'>
                  <div className='Step4__title'>
                    Values
                  </div>
                  <div className='Step4__NanoInfluencersInfo'>
                     <div className='Step4__NanoInfluencersInfo--5'>
                     {this.props.campaign.values.map((value) => {
                           return <p className='Step4__textListInput'>{value}</p>
                         })}
                    </div>
                  </div>
                  </div>


                  <div className='Step4__box'>
                  <div className='Step4__title'>
                     Do
                  </div>
                  <div className='Step4__NanoInfluencersInfo'>
                     <div className='Step4__NanoInfluencersInfo--6'>
                     {this.props.campaign.do.map((d) => {
                           return <p className='Step4__textListInput'>{d}</p>
                         })}
                    </div>
                  </div>
                  </div>

                  <div className='Step4__box'>
                  <div className='Step4__title'>
                    Don't
                  </div>
                  <div className='Step4__NanoInfluencersInfo'>
                     <div className='Step4__NanoInfluencersInfo--7'>
                     {this.props.campaign.dont.map((dt) => {
                           return <p className='Step4__textListInput'>{dt}</p>
                         })}
                    </div>
                  </div>
                  </div>


                  <div className='Step4__box'>
                  <div className='Step4__title'>
                    WHERE TO GET OUR PRODUCT
                  </div>
                  <div className='Step4__NanoInfluencersInfo'>
                     <div >
                     <p className='Step4__whereGetProduct'>{this.props.campaign.whereGetProduct}</p>
                    </div>
                  </div>
                  </div>

                    
                    
                

                 
              </div>

              <div className="Step__part2">

              <div className='Step4__box'>
                  <div className='Step4__title'>
                    Hero Image
                  </div>
                  <div className='Step4__NanoInfluencersInfo'>
                     <div className='Step4__NanoInfluencersInfo--8'>
                     <img src={this.props.campaign.fileHero} alt='img' className='Step4__bigImage'/>
                    </div>
                  </div>
                  </div>


                   <div className='Step4__box'>
                  <div className='Step4__title'>
                     Filters
                  </div>
                  <div className='Step4__NanoInfluencersInfo'>
                     <div className='Step4__NanoInfluencersInfo--6'>
                    Age: {this.props.campaign.sliderValue}
                    {/* <p>Gender: {this.props.campaign.male}  {this.props.campaign.female}</p> */}
                    </div>
                  </div>
                  </div> 



                  <div className='Step4__box'>
                  <div className='Step4__title'>
                    Target
                  </div>
                  <div className='Step4__NanoInfluencersInfo'>
                     <div className='Step4__NanoInfluencersInfo--9'>
                      <div>
                        <div>Filters</div>
                        <div>Target</div>
                      </div>

                      <div>WITH AN INTEREST IN:</div>

                    </div>
                  </div>
                  </div>


              </div>



            </div>
        <div className="Step__line" />
        <div  className="Step__button">
          <button onClick={this.props.previousStep}>Previous Step</button>
          <button onClick={this.props.nextStep}>Next Step</button>
        </div>
      </div>
    );
  }
}


// fileHero:  "",
//     fileLogo: "",
//     brandName:  "",
//     campaignName: "",
//     productDescription: "",
//     productUrl:  "",
//     whereGetProduct:  "",
//     productCategoryPrimary: "",
//     productCategorySecondary: "",
//     file1: '',
//     file2:  '',
//     file3:  '',
//     file4:  '',
//     file5:  '',
//     file6:  '',
//    benefits: [],
//     values: [],
//      do:  [],
//     dont:  [],
//     sliderValue:  [13,80],
//     male:  true,
//     female: true,
//     selectInterest: [],