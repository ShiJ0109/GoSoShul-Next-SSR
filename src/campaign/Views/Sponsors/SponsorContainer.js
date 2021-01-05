import React from 'react';
import SponsorHeader from './SponsorHeader';
import SponsorLists from './SponsorLists';

const SponsorContainer = ({sponsors}) => {
  return (
    <div className="container">
      <div className="row iphn-n-px-size">
        <SponsorHeader />
        <SponsorLists sponsors={sponsors} />
        {}
      </div>
      {}
    </div>
  );
};

export default SponsorContainer;
