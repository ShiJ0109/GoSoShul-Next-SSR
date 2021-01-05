import React, {
  useEffect, useState
} from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Warning from 'components/Typography/Warning';

// import React Alert
import AlertDialog from 'components/Modal/Alert';

// import UserLoginCookies
import UserLoginCookies from 'cookies/UserLoginCookies';
import { Formik } from 'formik';
import { UserContainer } from 'containers';
import Submit from './Submit';
import FormInput from './FormInput';
// import LoadingContext

const defaultCookies = {
  rememberMe: false,
  email: null,
  password: '',
};

const LoginForm = ({ userState, userActions }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  let userLoginState = (UserLoginCookies.loadState() === undefined)
    ? defaultCookies : UserLoginCookies.loadState();
  const { handleLogin } = userActions;
  const [rememberMe, setRememberMe] = useState(userLoginState.rememberMe);
  const { session, role, error } = userState;
  const { logout } = userActions;

  // logout
  useEffect(() => {
    logout();
  }, []);

  if (session) {
    if (role === 'user') navigate('/user/dashboard');
    if (role === 'shul') navigate('/shul/dashboard');
  }

  return (
    <Formik
      initialValues={{
        email: userLoginState.email ? userLoginState.email : '',
        password: userLoginState.password ? userLoginState.password : '',
      }}
      validationSchema={
      Yup.object().shape({
        email: Yup.string().max(255).required('Email is required')
          .email('Must be a valid email'),
        // password: Yup.string().max(255).required('password is required'),
        // debug mode for not reqired
        password: Yup.string().max(255),
      })
    }
      onSubmit={(values) => {
        const { email, password } = values;
        // if (email && password) {
        // debug mode for password
        if (email) {
          userLoginState = values;
          userLoginState = { ...userLoginState, rememberMe };
          if (rememberMe) {
            UserLoginCookies.saveState(userLoginState);
            console.log(userLoginState);
          } else {
            UserLoginCookies.saveState(defaultCookies);
          }
          handleLogin(email, password);
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
            <div className="col-lg-12 login-form-paddingLR">
              <div className="form-group position-relative">
                <label className="go-text-color2 loginlabelChng-size">Password</label>
                <input
                  type={show ? 'text' : 'password'}
                  className="form-control go-input-filed"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <span
                  toggle="#password-field"
                  className={show ? 'fa fa-fw field-icon toggle-password fa-eye' : 'fa fa-fw field-icon toggle-password fa-eye-slash'}
                  onClick={() => { setShow(!show); }}
                />
                <Warning>{touched.password && errors.password}</Warning>
              </div>
            </div>
            <div className="col-lg-12 login-form-paddingLR">
              <div
                className="form-group mb-3"
              >
                <label
                  className="container1 list-text-color3 txt-chng2"
                >
                  Remember Me
                  <input type="radio" name="radio" />
                  <span
                    onClick={() => {
                      setRememberMe(!rememberMe);
                      console.log(rememberMe);
                    }}
                    className="checkmark1"
                    style={
                      {
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: '#eee',
                        display: 'block'
                      }
                  }
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
                          display: rememberMe ? 'block' : 'none'
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
            <div className="col-lg-12 ForgotPassMt text-center">
              <p>
                <a
                  href="#"
                  className="go-label-2"
                  onClick={() => {
                    navigate('/forgetpassword');
                  }}
                >
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
LoginForm.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string,
    role: PropTypes.string,
    error: PropTypes.string
  }).isRequired,
  userActions: PropTypes.shape({
    handleLogin: PropTypes.func
  }).isRequired
};

export default UserContainer(LoginForm);
