import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./WelcomeModal.css";

export class WelcomeModal extends Component {
  render() {
    return (
      <div className="modal-container">
        <Modal
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.props.show}
          className="splash-modal"
        >
          <Modal.Body className="modal-structures">
            <p className="splash-modal-quote">
              “There are far, far better things ahead than any we leave behind.”
              ― C.S. Lewis
            </p>
            <Button onClick={this.props.closeModal} id="splash-modal-button">
              Enter
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
