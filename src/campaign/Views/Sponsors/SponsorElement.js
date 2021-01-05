import React from 'react';
import * as utils from 'utils/common';

const SponsorElement = ({ sponsor }) => {
  console.log(sponsor);
  return (
    <div className="card bg-trans shop-list border-0 position-relative overflow-hidden m-2">
      {/* <div
        className="shop-image position-relative overflow-hidden rounded rec1"
        style={{ height: 100, width: 'auto', backgroundColor: colors.blue }}
      > */}
      <a
        href="#"
        onClick={() => { typeof window !== 'undefined' && window.open(utils.getHostUrl(sponsor.url), '', ''); }}
        className="overlay-work"
      >
        <img
          src={sponsor.logo_link}
          className="img-fluid"
          style={{ maxHeight: 100, width: 'auto' }}
          alt="..."
        />
      </a>
      {/* </div> */}
    </div>
  );
};

export default SponsorElement;
