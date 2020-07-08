import React, { Component } from "react";
import { Form, Button, Card, Modal } from "react-bootstrap";
import * as emailjs from "emailjs-com";
import "./ContactMe.css";

export class ContactMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Email: "",
      Title: "",
      Message: "",
      show: false,
    };
  }

  handleSubmit = (e) => {
    const { Name, Email, Title, Message } = this.state;
    const userData = {
      Name,
      Email,
      Title,
      Message,
    };
    e.preventDefault();
    if (userData) {
      emailjs.send(
        "gmail",
        "cv_website_contact_page",
        userData,
        "user_7DYi1UmHi6qvOSzMgZIKp"
      );
      this.setState({ Name: "", Email: "", Title: "", Message: "" });
      this.showModal();
    }
  };

  updateInputValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  showModal = () => {
    this.setState({ show: true });
    console.log("show");
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { Name, Email, Title, Message } = this.state;
    return (
      <div className="contact-page-container">
        <h4>Looking forward to chat with you!</h4>
        <div className="contact-page-form-container">
          <div className="contact-page-message">
            <div className="contact-card">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Adrian Cliveț
                  </Card.Title>
                  <Card.Text>Telephone: +40 753 813 222</Card.Text>
                  <Card.Text>E-mail: adrian.clivet@yahoo.com</Card.Text>
                  <Card.Text style={{ fontSize: "13px" }}>
                    You can also check out my social media accounts (bottom-left
                    of the page).
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="gmap-cj" style={{ width: "100%" }}>
              <iframe
                style={{ border: "none" }}
                title="gmap-frame"
                id="gmap-frame"
                width="100%"
                height="350"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Cluj-Napoca+(My%20Business%20Name)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
          <div className="contact-page-form">
            <Form onSubmit={this.handleSubmit} className="email-form">
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                  name="Name"
                  value={Name}
                  onChange={this.updateInputValue}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Your email"
                  onChange={this.updateInputValue}
                  name="Email"
                  value={Email}
                />
                <Form.Text className="text-muted">
                  I'll never share your data with anyone else.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                  Please enter your e-mail: email@example.com
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Message Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Title"
                  onChange={this.updateInputValue}
                  name="Title"
                  value={Title}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a title
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your message</Form.Label>
                <Form.Control
                  placeholder="Your message here"
                  required
                  as="textarea"
                  rows="3"
                  onChange={this.updateInputValue}
                  name="Message"
                  value={Message}
                />
                <Form.Control.Feedback type="invalid">
                  Ooops! Where is your message?
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  required
                  type="checkbox"
                  label="I agree to send my data."
                  feedback="You must agree before submitting."
                />
              </Form.Group>
              <Button variant="primary" type="submit" id="contact-submit" block>
                Submit
              </Button>
            </Form>
            <Modal
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={this.state.show}
              id="success-modal"
            >
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                  Thank you for writing me!
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Your message has been sent.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.closeModal}>OK</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
