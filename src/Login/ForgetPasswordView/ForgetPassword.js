import React from 'react';
import ForgetPasswordForm from './ForgetPasswordForm';

const ForgetPassword = () => {
  return (
    <section className="bg-home  d-flex align-items-center borderb-green">
      <div className="bg-overlay" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card login-page border-0">
              <div className="card-body webmegasize">
                <div className="text-center padding-img1">
                  <img
                    src="/images/gososhul/logo.png"
                    width={150}
                    className
                    alt=" Go Soshul"
                  />
                </div>
                <h3 className="card-title text-center log-in-font-reg ">Forget Password</h3>
                <p className="go-text-color1  text-center">
                  Your One Touch, Can Change The Whole World!
                </p>
                <ForgetPasswordForm />
              </div>
            </div>
            {}
          </div>
          {}
        </div>
        {}
        <div className="text-center">
          <p className="go-footer login-footer-chngMT">©️ 2020 Copyright GoSoshul</p>
        </div>
      </div>
      {' '}
      {}
    </section>
  );
};

export default ForgetPassword;
