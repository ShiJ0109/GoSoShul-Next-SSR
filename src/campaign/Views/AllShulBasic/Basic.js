import React from 'react';
import BasicContainer from './BasicContainer';

const Basic = ({videoLink }) => {
  return (
    <section className="bg-half-170 index2-bg d-table w-100 padding-header-index2 " id="home">
      <BasicContainer videoLink={videoLink} />
    </section>
  );
};

export default Basic;
