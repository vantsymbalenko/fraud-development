import React, { Component } from 'react';
import '../../css/header.css';

export default class Header extends Component{
    render(){
        return(
            <header className="public__header">
                <a href="#">
                    <img src="https://apps.gndf.io/images/svg/logo.svg" height="80" />
                </a>
            </header>
        )
    }
}