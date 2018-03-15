import React, { Component } from 'react';
// import '../../css/header.css';


export default class Header extends Component{
    render(){
        return(
          <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html">User name and User foto</a>

              <div className="change-language">
                  <button onClick = {this.changeLanguage}>ENGLISH</button>
                  <button onClick = {this.changeLanguage}>ARABIC</button>
              </div>
          </div>
        )
    }
}
