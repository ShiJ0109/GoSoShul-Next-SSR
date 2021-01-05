import React from 'react';
import PropTypes from 'prop-types';

const Submit = ({label, disabled}) => {
  return (
    <div className="col-lg-12 mb-2 bg-goback-box login-form-paddingLR">
      <button className="btn go-btn-1 btn-block" type="submit" disabled={disabled}>{label}</button>
    </div>
  );
};
Submit.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
Submit.defaultProps = {
  disabled: false,
};
export default Submit;
