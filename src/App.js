import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import firebase from './firebase';
import Home from './containers/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Footer from "./components/Footer/Footer";
import Cgu from './components/Cgu/Cgu';
import HomeB from './containers/HomeB/HomeB';
import NotFound from './containers/NotFound/NotFound';
import PricingPage from './containers/PricingPage/PricingPage';
import NetworkPage from './containers/NetworkPage/NetworkPage';
import FaqPage from "./containers/FaqPage/FaqPage";
import LoginPage from './containers/LoginPage/LoginPage';
import SignupPage from './containers/SignupPage/SignupPage';
import Modal from './components/UI/Modal/Modal';
import DashboardHomePage from "./containers/DashboardHomePage/DashboardHomePage";
import DashboardNavigation from "./components/DashboardNavigation/DashboardNavigation";
import DashboardCreatePage from './containers/DashboardCreatePage/DashboardCreatePage';

import './App.css';

import { clearUser, setUser } from './store/actions/UserState';
import Spinner from './components/UI/Spinner/Spinner';




 class App extends React.Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.props.setUser(user);
      }else{
        this.props.history.push('/');
        this.props.clearUser();
      }
       
      
       
    })
  }
  
  render() {
    return this.props.isLoading ? <Spinner /> : (
      <div>
        {this.props.location.pathname === "/login" ||
        this.props.location.pathname === "/signup" ||
        this.props.location.pathname === "/dashboardCreate" ||
        this.props.location.pathname === "/dashboard" ? (
          <p />
        ) : (
          <Navigation />
        )}
        {this.props.location.pathname === "/dashboard" && (
          <DashboardNavigation />
        )}
        {this.props.location.pathname === "/dashboardCreate" && (
          <DashboardNavigation />
        )}

        <Switch>
          <Route path="/" component={HomeB} exact />
          <Route path="/magnet" component={Home} />
          <Route path="/cgu" component={Cgu} />
          <Route path="/pricing" component={PricingPage} />
        
          <Route path="/solution" component={NetworkPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={DashboardHomePage} />
          <Route path="/dashboardCreate" component={DashboardCreatePage} />
          <Route component={NotFound} />
        </Switch>
        <Modal />

        {this.props.location.pathname === "/login" ||
        this.props.location.pathname === "/signup" ||
        this.props.location.pathname === "/dashboardCreate" ||
        this.props.location.pathname === "/dashboard" ? (
          <p />
        ) : (
          <Footer />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.currentUser.isLoading
  }
}



export default withRouter(connect(mapStateToProps,{clearUser, setUser})(App));

