import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./ContactMe.css";

export class ContactMe extends Component {
  render() {
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
                title="gmap-frame"
                id="gmap-frame"
                width="100%"
                height="350"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Cluj-Napoca+(My%20Business%20Name)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
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
