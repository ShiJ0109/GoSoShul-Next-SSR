import React from 'react';
import BasicJoin from './BasicJoin';
import BasicVideo from './BasicVideo';

const BasicContainer = ({ refData, shulName, videoLink }) => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <BasicJoin refData={refData} shulName={shulName} />
        <BasicVideo videoLink={videoLink} />
      </div>
    </div>
  );
};

export default BasicContainer;
