import React from 'react';
import BasicContainer from './BasicContainer';
import BasicTagContainer from './BasicTagContainer';

const Basic = ({
  refData, shulName, videoLink, refs
}) => {
  return (
    <section className="bg-half-170  d-table w-100 padding-header1" id="home">
      {
      refData === false
        ? <BasicContainer videoLink={videoLink} />
        : (
          <BasicTagContainer
            refData={refData.ref}
            shulName={shulName}
            videoLink={videoLink}
            refs={refs}
          />
        )
}
    </section>
  );
};

export default Basic;
