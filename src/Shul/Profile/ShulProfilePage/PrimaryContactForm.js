import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { UserContainer, ShulDashboardContainer } from 'containers';
import Warning from 'components/Typography/Warning';
import * as apiRequests from 'services/apiRequsts';
import FormInput from './FormInput';

const PrimaryContactForm = ({
  formData, handleData, userState, shulDashboardState, shulDashboardActions
}) => {
  const { session } = userState;
  let { profile, shul_status } = shulDashboardState;
  const { handleResetData } = shulDashboardActions;
  // states for ChangePassword Modal
  const [visible, setVisible] = React.useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  // state for password/text show
  const [show, setShow] = React.useState({
    current: false,
    new: false,
    confirm: false,
  });

  return (
    <Formik
      initialValues={{
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        confirmPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().max(255).required('First Name is required'),
        lastName: Yup.string().max(255).required('Last Name is required'),
        phone: Yup
          .string().max(255)
          .matches(/^((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$/, 'Is not correct type  ')
          .required('Phone is required'),
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        confirmPassword: Yup.string().max(255),
        newPassword: Yup.string().max(255),
        confirmNewPassword: Yup
          .string()
          .max(255)
          .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      })}
      onSubmit={(values) => {
        const {
          firstName, lastName, phone, email
        } = values;
        const contact = {
          first_name: firstName,
          last_name: lastName,
          phone,
          email,
        };
        profile = {
          ...profile,
          contact
        };
        apiRequests.SetContact(session, '', contact)
          .then((ret) => {
            if (ret.stat === 'success') {
              handleResetData({
                key: 'profile',
                value: profile
              });
              // change profile status for dashboard
              handleResetData({
                key: 'shul_status',
                value: {
                  ...shul_status,
                  profile: ret.data.profile,
                }
              });
              handleData(values);
              window.alert('Success');
            } else {
              window.alert(ret.error.response.data.status);
            }
          })
          .catch((error) => {
            console.log(error);
            window.alert('Post Primary Contact Data failed');
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
          className="form form-shul-proflepaddingL"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <FormInput
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              label="First Name"
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="firstName"
              value={values.firstName}
              placeholder="Enter First Name"
            />
            <FormInput
              error={Boolean(touched.phone && errors.phone)}
              fullWidth
              helperText={touched.phone && errors.phone}
              label="Phone Number"
              margin="normal"
              name="phone"
              onBlur={handleBlur}
              onChange={handleChange}
              type="phone"
              value={values.phone}
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="form-row">
            <FormInput
              error={Boolean(touched.lastName && errors.lastName)}
              fullWidth
              helperText={touched.lastName && errors.lastName}
              label="Last Name"
              margin="normal"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="lastName"
              value={values.lastName}
              placeholder="Enter Last Name"
            />
            <div className="form-group col-md-6 pr-3">
              <label className="label-txt-clr">Password</label>
              <input
                type="password"
                className="from-input-inside form-control"
                placeholder=""
                name="password"
                // onChange={handleChange}
                onBlur={handleBlur}
                readOnly
              />
              <button
                className="btn chng-pass-btn11 float-right"
                type="button"
                id="new-pass-filed"
                onClick={() => openModal()}
              >
                Change Password
              </button>
              {
              visible
              && (
                <Modal closeModal={() => closeModal()} onClickAway={() => closeModal()}>
                  <p>Change Password</p>
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-1" />
                      <div className="form-group col-md-10">
                        <div className="form-group position-relative">
                          <label className="label-txt-clr">Current Password</label>
                          <input
                            className="form-control go-input-filed"
                            placeholder="Current Password"
                            name="confirmPassword"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={show.current ? 'text' : 'password'}
                            value={values.confirmPassword}
                          />
                          <span
                            toggle="#password-field"
                            className={show.current ? 'fa fa-fw field-icon toggle-password fa-eye' : 'fa fa-fw field-icon toggle-password fa-eye-slash'}
                            onClick={() => {
                              setShow({
                                ...show, current: !show.current
                              });
                            }}
                            style={{
                              float: 'right',
                              marginLeft: '-25px',
                              marginTop: '-30px',
                              position: 'relative',
                              zIndex: '2',
                              marginRight: '10px',
                              color: '#747d8c',
                            }}
                          />
                        </div>
                        <Warning>{touched.confirmPassword && errors.confirmPassword}</Warning>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-1" />
                      <div className="form-group col-md-10">
                        <label className="label-txt-clr">New Password</label>
                        <input
                          className="from-input-inside form-control"
                          placeholder="New Password"
                          name="newPassword"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={show.new ? 'text' : 'password'}
                          value={values.newPassword}
                        />
                        <span
                          toggle="#password-field"
                          className={show.new ? 'fa fa-fw field-icon toggle-password fa-eye' : 'fa fa-fw field-icon toggle-password fa-eye-slash'}
                          onClick={() => {
                            setShow({
                              ...show, new: !show.new
                            });
                          }}
                          style={{
                            float: 'right',
                            marginLeft: '-25px',
                            marginTop: '-30px',
                            position: 'relative',
                            zIndex: '2',
                            marginRight: '10px',
                            color: '#747d8c',
                          }}
                        />
                        <Warning>{touched.newPassword && errors.newPassword}</Warning>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-1" />
                      <div className="form-group col-md-10">
                        <label className="label-txt-clr">Confirm New Password</label>
                        <input
                          className="from-input-inside form-control"
                          placeholder="Password"
                          name="confirmNewPassword"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={show.confirm ? 'text' : 'password'}
                          value={values.confirmNewPassword}
                        />
                        <span
                          toggle="#password-field"
                          className={show.confirm ? 'fa fa-fw field-icon toggle-password fa-eye' : 'fa fa-fw field-icon toggle-password fa-eye-slash'}
                          onClick={() => {
                            setShow({
                              ...show, confirm: !show.confirm
                            });
                          }}
                          style={{
                            float: 'right',
                            marginLeft: '-25px',
                            marginTop: '-30px',
                            position: 'relative',
                            zIndex: '2',
                            marginRight: '10px',
                            color: '#747d8c',
                          }}
                        />
                        <Warning>{touched.confirmNewPassword && errors.confirmNewPassword}</Warning>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-1" />
                      <div className="form-group col-md-10">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            if (values.newPassword === values.confirmNewPassword) {
                              apiRequests.ChangePassword({
                                session,
                                id: '',
                                old_password: values.confirmPassword,
                                new_password: values.confirmNewPassword
                              })
                                .then((ret) => {
                                  if (ret.stat === 'success') {
                                    window.alert('Success');
                                  } else {
                                    window.alert(ret.error.response.data.status);
                                  }
                                })
                                .catch((error) => {
                                  console.log(error);
                                  window.alert('Post Primary Contact Data failed');
                                });
                              closeModal();
                            }
                          }}
                    // handleSubmit={handleSubmit()}
                          className="btn greenbtn  col-md-12 waves-effect waves-light"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </Modal>
              )
              }
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 email-top pr-3">
              <label className="label-txt-clr">Email</label>
              <input
                className="from-input-inside form-control"
                placeholder="Password"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
              />
              <Warning>{touched.email && errors.email}</Warning>
            </div>
            <div className="form-group col-md-6 pl-2 pt-2">
              <button
                className="btn greenbtn  col-md-12 waves-effect waves-light"
                type="submit"
              >
                Save Profile
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

PrimaryContactForm.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
  handleData: PropTypes.func.isRequired,
  shulDashboardState: PropTypes.object,
  shulDashboardActions: PropTypes.object,
};

export default ShulDashboardContainer(UserContainer(PrimaryContactForm));
