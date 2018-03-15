import React, { Component } from 'react';
// import '../../css/header.css';
import { Link } from 'react-router-dom';
import translate from '../../hooks/localization/localization';

 class Header extends Component{
    render(){
        return(
          <div className="navbar-default sidebar">
            {/* <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div> */}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to = "/" className="navbar-brand" href="index.html">User name and User foto</Link>
                {/* <div className="change-language">
                    <button onClick = {this.changeLanguage}>ENGLISH</button>
                    <button onClick = {this.changeLanguage}>ARABIC</button>
                </div> */}
            </div>
          </div>
        )
    }
}
export default translate(Header);
