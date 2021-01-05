import React from 'react';

const GoalProgressBar = ({donationStat, goal}) => {

  const {total} = donationStat;
  const achieved = Math.round(total.amount / goal * 100);
  return (
    <div className="prog-box progress-box">
      <div className="border-0 prog progress">
        <div
          className="bar-border1 position-relative bg-bar-color2 prog-bar progress-bar"
          style={{
            width: `${achieved}%`
          }}
        >
          <div className="progress-value2 d-block  h6">
            {achieved}
            % Achieved
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalProgressBar;
