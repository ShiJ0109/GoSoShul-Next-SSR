import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { UserContainer, ShulDashboardContainer } from 'containers';
import Select from 'react-select';
import { StateList } from 'models/shul/StateList';
import Warning from 'components/Typography/Warning';
import * as apiRequests from 'services/apiRequsts';
import FormInput from './FormInput';

const stateOptions = StateList;

const countryOptions = [
  { value: 'USA', label: 'USA' },
];

const ShulInfoForm = ({
  formData, handleData, userState, shulDashboardState, shulDashboardActions
}) => {
  const navigate = useNavigate();
  const { session } = userState;
  let { profile, shul_status } = shulDashboardState;
  const { handleResetData } = shulDashboardActions;
  // state for Select Component
  const [selectedState, setSelectedState] = useState(formData.state);
  const [selectedCountry, setSelectedCountry] = useState(formData.country);

  const handleStateChange = (stateValue) => {
    console.log(selectedState);
    setSelectedState(stateValue);
  };

  const handleCountryChange = (countryValue) => {
    setSelectedCountry(countryValue);
  };
  return (
    <div className="tab-pane">
      <Formik
        initialValues={{
          orgName: formData.legalName,
          address_1: formData.address_1,
          taxId: formData.taxId,
          address_2: formData.address_2,
          country: formData.country,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode
        }}
        validationSchema={Yup.object().shape({
          orgName: Yup.string().max(255).required('Organization Name is required'),
          address_1: Yup.string().max(255).required('Address line 1 is required'),
          address_2: Yup.string().max(255).required('Address line 2 is required'),
          taxId: Yup
            .string()
            .trim()
            .matches(/(^[1-9]\d?-\d{7}$)/, 'Is not in correct format')
            .required('Tax ID is required'),
          country: Yup.string().max(255).required('Country is required'),
          city: Yup.string().max(255).required('City is required'),
          state: Yup.string().max(255).required('State is required'),
          zipCode: Yup
            .string()
            .trim()
            .matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, 'Is not in correct format')
            .required('Zip Code is required'),
        })}
        onSubmit={(values) => {
          const {
            orgName, address_1, address_2, taxId, country, city, state, zipCode
          } = values;
          const shul_info = {
            legal_name: orgName,
            tax_id: taxId,
            country,
            state,
            address_line_1: address_1,
            address_line_2: address_2,
            city,
            zip_code: zipCode,
          };
          profile = {
            ...profile,
            shul_info,
          };
          apiRequests.SetProfile(session, '', shul_info)
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
                handleData({
                  ...values,
                  legalName: values.orgName
                });
                window.alert('Success');
              } else {
                window.alert(ret.error.response.data.status);
              }
            })
            .catch((error) => {
              console.log(error);
              window.alert('Post Primary Contact Data failed');
            });
        // if (shulName && taxId && country ) handleLogin(shulName, taxId, country);
        // navigate('/app/dashboard', { replace: true });
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
          <form className="form form-paddingL" onSubmit={handleSubmit}>
            <div className="form-row">
              <FormInput
                error={Boolean(touched.orgName && errors.orgName)}
                helperText={touched.orgName && errors.orgName}
                label="Organization’s Legal Name"
                name="orgName"
                onBlur={handleBlur}
                onChange={handleChange}
                type="orgName"
                value={values.orgName}
                placeholder="Input your shuls legal name"
              />

              <FormInput
                error={Boolean(touched.address_1 && errors.address_1)}
                helperText={touched.address_1 && errors.address_1}
                label="Address Line 1"
                name="address_1"
                onBlur={handleBlur}
                onChange={handleChange}
                type="address_1"
                value={values.address_1}
                placeholder="Enter Address Line 1"
              />
            </div>
            <div className="form-row">
              <FormInput
                error={Boolean(touched.taxId && errors.taxId)}
                helperText={touched.taxId && errors.taxId}
                label="Tax ID"
                name="taxId"
                onBlur={handleBlur}
                onChange={handleChange}
                type="taxId"
                value={values.taxId}
                placeholder="Enter Tax Id"
              />
              <FormInput
                error={Boolean(touched.address_2 && errors.address_2)}
                helperText={touched.address_2 && errors.address_2}
                label="Address Line 2"
                name="address_2"
                onBlur={handleBlur}
                onChange={handleChange}
                type="address_2"
                value={values.address_2}
                placeholder="Enter Address Line 2"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6  pr-3">
                <label className="label-txt-clr">
                  Country
                </label>
                <Select
                  placeholder="Country"
                  value={countryOptions.filter((option) => option.value === values.country)}
                  onChange={(selectedOption) => {
                    handleCountryChange(selectedOption);
                    console.log('values', values.state);
                    handleChange('country')(selectedOption.value);
                  }}
                  options={countryOptions}
                  noOptionsMessage={() => 'Country appears here'}
                />
                <Warning>{errors.country}</Warning>
              </div>
              <FormInput
                error={Boolean(touched.city && errors.city)}
                fullWidth
                helperText={touched.city && errors.city}
                label="City"
                margin="normal"
                name="city"
                onBlur={handleBlur}
                onChange={handleChange}
                type="city"
                value={values.city}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6  pr-3">
                <label htmlFor="state" className="label-txt-clr">
                  State
                </label>
                <Select
                  placeholder="State"
                  value={stateOptions.filter((option) => option.value === values.state)}
                  onChange={(selectedOption) => {
                    handleStateChange(selectedOption);
                    console.log('values', values.state);
                    handleChange('state')(selectedOption.value);
                  }}
                  options={stateOptions}
                  noOptionsMessage={() => 'State appears here'}
                />
                <Warning>{errors.state}</Warning>
              </div>
              <FormInput
                error={Boolean(touched.zipCode && errors.zipCode)}
                helperText={touched.zipCode && errors.zipCode}
                label="Zip Code"
                margin="normal"
                name="zipCode"
                onBlur={handleBlur}
                onChange={handleChange}
                type="zipCode"
                value={values.zipCode}
              />
            </div>
            <div className="form-row pt-4">
              <div className="form-group col-md-3 " />
              <div className="form-group text-center col-md-6 pl-2 pt-2">
                <button
                  className="btn greenbtn  col-md-12 waves-effect waves-light"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

ShulInfoForm
  .propTypes = {
    formData: PropTypes.shape({
      orgName: PropTypes.string,
      address_1: PropTypes.string,
      taxId: PropTypes.string,
      address_2: PropTypes.string,
    }).isRequired,
  };

export default ShulDashboardContainer(UserContainer(ShulInfoForm));
