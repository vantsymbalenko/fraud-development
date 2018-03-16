import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactProgressBarPlus from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';

export default class RightContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      autoIncrement: false,
      intervalTime: 50,
      spinner: false,
      onTop: false
    };
  }
  startProgress = () => {
    if (this.state.percent === 100) {
      this.setState({
        percent: 0,
        autoIncrement: true
      });
    } else {
      this.setState({
        autoIncrement: true
      });
    }
    this.timer = setTimeout(this.setFinishProgress, 5000);
  };
  setFinishProgress = () => {
    this.setState({
      percent: 100,
      autoIncrement: false
    });
  };
  render() {
    return (
      <div>
        <ReactProgressBarPlus
          percent={this.state.percent}
          autoIncrement={this.state.autoIncrement}
          intervalTime={this.state.intervalTime}
          spinner={this.state.spinner}
        />
        <h3 className="section-name">Scenario {this.props.match.params.id}</h3>
        <article className="right-content">
          <div className="right-content__details">
            <div className="panel-heading">Description</div>
            <div className="panel-body">
              <div className="alert alert-success">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Libero,
                optio, dolores eos architecto quisquam voluptates. Atque porro
                iste quos incidunt nam eius, assumenda maiores laborum quasi
                asperiores tempore, perspiciatis harum.
              </div>
            </div>
            <h4>Launch manual run:</h4>
            <div className="right-content__launch-options">
              <div className="right-content__launch-options btn-group-vertical">
                <button
                  className="btn btn-default btn-lg btn-success"
                  disabled={this.state.autoIncrement}
                  onClick={this.startProgress}
                >
                  RUN
                </button>
                <button className="btn btn-default btn-lg btn-success">
                  or Shedule
                </button>
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
            <div className="panel-heading">Actions</div>
            <div className="panel-body">
              <div className="alert alert-success alert-dismissable">
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-hidden="true"
                >
                  &times;
                </button>
                Last run at(automaticcally): 12-12-2018 12:12:12
              </div>
              <Link
                to={`/scenarios/${this.props.match.params.id}/check-results`}
                className="btn btn-primary btn-large"
                disabled={this.state.autoIncrement}
              >
                {' '}
                Check Result
              </Link>
              <div className="right-content__inspect">
                <p>Inspection status for the last run:</p>
                <Link
                  to={`/scenarios/${this.props.match.params.id}/inspect`}
                  className="btn btn-primary btn-large"
                  disabled={this.state.autoIncrement}
                >
                  {' '}
                  Inspect
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
