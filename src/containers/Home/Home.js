import React, { Component } from 'react';
import '../../css/home.css';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';

export default class Home extends Component{
    render(){
        return(
          <div>
              <Header />

              <MainContent />

              <Footer />
          </div>
        )
    }
}