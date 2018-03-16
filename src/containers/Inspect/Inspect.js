import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import InspectTable from '../InspectTable/InspectTable';

export default class Inspect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div className="container">
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">Scenario 1 - Conserning Cases</h4>
              </div>
              <div className="modal-body">
                <p>Some text in the modal.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <h3 className="section-name">Scenario 1</h3>
        <div className="alert alert-success">
          Last run at(automaticcally): 12-12-2018 12:12:12
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col">#Cases</th>
              <th scope="col">#Inspected</th>
            </tr>
          </thead>
          <tbody>
            <tr className="" style={{ backgroundColor: 'yellow' }}>
              <th scope="">Concerning Cases</th>
              <td>
                <a onClick={this.handleShow}>150</a>
                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Scenario 1 - Conserning Cases</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <InspectTable />
                  </Modal.Body>
                  <Modal.Footer>
                    <button className="btn btn-success">Save</button>
                  </Modal.Footer>
                </Modal>
              </td>
              <td>
                <a onClick={this.handleShow}>142</a>
              </td>
            </tr>
            <tr style={{ backgroundColor: '#e65c5c' }}>
              <th scope="row">High-risk Cases</th>
              <td>100</td>
              <td>90</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
