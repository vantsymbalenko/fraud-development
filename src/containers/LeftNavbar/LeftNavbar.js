import React, { Component } from 'react';

export default class LeftNavbar extends Component{
  render(){
    return(
      <nav className="left-navbar">
        <div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse">
                <ul className="nav" id="side-menu">
                    <li>
                        <a href="#">
                          <i className="fa fa-bar-chart-o fa-fw"></i>
                          Scenarios
                          <span className="fa arrow"></span>
                        </a>
                        <ul className="nav nav-second-level">
                            <li>
                                <a href="link-to-scenario-with-id">Scenario 1</a>
                            </li>
                            <li>
                                <a href="link-to-scenario-with-id">Scenario 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-bar-chart-o fa-fw"></i>
                         + Add Scenario
                        <span className="fa arrow"></span>
                      </a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    )
  }
}
