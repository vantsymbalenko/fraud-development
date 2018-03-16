import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LeftNavbar extends Component {
  render() {
    return (
      <nav className="left-navbar">
        <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse">
            <ul className="nav" id="side-menu">
              <li>
                <a href="#">
                  <i className="fa fa-bar-chart-o fa-fw" />
                  Scenarios
                  <span className="fa arrow" />
                </a>
                <ul className="nav nav-second-level">
                  <li>
                    <Link to="/scenarios/1">Scenario 1</Link>
                  </li>
                  <li>
                    <Link to="/scenarios/2">Scenario 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-bar-chart-o fa-fw" />
                  + Add Scenario
                  <span className="fa arrow" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
