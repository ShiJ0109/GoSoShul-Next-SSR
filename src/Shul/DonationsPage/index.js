import React from 'react';
// core components for custom Tab
import CustomTabs from 'components/CustomTabs/AdminLteTabs.js';
import { ShulDashboardContainer } from 'containers';
import Stats from './Stats';
import Donations from './Donations';

const DonationsPage = ({ shulDashboardState }) => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2" />
          {}
        </div>
        {}
      </div>
      {}
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-0 col-sm-0" />
          <div className="col-lg-10 col-md-12 col-sm-12 donation-mobPadingA">
            <CustomTabs
              plainTabs
              title=""
              hrefClass="nav-link link-2 text-lg font-w-navTxt"
              hrefActiveClass="nav-link link-2 text-lg font-w-navTxt active"
              bodyClass="card-body donation-card-mobPadingA pl-0 pr-0"
              tabs={[
                {
                  tabName: 'Stats',
                  tabContent: (
                    <div className="active tab-pane  table-responsive" id="activity">
                      <Stats stats={shulDashboardState.daily} />
                    </div>
                  )
                },
                {
                  tabName: 'Donations',
                  tabContent: (
                    <div className="active tab-pane  table-responsive" id="activity">
                      <Donations
                        donationStat={shulDashboardState.donation_stat}
                        donors={shulDashboardState.donors}
                        goal={shulDashboardState.campaign.campaign_goal}
                      />
                    </div>
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

export default ShulDashboardContainer(DonationsPage);
