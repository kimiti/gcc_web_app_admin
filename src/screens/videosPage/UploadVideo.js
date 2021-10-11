import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import { uploadVideo } from "../../actions/videos";

const UploadVideo = ({ uploadVideo }) => {
  const [selectedFiles, setSelectedFiles] = useState(new Blob());
  const [videoTitle, setVideoTitle] = useState("");

  const selectFile = (event) => {
    setSelectedFiles(event.target.files[0]);
  };

  const upload = (e) => {
    e.preventDefault();
    uploadVideo(selectedFiles, videoTitle);
  };

  return (
    <div className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <h1>Upload Video</h1>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Video title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter video title"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select Video</Form.Label>
              <Form.Control type="file" onChange={selectFile} />
            </Form.Group>
            <Button
              className="mt-3"
              type="submit"
              onClick={upload}
              variant="primary"
            >
              Upload Video
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default connect(null, { uploadVideo })(UploadVideo);

// export default UploadVideo;
