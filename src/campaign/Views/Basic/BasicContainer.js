import React from 'react';
import { useNavigate } from 'react-router-dom';

const BasicContainer = ({ videoLink }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-2 " />
        <div className="col-lg-8 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <div className="position-relative">
            <div className="player-youtube ">
              <iframe width="750" height="380" src={videoLink} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen />
            </div>
            <div className="watch-video text-center pt-4 font-fm1 fadeinonly ">
              Let's Make History.
              <a
                href=""
                className="btn go-btn-1 ml-2 mr-4 btn-padding-chng"
                onClick={() => {
                  navigate('/donate');
                }}
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 " />
      </div>
    </div>
  );
};

export default BasicContainer;
