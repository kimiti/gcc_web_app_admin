import React, { useEffect, useLayoutEffect, useState } from "react";

import { Form, Button, Row, Col, Breadcrumb } from "react-bootstrap";
import { getVideo } from '../../actions/videos';

import { connect } from "react-redux";

const PlayVideo = ({ getVideo, videos }) => {
  console.log(videos.msg);
  useEffect(() => {
    getVideo()
  }, [getVideo]);

  return (
    <div>
      <p>Edit uploaded video</p>
      <div>
        {videos.map((video) => (
          <div className="card p-3 my-2">
            {video.videoTitle}
            </div>
            
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  videos: state.video.videos
});

export default connect(mapStateToProps, { getVideo })(PlayVideo);