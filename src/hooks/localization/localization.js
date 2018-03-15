import React from 'react';
import { connect } from 'react-redux';

function translate( WrapperComponent){
  return class extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <WrapperComponent {...this.props} />
      );
    }
  }
}

const mapStateToProps = (state) => {
  language : state.localization.language
}

export default connect(mapStateToProps, {})(translate);
