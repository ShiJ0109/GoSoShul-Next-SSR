import React from 'react';
import { useNavigate } from 'react-router-dom';

const TagLogin = ({ refData, refs }) => {
  const navigate = useNavigate();
  return (
    <div className="buy-button">
      <span id="signupBtn">
        <a
          href="#"
          className="btn signupBtn btn-main2 login-btn-main2"
          onClick={() => {
            navigate(`/donate:${refs}`);
          }}
        >
          Join
          {' '}
          {refData.ref.referrer_first_name}
          <img
            src="/images/gososhul/right-arrow.png"
            className="img-arrow-rightPLR"
          />
          <span className="btn stickyhead-signupbtn">Sign Up Now</span>
        </a>
      </span>
      <a
        href=""
        className="btn btn-main login-btn-main"
        onClick={() => {
          navigate('/user/login');
        }}
      >
        login
      </a>
    </div>
  );
};

export default TagLogin;
