import React, { Component } from 'react';
import '../../css/header.css';

export default class Header extends Component{
    render(){
        return(
            <header className="public-header">
                <div className="public-header__user">
                    <span className="public-header__username">User Name</span>
                    <span className="public-header__userfoto">User Foto</span>
                </div>
                <div className="public-header__language">
                    <button onClick = {this.changeLanguage}>ENGLISH</button>
                    <button onClick = {this.changeLanguage}>ARABIC</button>
                </div>
            </header>
        )
    }
}