import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'components/Page';
// invoke backend api
import * as apiRequests from 'services/apiRequsts';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ShulRegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Sign Up"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              shulName: '',
              contactFirstName: '',
              contactLastName: '',
              password: '',
              contactPhone: '',
              policy: false
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                shulName: Yup.string().max(255).required('Shul name is required'),
                contactFirstName: Yup.string().max(255).required('First name is required'),
                contactLastName: Yup.string().max(255).required('Last name is required'),
                contactPhone: Yup.string().max(255).required('Contact phone is required'),
                password: Yup.string().max(255).required('password is required'),
                policy: Yup.boolean().oneOf([true], 'This field must be checked')
              })
            }
            onSubmit={ (values) => {
              console.log(values);
              const req = {
                shul_name: values.shulName,
                email: values.email,
                contact_first_name: values.contactFirstName,
                contact_last_name: values.contactLastName,
                phone: values.contactPhone,
                password: values.password,
              };
              const ret = apiRequests.PostSignUp(req);
              console.log(ret);
              navigate('/app/dashboard', { replace: true });
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
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create new account
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Use your email to create new account
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.shulName && errors.shulName)}
                  fullWidth
                  helperText={touched.shulName && errors.shulName}
                  label="Shul name"
                  margin="normal"
                  name="shulName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.shulName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.contactFirstName && errors.contactFirstName)}
                  fullWidth
                  helperText={touched.contactFirstName && errors.contactFirstName}
                  label="Contact First name"
                  margin="normal"
                  name="contactFirstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contactFirstName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.contactLastName && errors.contactLastName)}
                  fullWidth
                  helperText={touched.contactLastName && errors.contactLastName}
                  label="Contact Last name"
                  margin="normal"
                  name="contactLastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contactLastName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.contactPhone && errors.contactPhone)}
                  fullWidth
                  helperText={touched.contactPhone && errors.contactPhone}
                  label="Contact Phone"
                  margin="normal"
                  name="contactPhone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contactPhone}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box
                  alignItems="center"
                  display="flex"
                  ml={-1}
                >
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    I have read the
                    {' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                  >
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default ShulRegisterView;
