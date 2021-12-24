import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import UploadVideo from "./videosPage/UploadVideo";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import UploadPdf from "./pdfs/UploadPdf";

const Upload = () => {
  return (
    <div>
      <Router>
        <Breadcrumb className="mt-5">
          <Breadcrumb.Item>
            <Link to="/upload_video">Upload video</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/upload_pdf"> Upload Pdf </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/"> Upload Song </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/"> Upload Sermon </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Route path="/upload_video" component={UploadVideo} />
        <Route path="/upload_pdf" component={UploadPdf} />
      </Router>
    </div>
  );
};

export default Upload;
