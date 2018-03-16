import React, { Component } from 'react';
import '../../css/login.css';
import { connect } from 'react-redux';

import { login } from '../../actions/actionLogin';
import {setLanguage} from "../../actions/setLanguage";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        };
    }
    handleInput = (e) => {
        console.log("e target", e.target.name);
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    validate = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };

    changeLanguage = (e) => {
        this.props.setLanguage(e.target.innerHTML);
    };


    render(){
        return(
                <article className="public__content">
                    <ui-view className="ng-scope"><div className="sign-in ng-scope">
                        <div className="change-language">
                            <button onClick = {this.changeLanguage}>ENGLISH</button>
                            <button onClick = {this.changeLanguage}>ARABIC</button>
                        </div>
                        <h4 className="sign-in__header">Sign In</h4>
                        <div className="sign-in__content">
                            <form name="form"  onSubmit={this.validate} className="ng-pristine ng-invalid ng-invalid-required">
                                <div className="form-group">
                                    <input
                                        onChange={this.handleInput}
                                        value = {this.state.username}
                                        name="username" 
                                        type="text"
                                        required="required"
                                        placeholder="User name" 
                                        className="form-control form-control-underline ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" />
                                </div>
                                <div className="form-group text-right">
                                    <input
                                        onChange={this.handleInput}
                                        value = {this.state.password}
                                        name="password" 
                                        type="password"
                                        required="required" 
                                        placeholder="Password" 
                                        className="form-control form-control-underline ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" />
                                    <a className="forgotten" >Forgotten password?</a>
                                </div>
                                <div className="btn-actions text-center">
                                    <button type="submit" className="btn btn-submit">Sign in</button>
                                </div>
                                <div className="btn-actions text-center">
                                    Don't have an account? &nbsp;<a>Sign Up</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    </ui-view>
                </article>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth : state.isAuth
    }
};

const mapStateToDispatch = {
    login,
    setLanguage
};

export default connect(mapStateToProps, mapStateToDispatch)(Login);