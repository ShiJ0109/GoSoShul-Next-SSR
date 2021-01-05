import React from 'react';
import UserRegisterForm from './UserRegisterForm';

const SignUp = () => {
  return (
    <section className="bg-home  d-flex align-items-center borderb-green ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8">
            <div className="card  bg-white   border-0">
              <div className="card-body">
                <div className="text-center pb-3 ">
                  <img
                    src="/images/gososhul/logo.png"
                    width={150}
                    className
                    alt=" Go Soshul"
                  />
                </div>
                <h5 className="card-title text-center">User Sign Up</h5>
                <p className="go-text-color1  text-center">
                  Your One Touch, Can Change The Whole World!
                </p>
                <UserRegisterForm />
              </div>
            </div>
            {}
          </div>
          {}
        </div>
        {}
        <div className="text-center pb-2  ">
          <p className="go-footer mb-0">©️ 2020 Copyright GoSoshul</p>
        </div>
      </div>
      {' '}
      {}
    </section>
  );
};

export default SignUp;
