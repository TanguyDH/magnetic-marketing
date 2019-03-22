import React, { Component } from 'react'
import {Input, Form , TextArea, Button , Select, Icon, Message} from 'semantic-ui-react';
import './CampaignForm.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import firebase from '../../firebase';


class CampaignForm extends Component {
  state= {
      mail: '',
    society: '',
    phone: '',
    description:'',
    domain: '',
    place: '',
    age1: '',
    age2: '',
    gender: '',
    budget: '',
    error: false,
    link: '',
    campaignDatabaseRef: firebase.database().ref('campaign'),
    loading: false,
    errors: []
  }
  isValid = () => {
  if(this.isEmpty(this.state)){
       this.setState({error: true});
       return false;
  }else {
    this.setState({error: false});
    return true;
  }
  }

  isEmpty = ({mail,society,phone,file,description,domain,place,age1,age2,gender,budget}) => {
    return !mail.length || !society || !phone || !description || !domain || !place  || !gender || !budget;
  }

  onSumbit= event => {
    event.preventDefault();
    if(this.isValid()){
      this.setState({ loading: true });
     this.state.campaignDatabaseRef.push({
      mail: this.state.mail,
    society: this.state.society,
    phone: this.state.phone,
    description:this.state.description,
    domain: this.state.domain,
    place: this.state.place,
    age1: this.state.age1,
    age2: this.state.age2,
    gender: this.state.gender,
    budget: this.state.budget,
    link: this.state.link
     })
     .then(() => {
          this.setState({ 
            loading: false, 
             mail: '',
          society: '',
          phone: '',
         description:'',
         domain: '',
         place: '',
        age1: '',
         age2: '',
         gender: '',
          budget: '',
          link: '',
          errors: []
        });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            loading: false,
            errors: this.state.errors.concat(err)
          });
         })
  }
}


   handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChangeSelect = (event,data) => {
    this.setState({ gender: data.value });
  };
  render() {
    const {mail,
    society,
    phone,
    description,
    domain,
    place,
    age1,
    age2,
    gender,
    budget, 
  link }= this.state;
    const Genre = [{ key: "all", value: "all", text: "Les deux" }, { key: "homme", value: "homme", text: "Homme" }, { key: "femme", value: "femme",text: "Femme" }];
    return  <ScrollableAnchor id={'CampaignForm'}>
    <div className="CampaignForm">
          <div className="CampaignForm__header">
            <h3>Lancer une campagne</h3>
            <p>Aprés analyse, une réponse vous sera fournie sous 24h.</p>
          </div>
          <div className="CampaignForm__form">
            <div>
              <Input value={mail} onChange={this.handleChange} name='mail' fluid placeholder="Adresse email *" icon="at" iconPosition="left"  type='email'/>
            <Input value={society} onChange={this.handleChange} name='society' fluid placeholder="société *" icon="home" iconPosition="left"  type='text' />
            <Input value={phone} onChange={this.handleChange} name='phone' fluid placeholder="Téléphone *" icon="phone" iconPosition="left"  type='text' />
             <Input value={link} onChange={this.handleChange} name='link' fluid placeholder="Liens vers sites / Produits" icon="linkify" iconPosition="left"  type='text' />
             
             <Form>
                 <TextArea  value={description} onChange={this.handleChange} name='description' placeholder="Description de la campagne *" type='text'  />
              </Form>
              <Input value={domain} onChange={this.handleChange} name='domain' fluid placeholder="Domaine de la marque *" icon="th list" iconPosition="left" type='text' />
              <h5>Ciblage Audience</h5>
              <Input value={place} onChange={this.handleChange} name='place' fluid placeholder="Lieux (France - Belgique) *" icon="map" iconPosition="left" type='text' />
              <div>
                <span>Tranche d'age : </span>
                <div>
                <Input value={age1} onChange={this.handleChange} name='age1'  placeholder="16" type='number' />
                -
                <Input value={age2} onChange={this.handleChange} name='age2'  placeholder="30" type='number' />
                </div>
              </div>
              <div>
              <Icon name='intersex'  /> *
              <Select onChange={this.handleChangeSelect} name='gender' placeholder="Genre" options={Genre} />
              </div>
              <h5>Budget *</h5>
              <Input type='text'  value={budget} onChange={this.handleChange} name='budget' action={{ color: "teal", labelPosition: "left", icon: "euro", content: "Budget" }} actionPosition="left" placeholder="10,000*"   />
               {this.state.error ? (
             <Message error>
              <h3>remplir les champs vides</h3>
            </Message>
             ): null}
              <Button loading={this.state.loading} fluid basic color="green" onClick={this.onSumbit}>
                Envoyé
              </Button>
            </div>
          </div>
        </div>
          </ScrollableAnchor>;
  }
}

export default CampaignForm;