import React from 'react';
import StepWizard from "react-step-wizard";
import './DashboardCreate.css';
import {Icon} from 'semantic-ui-react';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Step4 from "./Step4/Step4";
import Step5 from "./Step5/Step5";
import Navigation from './Navigation/Navigation';
import firebase from '../../firebase';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';
import {Link} from 'react-router-dom';

class DashboardCreate extends React.Component {
  state= {
    campaignRef: firebase.database().ref('campaigns'),
    campaign: {
      fileHero:  "",
    fileLogo: "",
    brandName:  "",
    campaignName: "",
    productDescription: "",
    productUrl:  "",
    whereGetProduct:  "",
    productCategoryPrimary: "",
    productCategorySecondary: "",
    file1: '',
    file2:  '',
    file3:  '',
    file4:  '',
    file5:  '',
    file6:  '',
   benefits: [],
    values: [],
     do:  [],
    dont:  [],
    sliderValue:  [13,80],
    male:  true,
    female: true,
    selectInterest: [],

    date: new Date(),
    firstName: '',
    lastName: '',
    phoneNumber: '',
    companyName: '',
    city: '',
    postCode: '',
     streetAdress: '',
    state: '',
    country: '',
    budget: ''
    },
    isLoading: true
  }
  componentDidMount() {
    this.addListeners();
  }
  componentWillUnmount() {
    this.removeListeners();
  }

  removeListeners = () => {
    this.state.campaignRef.off();
  };


  addListeners = () => {

    this.setState({isLoading: true});
    this.state.campaignRef
    .child(this.props.currentUser.uid)
    .child(this.props.match.params.id)
    .on("value", snap => {
      let campaign = {
        ...this.state.campaign,
        ...snap.val()
      }
      console.log('yooooo',campaign);
      this.setState({ campaign }, () =>  this.setState({isLoading: false}));
    })
   
  };


  onStepChange = () => {
    window.scrollTo(0, 0);
  }
    render() {

        return this.state.isLoading ? <Spinner /> : (
          <div className='DashboardCreate'>
            <Link to='/dashboard' className='DashboardCreate__goDashboard'> <Icon name='caret left' /> Go to Dashboard</Link>
            <StepWizard
              nav={<Navigation />}
              onStepChange={this.onStepChange}
              initialStep={0}
            >
              <Step1 campaign={this.state && this.state.campaign} />
              <Step2 campaign={this.state && this.state.campaign} />
              <Step3 campaign={this.state && this.state.campaign} />
              <Step4 campaign={this.state && this.state.campaign} />
              <Step5 campaign={this.state && this.state.campaign} />
            </StepWizard>
          </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.currentUser
  };
}

export default withRouter(connect(mapStateToProps)(DashboardCreate));