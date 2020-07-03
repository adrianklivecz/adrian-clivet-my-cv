import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";

import "./ContactMe.css";

export class ContactMe extends Component {
  render() {
    return (
      <div className="contact-page-container">
        <h3>Looking forward to chat with you!</h3>
        <div className="contact-page-form-container">
          <div className="contact-page-message">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Thank you for your message.</Card.Title>
                <Card.Text>
                  Also, you can check out my social media profiles, by clicking
                  on the icons on the bottom-left corner of the page.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="contact-page-form">
            <Form noValidate>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />
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
                  pattern="[0-9]{10}"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a title
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your message</Form.Label>
                <Form.Control required as="textarea" rows="3" />
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
          </div>
        </div>
      </div>
    );
  }
}
