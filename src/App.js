import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import { connect } from 'react-redux';

class App extends Component {
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps){
        if(nextProps.language === "ARABIC" ){
            document.documentElement.style.direction="rtl";
        }else{
            document.documentElement.style.direction="";
        }
    }
  render() {
    return (
        <div className = "public">
            <Header />
            <Login />
            <Footer />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return  {
        language : state.language.language
    }
};

const mapStateToDispatch = {

};

export default connect(mapStateToProps, mapStateToDispatch)(App);
