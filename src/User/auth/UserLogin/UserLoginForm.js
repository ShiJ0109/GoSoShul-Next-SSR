import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// invoke backend api
import * as userRequests from 'services/userRequests';
import { Formik } from 'formik'; 
import UserContainer from 'containers/UserContainer';
import FormInput from './FormInput';
import Submit from './Submit';

const UserLoginForm = ({ userState, userActions }) => {
  const navigate = useNavigate();

  const { session, error } = userState;
  const { handleLogin } = userActions;
  if (session) {
    console.log(session);
    // return <h1>Login</h1>;
  }
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={
      Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().max(255).required('password is required'),
      })
    }
      onSubmit={(values) => {
        const { email, password } = values;
        if (email && password) handleLogin(email, password);
        navigate('/user/logintest', { replace: true });
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
              placeholder="Enter Email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
            />
            <FormInput
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              label="Password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
            />
            <div className="col-lg-12 pl-1 pr-1">
              <div className="form-group mb-3">
                <label className="container1 list-text-color3 txt-chng2">
                  Remember Me
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            <Submit
              disabled={isSubmitting}
              label="Log in"
            />
            <div className="col-lg-12 mt-4 text-center">
              <p>
                <a href="#" className="go-label-2">
                  Forgot Your Password?
                </a>
              </p>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
UserLoginForm.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string,
    error: PropTypes.string
  }).isRequired,
  userActions: PropTypes.shape({
    handleLogin: PropTypes.func
  }).isRequired
};

export default UserContainer(UserLoginForm);
