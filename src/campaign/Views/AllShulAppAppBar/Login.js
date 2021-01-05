import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="buy-button">
      <span id="signupBtn">
        <a
          href="#"
          className="btn signupBtn btn-main2 login-btn-main2"
          onClick={() => { navigate('/donate'); }}
        >
          <span className="btn stickyhead-signupbtn">Sign Up Now</span>
        </a>
      </span>

      <a
        href="#"
        className="btn btn-main login-btn-main"
        onClick={() => { navigate('/login'); }}
      >
        Login
      </a>
    </div>
  );
};

export default Login;
