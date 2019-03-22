import React, { Component } from 'react'
import './StepTwo.css';
import {Input, Form , TextArea, Button , Select, Icon, Message} from 'semantic-ui-react';

 const Genre = [{ key: "all", value: "all", text: "Les deux" }, { key: "homme", value: "homme", text: "Homme" }, { key: "femme", value: "femme",text: "Femme" }];

class StepTwo extends Component {
  render() {
    return <div className="StepTwo">
       <h3 className="StepTwo__title">
         Describe your target
        </h3>
        <div className="StepTwo__forms">
            <Form>
                 <TextArea name='description' placeholder="Name of the product + descitpion" type='text'  />
              </Form>
            <Input name='industry' fluid placeholder="industry and sub industry" icon="th list" iconPosition="left" type='text' />
            <Input name='place' fluid placeholder="place you want to make your campaign (city, country, neighbourhood)" icon="map" iconPosition="left" type='text' />
              <div  className="StepTwo__age">
                <h5>Tranche d'age : </h5>
                <div>
                <Input name='age1'  placeholder="13" type='number' />
                -
                <Input name='age2'  placeholder="32" type='number' />
                </div>
             </div>

                 <div className="StepTwo__sex">
              <Icon name='intersex'  /> 
              <Select onChange={this.handleChangeSelect} name='gender' placeholder="Genre" options={Genre} />
              </div>
           </div>
      </div>
  }
}
export default StepTwo;