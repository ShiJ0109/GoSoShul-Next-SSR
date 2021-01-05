import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UserDashboardContainer, UserContainer } from 'containers';
// core components for custom Tab
import CustomTabs from 'components/CustomTabs/AdminLteTabs';
import DonateShul from './DonateShul';
import ExploreShul from './ExploreShul';

const UserDonatePage = () => {
  const [alertStat, setAlertStat] = useState(true);
  return (
    <div className="content-wrapper">
      {}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2" />
          {}
        </div>
        {}
      </div>
      {}
      {}
      <div className="Container">
        <div className="row mob-crossBOx-marginR">
          <div className="col-lg-1 col-md-0 col-sm-0" />
          <div className="col-lg-10 col-md-11 col-sm-10 paddingLR-donate-mobile">
            {alertStat && (
            <div className="fragment" href="#">
              <span
                id="close"
                onClick={(E) => {
                  setAlertStat(false);
                }}
              >
                x
              </span>
              <img
                src="/dist/img/Icon awesome-hand-holding-heart.png"
                alt="some description"
              />
              <p className="text">
                We still haven’t met our goal, you can help us get there by
                donating an additional amount to one of the shuls above or you
                can find other shuls to donate to.
              </p>
            </div>
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-0 col-sm-0" />
          <div className="col-lg-10 col-md-12 col-sm-12 table-margin-left">
            <CustomTabs
              plainTabs
              title=""
              bodyClass="card-body danatetable-extraPadding"
              hrefClass="nav-link link-1 text-lg font-w-navTxt"
              hrefActiveClass="nav-link link-1 active text-lg font-w-navTxt"
              tabs={[
                {
                  tabName: 'Donate',
                  tabContent: (
                    <DonateShul />

                  )
                },
                {
                  tabName: 'Explore Other Shuls',
                  tabContent: (
                    <ExploreShul />
                  )
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

UserDonatePage.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
  userDashboardState: PropTypes.object,
  userDashboardActions: PropTypes.object,
};

export default UserDashboardContainer(UserContainer(UserDonatePage));
