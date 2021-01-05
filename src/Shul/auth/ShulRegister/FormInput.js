import React from 'react';
import PropTypes from 'prop-types';
import Warning from 'components/Typography/Warning';

const FormInput = ({name, placeholder, label, onChange, onBlur, error, helperText, disabled, type, value}) => {
  return (
    <div className="col-lg-12 signup-form-paddingLR">
      <div className="form-group  position-relative">
        <label className="go-text-color2">{label}</label>
        <input
          type={type}
          className="form-control go-input-filed height-fm1"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        <Warning>{helperText}</Warning>
      </div>
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
