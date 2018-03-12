import React, { Component } from 'react';
import '../../css/login.css';
import { connect } from 'react-redux';

import { login } from '../../actions/actionLogin';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : null,
            password : null
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

    render(){
        return(
            <div>
                <header className="public__header">
                    <a href="#">
                        <img src="https://apps.gndf.io/images/svg/logo.svg" height="80" />
                    </a>
                </header>
                <div className="sign-in ng-scope">
                    <h4 className="sign-in__header">Sign In</h4>
                    <div className="sign-in__content">
                        <form
                            onSubmit={ this.validate }
                            name="form"
                            className="ng-invalid ng-invalid-required ng-dirty ng-valid-parse">
                            <div className="form-group">
                                <input
                                    onChange = {this.handleInput}
                                    name="username"
                                    type="text"
                                    required="required"
                                    placeholder="User name"
                                    className="form-control form-control-underline ng-touched ng-not-empty ng-dirty ng-valid-parse ng-valid ng-valid-required" />
                            </div>
                            <div className="form-group text-right">
                                <input
                                    onChange = {this.handleInput}
                                    name="password"
                                    type="password"
                                    required="required"
                                    placeholder="Password"
                                    className="form-control form-control-underline ng-touched ng-dirty ng-valid-parse ng-empty ng-invalid ng-invalid-required" />
                                <a  className="forgotten">Forgotten password?</a>
                            </div>
                            <div className="btn-actions text-center">
                                <button type="submit" className="btn btn-submit">Sign in</button>
                            </div>
                            <div className="btn-actions text-center">
                                Don't have an account? &nbsp;
                                <a >Sign Up</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth : state.isAuth
    }
};

const mapStateToDispatch = {
    login
};

export default connect(mapStateToProps, mapStateToDispatch)(Login);