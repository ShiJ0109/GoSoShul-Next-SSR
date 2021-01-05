import React from 'react';
// core components for custom Tab
import CustomTabs from 'components/CustomTabs/AdminLteTabs';
import PesonalInfo from './PesonalInfo';
import Settings from './Settings';

const UserProfilePage = () => {
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
      <div className="container">
        <div className="row">
          <div className=" col-lg-1 col-md-1 col-sm-0" />
          <div className="col-lg-10 col-md-11 col-sm-12 table-margin-left">
            <CustomTabs
              plainTabs
              title=""
              bodyClass="card-body DprofileFromPR1"
              hrefClass="nav-link link-1 text-lg font-w-navTxt"
              hrefActiveClass="nav-link link-1 active text-lg font-w-navTxt"
              tabs={[
                {
                  tabName: 'Primary Contact',
                  tabContent: (
                    <PesonalInfo />

                  )
                },
                {
                  tabName: 'Shul Information',
                  tabContent: (
                    <Settings />
                  )
                },
              ]}
            />
          </div>
        </div>
        {}
        {}
        {}
      </div>
      {}
    </div>
  );
};

export default UserProfilePage;
