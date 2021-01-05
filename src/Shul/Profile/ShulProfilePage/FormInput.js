import React from 'react';
import PropTypes from 'prop-types';
import Warning from 'components/Typography/Warning';

const FormInput = ({
  name, placeholder, label, onChange, onBlur, error, helperText, disabled, type, value
}) => {
  return (
    <div className="form-group col-lg-6 col-md-6 col-sm-12 shul-formgrp-PR1 ">
      <label className="label-txt-clr">{label}</label>
      <input
        type={type}
        className="from-input-inside form-control"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <Warning>{helperText}</Warning>
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
};
FormInput.defaultProps = {
  disabled: false,
  placeholder: '',
  type: 'text',
  value: '',
};

export default FormInput;
