import React, { Component } from 'react';
// import '../../css/footer.css';
import { setLanguage } from '../../actions/setLanguage';
import { connect } from 'react-redux';

class Footer extends Component{
    changeLanguage = (e) => {
        this.props.setLanguage(e.target.innerHTML);
    };

    render(){
        return(
            <footer className="public__footer">
                <a>
                    <img src="https://apps.gndf.io/images/svg/logo.svg" height="23" />
                </a>
                <div className="change-language">
                    <button onClick = {this.changeLanguage}>ENGLISH</button>
                    <button onClick = {this.changeLanguage}>ARABIC</button>
                </div>
            </footer>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapStateToDispatch = {
    setLanguage
};

export default connect(mapStateToProps, mapStateToDispatch)(Footer);
