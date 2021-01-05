import React from 'react';
import ShulCard from './ShulCard';

const ShulCol = ({ shulCol }) => {
  return (
    <div className="card bg-trans shop-list border-0 position-relative overflow-hidden raisedGoalboxMarginAll">
      <div className="shop-image position-relative overflow-hidden">
        {
          shulCol.length === 0
            ? ''
            : (
              shulCol.map((shulElement) => {
                return <ShulCard shulElement={shulElement} />;
              })
            )
        }
      </div>
    </div>
  );
};

export default ShulCol;
