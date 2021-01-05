import React from 'react';
import DonorCard from './DonorCard';

const DonorCol = ({donorCol}) => {
  return (
    <div className="media  on-hover-box-spacing-1 ">
      <div className="media-body content padding-davidtabledata rounded bg-white position-relative">
        {
          donorCol.map((donor)=>{
            return <DonorCard donor={donor} />;
          })
        }
      </div>
    </div>
  );
};

export default DonorCol;
