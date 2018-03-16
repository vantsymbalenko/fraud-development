import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import Routes from './containers/Routes/Routes';
import { connect } from 'react-redux';

class App extends Component {

    componentWillReceiveProps(nextProps){
        if(nextProps.language === "ARABIC" ){
            document.documentElement.style.direction="rtl";
        }else{
            document.documentElement.style.direction="";
        }
    }
  render() {

        const renderUserIsAuth =
            <div className="public">
                {/*<Header />*/}
                <Routes />
                {/*<Footer/>*/}
            </div>;

        const userUnregistered =
            <div className="public_login">
                <Login />
            </div>;

    return (
        !this.props.isAuth ? renderUserIsAuth : userUnregistered
    );
  }
}

const mapStateToProps = (state) => {
    return  {
        language : state.language.language,
        isAuth : state.login.isAuth
    }
};

const mapStateToDispatch = {

};

export default connect(mapStateToProps, mapStateToDispatch)(App);
