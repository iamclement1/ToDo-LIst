import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import TodoList from './Todo_List';
import countDown from './countdown';

var destination = document.getElementById('app');

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={TodoList} />
      <Route exact path="/count" component={countDown} />
    </Switch>
  </Router>,

  destination
);
