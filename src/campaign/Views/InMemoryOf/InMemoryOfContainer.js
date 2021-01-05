import React from 'react';
import InMemoryOfContent from './InMemoryOfContent';
import InMemoryOfCarousel from './InMemoryOfCarousel';

const InMemoryOfContainer = ({data}) => {
  return (
    <div className="container">
      <div className="row iphn-n-px-size">
        <InMemoryOfContent />
        <div className="col-12 pt-4">
          <InMemoryOfCarousel data={data} />
        </div>
        {}
      </div>
      {}
    </div>
  );
};

export default InMemoryOfContainer;
