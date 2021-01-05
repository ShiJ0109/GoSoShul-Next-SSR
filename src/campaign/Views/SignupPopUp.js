import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPopUp = () => {
  const navigate = useNavigate();
  return (
    <div className="signupBottomButtonContainer text-center" style={{ display: 'flex' }}>
      <img
        src="/images/gososhul/signupLogo.png"
        className="signupBtn"
        alt="Gososhul Logo"
        height={35}
      />
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate('/donate');
        }}
        className="btn signupBtn login-btn-main2"
      >
        <span className="btn stickyhead-signupbtn">Sign Up Now</span>
      </a>
    </div>
  );
};

export default SignupPopUp;
