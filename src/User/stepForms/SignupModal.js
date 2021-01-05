import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
// invoke backend api
import * as userRequests from 'services/userRequests';
import Warning from 'components/Typography/Warning';

const SignupModal = ({ refToken, handleSession }) => {
  const [register, setRegister] = useState(false);
  if (register) return null;
  return (
    <div
      className="backdrop1 animate__animated animate__bounceInLeft"
      style={
      {
        opacity: 1,
        display: 'block'
      }
    }
    >
      <div
        id="myModal"
        className="col-lg-7  col-md-7  col-sm-7 bg-goback-box "
      >
        <h5 className="join-font mb-2">Lets Get Started </h5>
        <p className="para-fnt1">
          Please review and confirm your personal information…
        </p>
        <Formik
          initialValues={{
            email: '',
            firstName: '',
            lastName: '',
          }}
          validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                firstName: Yup.string().max(255).required('First name is required'),
                lastName: Yup.string().max(255).required('Last name is required'),
              })
            }
          onSubmit={(values) => {
            const req = {
              email: values.email,
              first_name: values.firstName,
              last_name: values.lastName,
              password: '',
              refToken,
            };
            // userRequests.PostSignUp(req)
            //   .then((ret) => {
            //     if (ret.stat === 'success') {
            //       handleSession(ret.data.session);
            //       setRegister(true);
            //     } else {
            //       window.alert(ret.error.response.data.status);
            //     }
            //   });
              // Debug mode
            setRegister(true);
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
              <div className="form-row mt-4">
                <div className="col-12 col-sm-6 lestgo-formfiled1">
                  <label className="label-font-clr">First Name</label>
                  <input
                    className="multisteps-form__input form-control font-filed-backgo "
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                  />
                  <Warning>{touched.firstName && errors.firstName}</Warning>
                </div>
                <div className="col-12 col-sm-6 mt-4 mt-sm-0 pl-2 ">
                  <label className="label-font-clr">Last Name</label>
                  <input
                    className="multisteps-form__input form-control font-filed-backgo"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                  />
                  <Warning>{touched.lastName && errors.lastName}</Warning>
                </div>
              </div>
              <div className="form-row mt-4 mb-2">
                <div className="col-12 col-sm-12">
                  <label className="label-font-clr">Email</label>
                  <input
                    className="multisteps-form__input form-control font-filed-backgo"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    type="email"
                    value={values.email}
                  />
                  <Warning>{touched.email && errors.email}</Warning>
                </div>
              </div>
              <div className="button-row d-flex mt-4 mb-5 letsgoo-btn-float-chng ">
                <button
                  type="submit"
                  className="btn btn-padding-chng go-btn-1 js-btn-next"
                >
                  Let’s Go!
                </button>
              </div>
            </form>
          )}

        </Formik>

      </div>
    </div>

  );
};

export default SignupModal;
