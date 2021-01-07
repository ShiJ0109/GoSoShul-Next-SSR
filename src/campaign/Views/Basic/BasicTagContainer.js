import React from 'react';
import BasicJoin from './BasicJoin';
import BasicVideo from './BasicVideo';

const BasicTagContainer = ({ refData, shulName, videoLink, refs }) => {
  return (
    <div className="container">
      <div className="row flex-column-reverse flex-sm-row align-items-center iphn-n-px-size">
        <BasicJoin refData={refData} shulName={shulName} refs={refs} />
        <BasicVideo videoLink={videoLink} />
      </div>
    </div>
  );
};

export default BasicTagContainer;
