import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {UserContainer} from 'containers';

// import { SMTPClient } from 'emailjs';
// import React Alert
import AlertDialog from 'components/Modal/Alert';
import * as emailjs from 'emailjs-com';
import * as apiRequests from 'services/apiRequsts';
import { Formik } from 'formik';
import Options from 'constants/MailOptions';
import FormInput from './FormInput';
import Submit from './Submit';

// const client = new SMTPClient({
//   user: 'user',
//   password: 'password',
//   host: 'smtp.your-email.com',
//   ssl: true,
// });

const ShulRegisterForm = ({userActions}) => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  // alert message
  const [message, setMessage] = useState(null);
  const {handleResetData} = userActions;

  return (
    <Formik
      initialValues={{
        email: '',
        shulName: '',
        contactFirstName: '',
        contactLastName: '',
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
      })
    }
      onSubmit={(values) => {
        const req = {
          shul_name: values.shulName,
          email: values.email,
          contact_first_name: values.contactFirstName,
          contact_last_name: values.contactLastName,
          phone: values.contactPhone,
          password: '',
        };
        setAlert(true);
        // emailjs.send('service_co30nsm', 'template_festq15', {
        //   from_name: 'noreply',
        // }, 'user_ti2oOrruNwSp5W0itiQpu')
        //   .then((result) => {
        //     console.log(result.text);
        //   }, (error) => {
        //     console.log(error.text);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
        async function fetchData() {
          const { data, error } = await apiRequests.PostSignUp(req);
          if (data === null) {
            setMessage(error.response.data.status);
          }
          else {
            handleResetData({
              key: 'session',
              value: data.session,
            });
            handleResetData({
              key: 'role',
              value: 'shul',
            });
            navigate('/shul/dashboard');
          }
        }
        fetchData();
        // handleResetData({
        //   key: 'session',
        //   value: '5fad62fe05073',
        // });
        // handleResetData({
        //   key: 'role',
        //   value: 'shul',
        // });
        // navigate('/shul/dashboard');
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
            open={message !== null}
            handleClose={() => {
              setAlert(false);
              setMessage(null);
            }}
            error={message}
          />
          <div className="row">
            <FormInput
              error={Boolean(touched.shulName && errors.shulName)}
              helperText={touched.shulName && errors.shulName}
              label="Shul Name"
              name="shulName"
              placeholder="Enter Shul Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.shulName}
            />
            <FormInput
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              label="Contact Email"
              name="email"
              placeholder="Enter Contact Email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
            />
            <FormInput
              error={Boolean(touched.contactFirstName && errors.contactFirstName)}
              helperText={touched.contactFirstName && errors.contactFirstName}
              label="Contact First name"
              name="contactFirstName"
              placeholder="Enter Contact First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contactFirstName}
            />
            <FormInput
              error={Boolean(touched.contactLastName && errors.contactLastName)}
              helperText={touched.contactLastName && errors.contactLastName}
              label="Contact Last name"
              name="contactLastName"
              placeholder="Enter Contact Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contactLastName}
            />
            <FormInput
              error={Boolean(touched.contactPhone && errors.contactPhone)}
              helperText={touched.contactPhone && errors.contactPhone}
              label="Contact Phone"
              name="contactPhone"
              placeholder="Enter Contact Phone"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contactPhone}
            />
            <Submit
              disabled={alert}
              label="Sign Up"
            />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default UserContainer(ShulRegisterForm);
