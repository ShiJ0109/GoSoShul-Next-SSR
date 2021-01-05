import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

// invoke backend api
import * as apiRequests from 'services/apiRequsts';

// import ShulLoginCookies
import ShulLoginCookies from 'cookies/ShulLoginCookies';
import { Formik } from 'formik';
import { UserContainer } from 'containers';
import AllShulDonorLists from 'campaign/Views/Donors/AllShulDonorLists';
import FormInput from './FormInput';
import Submit from './Submit';

const defaultCookies = {
  rememberMe: false,
  email: null,
  password: null,
};

const ForgetPasswordForm = ({ userState, userActions }) => {
  const navigate = useNavigate();
  let shulLoginState = (ShulLoginCookies.loadState() === undefined)
    ? defaultCookies : ShulLoginCookies.loadState();
  const { session, error } = userState;
  const { handleShulLogin } = userActions;
  const [rememberMe, setRememberMe] = useState(shulLoginState.rememberMe);
  if (session) {
    console.log(session);
    // return <h1>Login</h1>;
  }
  return (
    <Formik
      initialValues={{
        email: shulLoginState.email,
      }}
      validationSchema={
      Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
      })
    }
      onSubmit={(values) => {
        const { email, password } = values;
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="row">
            <FormInput
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              label="Email Address"
              name="email"
              placeholder="Enter Contact Email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
            />
            <Submit
              disabled={isSubmitting}
              label="Submit"
            />
            <div className="col-lg-12 mt-4 text-center">
              <p>
                <a
                  href="#"
                  className="go-label-2"
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
ForgetPasswordForm.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string,
    error: PropTypes.string
  }).isRequired,
  userActions: PropTypes.shape({
    handleLogin: PropTypes.func
  }).isRequired
};

export default UserContainer(ForgetPasswordForm);
