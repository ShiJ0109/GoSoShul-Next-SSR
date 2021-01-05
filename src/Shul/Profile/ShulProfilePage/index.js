import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ShulProfileModel from 'models/shul/ShulProfileModel';
import { UserContainer, ShulDashboardContainer } from 'containers';

// core components for custom Tab
import CustomTabs from 'components/CustomTabs/AdminLteTabs';

import PrimaryContactForm from './PrimaryContactForm';
import ShulInfoForm from './ShulInfoForm';

const ShulProfilePage = ({ userState, shulDashboardState }) => {
  const [data, setData] = useState(ShulProfileModel(shulDashboardState.profile));
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-0" />
          <div className="col-lg-10 col-md-10 col-sm-10 paddingL-shulpro">
            <div className=" profile-info-txt">
              <h5>Please complete your profile for all sections below. </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pt-3">
          <div className="col-lg-1 col-md-1 col-sm-0" />
          <div className="col-lg-10 col-md-11 col-sm-12 table-margin-left">
            <CustomTabs
              plainTabs
              title=""
              bodyClass="card-body profileFromPR"
              hrefClass="nav-link link-2 tab-shul-fontLg font-w-navTxt"
              hrefActiveClass="nav-link link-1 active tab-shul-fontLg font-w-navTxt"
              tabs={[
                {
                  tabName: 'Primary Contact',
                  tabContent: (
                    <div className="active tab-pane" id="activity">
                      <PrimaryContactForm
                        formData={data.contact}
                        handleData={(value) => {
                          setData({ ...data, contact: value });
                        }}
                      />
                    </div>
                  )
                },
                {
                  tabName: 'Shul Information',
                  tabContent: (
                    <div className="active tab-pane" id="activity">
                      <ShulInfoForm
                        formData={data.shulInfo}
                        handleData={(value) => {
                          setData({ ...data, shulInfo: value });
                        }}
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
ShulProfilePage.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
};

export default ShulDashboardContainer(UserContainer(ShulProfilePage));
