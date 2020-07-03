import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export class WelcomeModal extends Component {
  render() {
    return (
      <div className="modal-container">
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.props.show}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Welcome!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              “There are far, far better things ahead than any we leave behind.”
              ― C.S. Lewis
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal}>Enter</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
