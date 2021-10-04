import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { register } from "../../../actions/auth";

const Register = ({ register, auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    register(email, password);
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <div>
      <div className="mt-5">
        <Row className="justify-content-md-center">
          <Col xs={12} md={12}>
            <h1>Register</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button className="mt-3" type="submit" variant="primary">
                Register
              </Button>
            </Form>

            <Row className="py-3">
              <Col>
                Already a Gcc-app member? <Link to="/login">Login</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

export default connect(mapStateToProps, { register })(Register);
