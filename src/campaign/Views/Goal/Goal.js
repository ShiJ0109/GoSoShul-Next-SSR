import React from 'react';
import GoalContent from './GoalContent';
import GoalProgressBar from './GoalProgressBar';

const Goal = ({ donationStat, goal }) => {
  return (
    <section className="section pt-0 pb-0">
      <GoalContent donationStat={donationStat} goal={goal} />
      <GoalProgressBar donationStat={donationStat} goal={goal} />
    </section>
  );
};

export default Goal;
