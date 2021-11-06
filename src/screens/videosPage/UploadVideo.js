import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import { uploadVideo } from "../../actions/videos";

import ProgressBar from "react-bootstrap/ProgressBar";
import { Redirect } from "react-router";

const UploadVideo = ({ uploadVideo, upload }) => {
  const [selectedFiles, setSelectedFiles] = useState(new Blob());
  const [videoTitle, setVideoTitle] = useState("");

  const selectFile = (event) => {
    setSelectedFiles(event.target.files[0]);
  };

  // const upload = (e) => {
  //   e.preventDefault();
  //   uploadVideo(selectedFiles, videoTitle);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    uploadVideo(selectedFiles, videoTitle);
  };

  return (
    <div className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <ProgressBar
            className="mb-3"
            variant="info"
            animated
            now={upload}
            label={`${upload}%`}
          />
        </Col>
        <Col xs={12} md={12}>
          <h1>Upload Video</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>Video title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter video title"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select Video</Form.Label>
              <Form.Control required type="file" onChange={selectFile} />
            </Form.Group>
            <Button
              className="mt-3"
              type="submit"
              // onClick={upload}
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

const mapStateToProps = (state) => {
  return {
    upload: state.upload.uploadProgress,
  };
};

export default connect(mapStateToProps, { uploadVideo })(UploadVideo);

// export default UploadVideo;
