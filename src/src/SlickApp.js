import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import rootReducers from './reducers';
import SimpleSliderContainer from './containers/SimpleSliderContainer';
import LoginPage from './containers/LoginPage';
import App from './App'

let store = createStore(rootReducers, applyMiddleware(thunk));

class SlickApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/slick" component={SimpleSliderContainer} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default SlickApp;
