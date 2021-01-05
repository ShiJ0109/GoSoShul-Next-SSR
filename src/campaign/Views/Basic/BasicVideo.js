import React from 'react';

const BasicVideo = ({ videoLink }) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
      <div className="position-relative">
        <div className="player-youtube-index">
          <iframe src={videoLink} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen />
        </div>
      </div>
    </div>
  );
};

export default BasicVideo;
