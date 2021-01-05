import React from 'react';
import { useNavigate } from 'react-router-dom';

const BasicJoin = ({ refData, shulName, ref }) => {
  const navigate = useNavigate();
  return (
    <div className="col-lg-6 col-md-7col-lg-6 col-md-6 col-sm-6">
      <div className="title-heading ">
        <h5 className="heading mb-3 animate__animated animate__bounceInLeft">
          {refData.referred_firstname}
          ,
          {refData.referrer_first_name}
          {' '}
          {refData.referrer_last_name}
          {' '}
          <br />
          Tagged You To
          {' '}
          <span>GoSoshul!</span>
        </h5>
        <p className="para-desc text-muted animate__animated animate__bounceInLeft">
          {refData.referrer_first_name}
          {' '}
          has invited you to join the campaign to help
          {shulName}
          {' '}
          and the other 541 shuls across the world who need your
          help.
        </p>
        <div className="mt-4 go-text1 animate__animated animate__bounceInLeft">
          <span className="joinJosh-mob">
            Join
            {' '}
            {refData.referrer_first_name}
            <img
              src="/images/gososhul/right-arrow.png"
              className="pl-2 pr-3 mob-arrow-None"
            />
          </span>
          <a
            href="#"
            className="btn btn-padding-chng go-btn-1"
            onClick={() => {
              navigate(`/donate:${ref}`);
            }}
          >
            {' '}
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BasicJoin;
