import React from 'react';
import ShulRegisterForm from './ShulRegisterForm';

const SignUp = () => {
  return (
    <section className="bg-home  d-flex align-items-center signUpPageNewHeight1 ">
      <div className="bg-overlay" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card  bg-transparent   border-0">
              <div className="card-body">
                <div className="text-center padding-img2 ">
                  <img
                    src="/images/gososhul/logo.png"
                    className
                    alt=" Go Soshul"
                  />
                </div>
                <h5 className="card-title text-center newshulsignupsize">Shul Sign Up</h5>
                <p className="go-text-color1  text-center signUpPageNewPB">
                  Your One Touch, Can Change The Whole World!
                </p>
                <ShulRegisterForm />
              </div>
            </div>
            {}
          </div>
          {}
        </div>
        {}
        <div className="text-center signUpPageNewcopyrightpadding ">
          <p className="go-footer signup-footer-chngMT">©️ 2020 Copyright GoSoshul</p>
        </div>
      </div>
      {' '}
      {}
    </section>
  );
};

export default SignUp;
