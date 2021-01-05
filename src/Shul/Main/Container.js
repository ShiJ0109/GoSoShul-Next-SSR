import React from 'react';
import Video from './Video';

const Container = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-2 col-md-0 col-sm-0" />
        <div className="col-lg-8 col-md-8 col-sm-8">
          <div className="position-relative">
            <p className=" web-text text-center worldwide-text-paddingTB">
              Worldwide Shul Campaign
            </p>
            <div className="player-youtube ">
              <iframe
                width={750}
                height={380}
                src="https://www.youtube.com/embed/aiegUzPX8Zc"
                frameBorder={0}
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
              />
            </div>
            <div className="play-icon">{}</div>
            <Video />
          </div>
        </div>
        {}
        <div className="col-lg-2 col-md-0 col-sm-0" />
      </div>
      {}
    </div>
  );
};

export default Container;
