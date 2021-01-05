import React, {
  useEffect, useState, useContext, useRef
} from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

// import React Alert
import AlertDialog from 'components/Modal/Alert';

// import ShulLoginCookies
import ShulLoginCookies from 'cookies/ShulLoginCookies';
import { Formik } from 'formik';
import { ShulUserContainer } from 'containers';
import Submit from './Submit';
import FormInput from './FormInput';
// import LoadingContext
import { LoadingContext } from './LoadingContext';

const defaultCookies = {
  rememberMe: false,
  email: null,
  password: null,
};

const ShulLoginForm = ({ userState, shulUserActions }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  let shulLoginState = (ShulLoginCookies.loadState() === undefined)
    ? defaultCookies : ShulLoginCookies.loadState();
  const { handleShulLogin } = shulUserActions;
  const [rememberMe, setRememberMe] = useState(shulLoginState.rememberMe);
  const { session, error } = userState;
  const { logout } = shulUserActions;

  // logout
  useEffect(() => {
    logout();
  }, []);

  if (session) navigate('/shul/dashboard');

  return (
    <Formik
      initialValues={{
        email: shulLoginState.email,
        password: shulLoginState.password,
      }}
      validationSchema={
      Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().max(255).required('password is required'),
      })
    }
      onSubmit={(values) => {
        const { email, password } = values;
        if (email && password) {
          shulLoginState = values;
          shulLoginState = { ...shulLoginState, rememberMe };
          if (rememberMe) {
            ShulLoginCookies.saveState(shulLoginState);
            console.log(shulLoginState);
          } else {
            ShulLoginCookies.saveState(defaultCookies);
          }
          handleShulLogin(email, password);
          setLoading(true);
        }
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
          <AlertDialog
            open={error}
            handleClose={() => {
              logout();
              setLoading(false);
            }}
            error={error}
          />
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
                  <span
                    className="checkmark"
                    onClick={() => {
                      if (rememberMe === false) setRememberMe(true);
                      console.log(rememberMe);
                    }}
                  >
                    {
                    rememberMe ? (
                      <span
                        style={
                        {
                          position: 'absolute',
                          top: '3px',
                          left: '3px',
                          width: '14px',
                          height: '14px',
                          borderRadius: '50%',
                          background: '#75F93E',
                          display: 'block'
                        }
                    }
                      />
                    ) : ''
                    }
                  </span>
                </label>
              </div>
            </div>
            <Submit
              disabled={loading}
              label="Log in"
            />
            <div className="col-lg-12 mt-4 text-center">
              <p>
                <a
                  href="#"
                  className="go-label-2"
                  onClick={() => {
                    navigate('/shul/forgetpassword');
                  }}
                >
                  Forgot Your Password?
                </a>
              </p>
            </div>
            <div className="col-lg-12 mt-4 text-center">
              <p>
                <a
                  href="#"
                  className="go-label-2"
                  onClick={() => {
                    navigate('/shul/register');
                  }}
                >
                  Sign Up?
                </a>
              </p>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
ShulLoginForm.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string,
    error: PropTypes.string
  }).isRequired,
  shulUserActions: PropTypes.shape({
    handleShulLogin: PropTypes.func
  }).isRequired
};

export default ShulUserContainer(ShulLoginForm);
