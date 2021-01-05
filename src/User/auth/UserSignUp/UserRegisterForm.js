import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// invoke backend api
import * as userRequests from 'services/userRequests';
import { Formik } from 'formik';
import FormInput from './FormInput';
import Submit from './Submit';
import Upload from './Upload';

const UserRegisterForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={
      Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        firstName: Yup.string().max(255).required('First name is required'),
        lastName: Yup.string().max(255).required('Last name is required'),
        password: Yup.string().max(255).required('password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
      })
    }
      onSubmit={(values) => {
        console.log(values);
        const req = {
          email: values.email,
          first_name: values.firstName,
          last_name: values.lastName,
          password: values.password,
        };
        const ret = userRequests.PostSignUp(req);
        console.log(ret);
        navigate('/', { replace: true });
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
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              label="First name"
              name="firstName"
              placeholder="Enter First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
            />
            <FormInput
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              label="Last name"
              name="lastName"
              placeholder="Enter Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
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
            <FormInput
              error={Boolean(touched.confirmPassword && errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
              label="Confirm Password"
              name="confirmPassword"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.confirmPassword}
            />
            <Submit
              disabled={isSubmitting}
              label="Sign Up"
              />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default UserRegisterForm;
