import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { UserContainer, UserDashboardContainer } from 'containers';
import Warning from 'components/Typography/Warning';
import * as userRequests from 'services/userRequests';

const PesonalInfo = ({ userState, userDashboardState, userDashboardActions }) => {
  const { session } = userState;
  const { profile } = userDashboardState;
  const { handleResetData } = userDashboardActions;

  return (
    <div className="active tab-pane" id="activity">
      <Formik
        initialValues={{
          firstName: profile.first_name,
          lastName: profile.last_name,
          email: profile.email,
          confirmPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().max(255).required('First Name is required'),
          lastName: Yup.string().max(255).required('Last Name is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        })}
        onSubmit={(values) => {
          const {
            firstName, lastName, email
          } = values;
          const contact = {
            first_name: firstName,
            last_name: lastName,
            email,
          };
          userRequests.setPersonalInfo(session, '', contact)
            .then((ret) => {
              if (ret.stat === 'success') {
                handleResetData({
                  key: 'profile',
                  value: {
                    ...profile,
                    first_name: firstName,
                    last_name: lastName,
                    email,
                  }
                });
                window.alert('Success');
              } else {
                window.alert(ret.error.response.data.status);
              }
            })
            .catch((error) => {
              console.log(error);
              window.alert('Post User Contact Data failed');
            });
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
          <form
            className="form form-profile-paddingL"
            onSubmit={handleSubmit}
          >
            <div className="form-group col-lg-5 col-md-7 col-sm-12 input-profile-paddingR">
              <label htmlFor="fname" className="label-txt-clr">
                First Name
              </label>
              <input
                type="text"
                className="from-input-inside form-control"
                id="fname"
                placeholder="Enter First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Warning>{touched.firstName && errors.firstName}</Warning>
            </div>
            <div className="form-group col-lg-5 col-md-7 col-sm-12 input-profile-paddingR">
              <label htmlFor="lname" className="label-txt-clr">
                Last Name
              </label>
              <input
                type="text"
                className="from-input-inside form-control"
                id="lname"
                placeholder="Enter First Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Warning>{touched.firstName && errors.firstName}</Warning>
            </div>
            <div className="form-group col-lg-5 col-md-7 col-sm-12 input-profile-paddingR">
              <label htmlFor="useremail" className="label-txt-clr">
                Email
              </label>
              <input
                type="email"
                className="from-input-inside form-control"
                id="useremail"
                placeholder="Enter Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Warning>{touched.email && errors.email}</Warning>
            </div>
            <div className="form-row">
              <div className="form-group col-lg-5 col-md-7 col-sm-12 input-profile-paddingR pl-2 ">
                <label htmlFor="pass" className="label-txt-clr">
                  Password
                </label>
                <input
                  type="text"
                  className="from-input-inside form-control"
                  id="password-field"
                  placeholder="Password"
                />
              </div>
              <div className="ml-2 changebutton input-profile-paddingR">
                <button
                  className="btn changpass-txt1"
                  type="button"
                  id="new-pass-filed"
                >
                  Change Password
                </button>
              </div>
            </div>
            {}
            <div className="mt-3 col-lg-5 col-md-7 savebtnpaddR">
              <button
                className="btn greenbtn  col-md-12 waves-effect waves-light"
                type="submit"
              >
                Save Profile
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

PesonalInfo.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
  userDashboardState: PropTypes.object,
  userDashboardActions: PropTypes.object,
};

export default UserDashboardContainer(UserContainer(PesonalInfo));
