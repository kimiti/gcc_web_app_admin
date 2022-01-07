import React from "react";

import { Form, Button, Row, Col, Breadcrumb } from "react-bootstrap";

const UploadPdf = () => {
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <h1>Upload PDF</h1>
          <Form >
            <Form.Group controlId="email">
              <Form.Label>PDF title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter PDF title"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select PDF</Form.Label>
              <Form.Control required type="file" />
            </Form.Group>
            <Button className="mt-3" type="submit" variant="primary">
              Upload PDF
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default UploadPdf;
