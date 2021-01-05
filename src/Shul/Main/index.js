import React from 'react';
import { Helmet } from 'react-helmet';
import Html from './Html';

const ShulMain = () => {
  return (
    <div className="go-web-bg">
      <Helmet>
        <style type="text/css">
          {`
          @media only screen and (max-width: 1366px) , screen and (max-height: 647px) {
            .watch-video.text-center{
               padding-top: 20px !important;
            }
         }
         @media only screen and (min-height: 768px) {
            .watch-video.text-center{
               padding-top: 70px !important;
            }
         }
          `}
        </style>
      </Helmet>
      <Html />
      <h2>Test</h2>
    </div>
  );
};
export default ShulMain;
