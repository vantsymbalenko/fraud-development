import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CheckResults extends Component{
  render(){
    return(
      <div className="container">
        <h3 className = "section-name">Scenario 1</h3>
        <div className="alert alert-success">
          Last run at(automaticcally):
          12-12-2018 12:12:12
        </div>
        <table class="table table-striped table-bordered table-hover table-sm">
          <thead>
            <tr>
              <th scope="col">#Cases</th>
              <th scope="col">#Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-success">
              <th scope="row">400</th>
              <td >Normal Cases amount</td>
            </tr>
            <tr className="table-warning">
              <th scope="row">150</th>
              <td >Concerning Cases (amount of new ones,
                  amount of ones under investigation, amount
                  of cases that previously passed)</td>
            </tr>
            <tr className="table-danger">
              <th scope="row">100</th>
              <td >High-risk Cases (amount of new ones,
                  amount of ones under investigation, amount
                  of cases that previously passed)</td>
            </tr>
          </tbody>
        </table>
        <Link to = "/inspect" className="btn btn-primary"> Inspect </Link>
      </div>
    )
  }
}
