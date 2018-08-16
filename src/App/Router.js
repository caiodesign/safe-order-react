import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../Pages/Home';

class SwitchRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/add" component={HomePage} />
          <Route exact path="/user" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default SwitchRouter;
