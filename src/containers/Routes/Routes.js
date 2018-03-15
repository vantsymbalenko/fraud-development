import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import CheckResults from '../CheckResults/CheckResults';
import Inspect from '../Inspect/Inspect';
import LeftNavbar from '../LeftNavbar/LeftNavbar';

export default class Routes extends Component{
  render(){
    return(
      <div className="home">
      <LeftNavbar />
      <Switch>
        <Route exact path = '/' component = { Home }/>
        <Route  path = '/check-results' component = { CheckResults }/>
        <Route  path = '/inspect' component = { Inspect }/>
      </Switch>
      </div>
    )
  }
}
