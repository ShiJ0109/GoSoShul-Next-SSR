import React, { useState } from 'react';
import { Fade } from '@material-ui/core';

const DonorCard = ({ donor }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="bg-table-d" id="show-hover-content" onMouseEnter={() => { setHover(true); }} onMouseLeave={() => { setHover(false); }}>
      <table className="table">
        <tbody>
          <tr>
            <th>
              {donor.name}
              {' '}
            </th>
            <td className="num-text-clr pt-4">
              {donor.amount}
              <br />
              <Fade
                in={hover}
                timeout={1000}
              >
                <span
                  style={{
                    display: 'block',
                    zIndex: '1'
                  }}
                  className="show-hover-text"
                >
                  {donor.date_ago}
                </span>
              </Fade>
            </td>
          </tr>
        </tbody>
      </table>

      <Fade
        in={hover}
        timeout={1000}
      >
        <div
          className="show-hover-text show-box-width"
          style={{ display: 'block' }}
        >
          <p className="para1  mb-0">
            {donor.message}
          </p>
          <p className="para2">{donor.shul_name}</p>
        </div>
      </Fade>

    </div>
  );
};

export default DonorCard;
