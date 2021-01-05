import React from 'react';
import PropTypes from 'prop-types';

const Submit = ({label, disabled}) => {
  return (
    <div className="col-lg-12 mb-0 pl-1 pr-1">
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
