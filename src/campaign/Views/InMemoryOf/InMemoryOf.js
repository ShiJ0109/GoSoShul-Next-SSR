import React from 'react';
import PropTypes from 'prop-types';
import InMemoryOfContainer from './InMemoryOfContainer';

const InMemoryOf = ({in_memory_of}) => {
  return (
    <section
      className="section pt-5 pb-5"
      style={{
        background: 'rgb(241,242,246, 0.5)'
      }}
    >
      <InMemoryOfContainer data={in_memory_of} />
      {}
    </section>
  );
};
InMemoryOf.propTypes = {
  in_memory_of: PropTypes.arrayOf(PropTypes.shape({
    image_link: PropTypes.string,
    english_name: PropTypes.string,
    hebrew_name: PropTypes.string,
  }))
};

export default InMemoryOf;
