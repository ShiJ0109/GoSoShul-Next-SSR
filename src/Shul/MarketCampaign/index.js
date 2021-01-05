import React from 'react';
import { Helmet } from 'react-helmet';
// core components for custom Tab
import CustomTabs from 'components/CustomTabs/AdminLteTabs.js';
import { ShulDashboardContainer } from 'containers';
import Prep from './Prep';
import Market from './Market';

const MarketCampaign = ({ shulDashboardState }) => {
  const {
    introduction, message, shul_name, campaign_url
  } = shulDashboardState.campaign;
  const { videoLink, photos } = introduction;
  return (
    <div className="content-wrapper">
      <Helmet>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={shul_name} />
        <meta property="og:quote" content={shul_name} />
        <meta property="og:hashtag" content={shul_name} />
        <meta property="og:image" content={photos.length > 0 ? photos[0] : ''} />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:url" content={campaign_url} />
        <meta property="og:video" content={videoLink} />
        <meta property="og:site_name" content="CampersTribe" />
        <meta property="og:description" content={message} />
      </Helmet>
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
          <div className="col-md-1" />
          <div className="col-md-10 marketpage-margin-left">
            <CustomTabs
              plainTabs
              title=""
              hrefClass="nav-link link-2 tab-shul-fontLg1 font-w-navTxt  ptc1-mb-02"
              hrefActiveClass="nav-link link-2 tab-shul-fontLg1 font-w-navTxt  ptc1-mb-02 active"
              bodyClass="active tab-pane"
              tabs={[
                {
                  tabName: 'Prepping the Congregation',
                  tabContent: (
                    <Prep />
                  )
                },
                {
                  tabName: 'Marketing Materials',
                  tabContent: (
                    <Market />
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

export default ShulDashboardContainer(MarketCampaign);
