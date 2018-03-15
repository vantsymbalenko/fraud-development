import React, { Component } from 'react';
import RightContent from '../RightContent/RightContent';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import Inspect from '../Inspect/Inspect';
import CheckResults from '../CheckResults/CheckResults';
import '../../css/home.css';

export default class Home extends Component{
  render(){
    return(
      <div className="">
        <RightContent />
      </div>
    )
  }
}
