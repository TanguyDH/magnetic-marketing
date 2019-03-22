import React, { Component } from 'react';
import './Faq.css';
import HeaderFaq from './HeaderFaq/HeaderFaq';
import FaqTabs from './FaqTabs/FaqTabs';



class Faq extends Component {
  render() {
    return (
      <div className='Faq'>
        <HeaderFaq />
        <FaqTabs />
            <div className='Faq__mailBox'>
        <a className='Faq__mail' href="mailto:team@heymagnetic.com">Haven’t You Found Information You Are Looking For? &rarr;</a>
         </div>
      
      </div>
    )
  }
}

export default Faq;
