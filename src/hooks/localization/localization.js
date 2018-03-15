import React, { Component} from 'react';
import { connect } from 'react-redux';

function translate( WrapperComponent){
  class Wrapper extends Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <WrapperComponent {...this.props} />
      );
    }
  }
  const mapStateToProps = (state) => {
    return{
      language : state.localization
    }
  }

  return connect(mapStateToProps, {})(Wrapper);
}


export default translate;



// import React, { Component } from ‘react’;
// import { bindActionCreators } from ‘redux’;
// import { connect } from ‘react-redux’;
// function FilterWrapper(ComposedFilter, filterInfo) {
//    class BaseFilter extends Component {
//      constructor() {
//        super();
//        this.state = {
//          count: 0
//        };
//        this.onCheckboxChange = this.onCheckboxChange.bind(this);
//     }
//     onClick(e) {
//
//      }
//     onCheckboxChange(e) {
//
//      }
//     render() {
//      let countLabel = this.state.count > 0 ?
//       <span>{ this.state.count }</span> :
//       null;
//   return(
//      <div className=”filterDetailsWrapper”>
//        <div className=”filterTotalCount”>
//          { countLabel }
//        </div>
//        <div className=”optionsDropDownContainer”>
//          <ComposedFilter
//          {…this.state}
//          {…this.props}
//          onCheckboxChange={ this.onCheckboxChange }
//          />
//        </div>
//      </div>
//     );
//    }
//  }
// function mapStateToProps(state) {
//   // REDACTED
//      return {};
//  }
// function mapDispatchToProps(dispatch) {
//    return {
//    …bindActionCreators(actions, dispatch)
//    };
//  }
//   return connect(mapStateToProps, mapDispatchToProps)(BaseFilter);
// }
//
// export default FilterWrapper;
