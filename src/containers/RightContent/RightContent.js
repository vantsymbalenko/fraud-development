import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RightContent extends Component{
  render(){
    return(
      <div>
        <h3 className = "section-name">Scenario 1</h3>
        <article className="right-content">
          <div className="right-content__details">
            <div className="panel-heading">
                Description
            </div>
            <div className="panel-body">
                <div className="alert alert-success">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Libero, optio, dolores eos architecto quisquam voluptates.
                    Atque porro iste quos incidunt nam eius, assumenda maiores
                    laborum quasi asperiores tempore, perspiciatis harum.
                </div>
            </div>
            <h4>Launch manual run:</h4>
            <div className="right-content__launch-options">

              <div className="right-content__launch-options btn-group-vertical">
                <button className="btn btn-default btn-lg btn-success">RUN</button>
                <button className="btn btn-default btn-lg btn-success">or Shedule</button>
              </div>
              <select className="form-control form-control-lg ">
                  <option>Houtly</option>
                  <option>Daily</option>
                  <option>Monthly</option>
                  <option>Quartely</option>
              </select>
            </div>
          </div>
          <div className="right-content__action">
              <div className="panel-heading">
                  Actions
              </div>
                <div className="panel-body">
                    <div className="alert alert-success alert-dismissable">
                        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        Last run at(automaticcally):
                        12-12-2018 12:12:12
                    </div>
                    <Link to= "/check-results" className = "btn btn-primary btn-large"> Check Result</Link>
                    <div className="right-content__inspect">
                      <p>Inspection status for the last run:</p>
                      <Link  to= "/inspect" className = "btn btn-primary btn-large"> Inspect</Link>
                    </div>
                </div>
          </div>
        </article>
      </div>
    )
  }
}
