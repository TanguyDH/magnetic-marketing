import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "semantic-ui-css/semantic.min.css";
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import reducerSliderValue from './store/reducers/SliderValue';
import reducerModalValue from './store/reducers/ModalState';
import reducerUserState from './store/reducers/UserState';


const rootReducer = combineReducers({
  sliderValue: reducerSliderValue,
  modalValue: reducerModalValue,
  currentUser: reducerUserState
});

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

const app = (
  <Provider store={store}>
   <BrowserRouter><App /></BrowserRouter>
  </Provider>
);




ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
