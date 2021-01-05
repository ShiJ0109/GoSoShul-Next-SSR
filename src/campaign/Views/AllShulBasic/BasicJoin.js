import React from 'react';

const BasicJoin = ({refData, shulName}) => {
  return (
    <div className="col-lg-6 col-md-7">
      <div className="title-heading ">
        <h5 className="heading mb-3">
          {refData.referred_firstname}, {refData.referrer_first_name} {refData.referrer_last_name}
          {' '}
          <br />
          Tagged You To
          {' '}
          <span>GoSoshul!</span>
        </h5>
        <p className="para-desc text-muted">
          {refData.referrer_first_name} has invited you to join the campaign to help {shulName} 
          and the other 541 shuls across the world who need your
          help.
        </p>
        <div className="mt-4 go-text1">
          Join {refData.referrer_first_name}
          <img
            src="/images//gososhul/right-arrow.png"
            className="pl-2 pr-3"
          />
          <a href="#" className="btn btn-padding-chng go-btn-1">
            {' '}
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BasicJoin;
