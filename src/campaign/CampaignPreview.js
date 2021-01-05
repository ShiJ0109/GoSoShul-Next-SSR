import React, { fragment, useState, useEffect } from 'react';
import useScrollPosition from '@react-hook/window-scroll'
import {
  Hidden,
} from '@material-ui/core';
import * as utils from 'utils/common';
// import 'assets/scss/plugins/_plugin-react-slick.scss';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
import PropTypes from 'prop-types';
import { ShulDashboardContainer } from 'containers';

// import apiRequest components
import * as apiRequests from 'services/apiRequsts';
import * as mainRequests from 'services/mainRequests';
import * as userRequests from 'services/userRequests';
import AppAppBar from './Views/AppAppBar/AppAppBar';
import Basic from './Views/Basic/Basic';
import ProgressBar from './Views/ProgressBar';
import About from './Views/About/About';
import InMemoryOf from './Views/InMemoryOf/InMemoryOf';
import Goal from './Views/Goal/Goal';
import DonorLists from './Views/Donors/DonorLists';
import Sponsors from './Views/Sponsors/Sponsors';
import Footer from './Views/Footer/Footer';
import SignupPopUp from './Views/SignupPopUp';

const CampaignPreview = () => {
  const [shulData, setShulData] = useState(false);
  const [totalData, setTotalData] = useState(false);
  const scrollY = useScrollPosition(60);

  useEffect(() => {
    async function fetchData() {
      const TotalDonationStat = await mainRequests.GetTotalData();
      if (TotalDonationStat.stat === 'success') {
        setTotalData(TotalDonationStat.data);
      }
    }
    const shulDashboardState = JSON.parse(localStorage.getItem('shulDashboardState'));
    console.log(shulDashboardState);
    setShulData(shulDashboardState);
    fetchData();
  }, []);
  if (shulData === false || totalData === false) return null;
  return (
    <fragment>
      <AppAppBar refData={false} />
      <Basic
        refData={false}
        videoLink={utils.getYoutubeEmbeded(shulData.campaign.introduction.video_link)}
        shulName={shulData.campaign.shul_name}
      />
      <ProgressBar totalDonate={totalData.stat} />
      <About about={shulData.campaign.introduction} shulName={shulData.campaign.shul_name} />
      <InMemoryOf in_memory_of={shulData.campaign.in_memory_of} />
      <Goal donationStat={shulData.donation_stat} goal={shulData.campaign.campaign_goal} />
      <DonorLists donors={shulData.donors} />
      <Sponsors sponsors={shulData.campaign.sponsors} />
      <Footer />
      <Hidden smUp>
        {(scrollY > 420) && <SignupPopUp />}
      </Hidden>
    </fragment>
  );
};

// test mode to get session for API
CampaignPreview.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
};
export default ShulDashboardContainer(CampaignPreview);
