import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import CheckResults from '../CheckResults/CheckResults';
import Inspect from '../Inspect/Inspect';

export default class Routes extends Component{
    render(){
        return(
            <Switch>
                <Route path = "/" component = { Home } />
                <Route path = "/check-results" component = { CheckResults } />
                <Route path = "/inspect" component = { Inspect } />
            </Switch>
        )
    }
}