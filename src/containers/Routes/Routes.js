import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import CheckResults from '../CheckResults/CheckResults';
import Inspect from '../Inspect/Inspect';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import RightContent from '../RightContent/RightContent';

export default class Routes extends Component {
  render() {
    return (
      <div className="home">
        <LeftNavbar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/scenarios/:id/" component={RightContent} />
          <Route
            exact
            path="/scenarios/:id/check-results"
            component={CheckResults}
          />
          <Route exact path="/scenarios/:id/inspect" component={Inspect} />
        </Switch>
      </div>
    );
  }
}
