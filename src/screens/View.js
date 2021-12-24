import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Breadcrumb } from "react-bootstrap";
import ShowPdfs from "./pdfs/ShowPdfs";
import PlayVideo from "./videosPage/PlayVideo";

import { Link } from "react-router-dom";

const View = () => {
  return (
    <div>
      <Router>
        <Breadcrumb className="mt-5">
          <Breadcrumb.Item>
            <Link to="/show_video">show videos </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/show_pdfs">show Pdfs </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Route path="/show_video" component={PlayVideo} />
        <Route path="/show_pdfs" component={ShowPdfs} />
      </Router>
    </div>
  );
};

export default View;
