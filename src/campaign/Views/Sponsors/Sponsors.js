import React from 'react';
import SponsorContainer from './SponsorContainer';

const Sponsors = ({sponsors}) => {
  return (
    <section
      className="section pt-2 pb-0"
      style={{
        background: 'rgb(241,242,246, 0.5)'
      }}
    >
      <SponsorContainer sponsors={sponsors} />
      {}
    </section>
  );
};

export default Sponsors;
