import React from 'react';
import UserLoginForm from './UserLoginForm';
import './Login.css';

const Login = () => {
  return (
    <section className="bg-home  d-flex align-items-center borderb-green">
      <div className="bg-overlay" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8">
            <div className="card login-page border-0">
              <div className="card-body">
                <div className="text-center padding-img1">
                  <img
                    src="/images/gososhul/logo.png"
                    width={150}
                    className
                    alt=" Go Soshul"
                  />
                </div>
                <h3 className="card-title text-center ">Login</h3>
                <p className="go-text-color1  text-center">
                  Your One Touch, Can Change The Whole World!
                </p>
                <UserLoginForm />
              </div>
            </div>
            {}
          </div>
          {}
        </div>
        {}
        <div className="text-center">
          <p className="go-footer">©️ 2020 Copyright GoSoshul</p>
        </div>
      </div>
      {' '}
      {}
    </section>
  );
};

export default Login;
