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
import Home from './containers/Home';

let store = createStore(rootReducers, applyMiddleware(thunk));

class SlickApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/slick" component={SimpleSliderContainer} />
            <Route path="/login" component={LoginPage} />
            <Route path="*/index.html" component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default SlickApp;
