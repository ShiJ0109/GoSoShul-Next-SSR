import React from 'react';
import BasicJoin from './BasicJoin';
import BasicVideo from './BasicVideo';

const BasicTagContainer = ({ refData, shulName, videoLink, ref }) => {
  return (
    <div className="container">
      <div className="row flex-column-reverse flex-sm-row align-items-center iphn-n-px-size">
        <BasicJoin refData={refData} shulName={shulName} ref={ref} />
        <BasicVideo videoLink={videoLink} />
      </div>
    </div>
  );
};

export default BasicTagContainer;
