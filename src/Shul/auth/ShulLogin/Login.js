import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ShulUserContainer } from 'containers';

// import Loading Spin Component
import { Spin } from 'components/Loading/Loading';
import ShulLoginForm from './ShulLoginForm';

// import LoadingContext
import { LoadingContext } from './LoadingContext';

const Login = ({ userState, shulUserActions }) => {
  const navigate = useNavigate();
  const loadingState = useContext(LoadingContext);

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
                <ShulLoginForm />
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

Login.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string,
    error: PropTypes.string
  }).isRequired,
  shulUserActions: PropTypes.shape({
    logout: PropTypes.func
  }).isRequired
};

export default ShulUserContainer(Login);
