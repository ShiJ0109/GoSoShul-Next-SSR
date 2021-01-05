import React, { fragment, useState, useEffect, lazy } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useScrollPosition from '@react-hook/window-scroll'
import {
  Hidden,
} from '@material-ui/core';
import { Spin } from 'components/Loading/Loading';

// import model
import CampaignSettingsModel from 'models/shul/CampaignSettingsModel';

// import UserContainer for session
import UserContainer from 'containers/UserContainer';

// import apiRequest components
import * as apiRequests from 'services/apiRequsts';
import * as mainRequests from 'services/mainRequests';
import * as userRequests from 'services/userRequests';
import * as utils from 'utils/common';
// import 'assets/scss/plugins/_plugin-react-slick.scss';
// import './Home.css';

// import loading component
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

//CSS lazy loading
const Artists = lazy(() => import('./Home.css'));

// get Shul identify url
function getShulName(url, ref) {
  const urlArray = url.split('/');
  if (ref) return urlArray[urlArray.length - 2];
  return urlArray[urlArray.length - 1];
}

const Home = ({ userState }) => {
  const navigate = useNavigate();
  const { shulName, ref } = useParams();

  // url to get ShulIdByUrl
  const shulUrl = getShulName(window.location.href, ref);

  // states for data porting
  const [Id, setId] = useState(false);
  // data from ref tocken
  const [shulData, setShulData] = useState(false);
  const [totalData, setTotalData] = useState(false);
  const [refData, setRefData] = useState(false);
  const [error, setError] = useState(false);
  const { session } = userState;
  const scrollY = useScrollPosition(60);

  console.log(session);
  useEffect(() => {
    async function fetchData() {
      if (error) return;

      // get TotalData
      mainRequests.GetTotalData()
        .then((ret) => {
          if (ret.stat === 'success') {
            setTotalData(ret.data);
          } else {
            setError(ret.error.response.data.status);
          }
        })
        .catch((ex) => {
          setError(ex.response.data.status);
        });

      // get ShulIdByUrl
      mainRequests.GetShulIdByUrl(shulUrl)
        .then((ret) => {
          if (ret.stat === 'success') {
            const shulId = ret.data.shul_id;
            // get AllShulInfo
            apiRequests.GetAllShulInfo({ session: null, id: shulId })
              .then((ret) => {
                if (ret.stat === 'success') {
                  setShulData(CampaignSettingsModel(ret.data));
                  setId(shulId);
                } else {
                  setError(ret.error.response.data.status);
                }
              })
              .catch((ex) => {
                setError(ex.response.data.status);
              });

            // get user Ref Data
            userRequests.GetRef(ref)
              .then((ret) => {
                if (ret.stat === 'success') {
                  setRefData(ret.data);
                }
              });
          }
        })
        .catch((ex) => {
          setError(ex.response.data.status);
        });
    }
    fetchData();
  }, []);
  if (error) navigate('/404');
  if (shulData === false) return (<Spin />);
  return (
    <fragment>
      <Helmet defer={false}>
        <style type="text/css">
          {`
            .table{
              margin-bottom: 0;
              }
              .table th ,.table td {
              padding: .75rem;
              vertical-align: top;
              border-top: 0;
              }
              .num-text-clr{
              font-size: 18px;
              font-weight: 800;
              }
              .num-text-clr span{
              font-size: 12px !important;
              font-weight: 600 !important;
              }
              .para1{
              padding-right: 80px;
              padding-left: 10px;
              font-size: 14px;
              color: rgb(33,29,40, 0.7);
              }
              .para2{
              padding-right: 10px;
              padding-left: 10px;
              font-size: 15px;
              padding-top: 4px;
              font-weight: 600;
              color: rgb(33,29,40, 0.3);
              }
              .bg-table-d{
              background: #F1F2F6;
              margin-bottom: 28px;
              padding-top: 8px;
              padding-bottom: 8px;
              }
              .bg-trans{
              background: transparent !important;
              }
              .owl-carousel .owl-item img .widthnot{
              width: 60% !important;
              }
              .owl-carousel .nav-btn{
              height: 47px;
              position: absolute;
              width: 26px;
              cursor: pointer;
              top: -41px !important;
              }
              .owl-carousel .owl-prev.disabled,
              .owl-carousel .owl-next.disabled{
              pointer-events: none;
              opacity: 0.2;
              }
              .owl-carousel .prev-slide{
              background: url(/images/left.png) no-repeat scroll 0 0;
              left: -33px;
              }
              .owl-carousel .next-slide{
              background: url(/images/right.png) no-repeat scroll 0 0px;
              right: -46px;
              }
              .owl-carousel .prev-slide:hover{
              background: url(/images/gososhul/hover2.png) no-repeat scroll 0 0px;
              }
              .owl-carousel .next-slide:hover{
              background: url(/images/gososhul/hover1.png) no-repeat scroll 0 0px;
              } 
              @media (min-width: 1024px) and (max-width: 1200px){
              .owl-carousel .prev-slide {
              background: url(/images/left.png) no-repeat scroll 0 0;
              left: -10px;
              }
              .owl-carousel .next-slide {
              background: url(/images/right.png) no-repeat scroll 0 0px;
              right: -20px;
              }
              }
              @media (min-width: 768px) and (max-width: 1023px){
              .owl-carousel .prev-slide {
              background: url(/images/left.png) no-repeat scroll 0 0;
              left: 0px;
              }
              .owl-carousel .next-slide {
              background: url(/images/right.png) no-repeat scroll 0 0px;
              right: -10px;
              }
              }
              @media (max-width: 576px){
              .owl-carousel .prev-slide {
              background: none;
              left: 0px;
              }
              .owl-carousel .next-slide {
              background: none;
              right: 0px;
              }  
              .show-box-width {
              width: 297px;
              }
              }
              .show-hover-text{
              position: absolute;
              background: #F1F2F6;
              }
              .show-box-width{
              width: 245px;
              }
              @media (min-width: 1920px){
              .show-box-width{
              width: 348px;
              } 
              .para1 {
              font-size: 16px;
              }
              .num-text-clr span {
              font-size: 14px !important;
              font-weight: 600 !important;
              }
              }
              @media (max-width: 411px){
              .show-box-width {
              width: 326px;
              }
              }
              @media (max-width: 375px){
              .show-box-width {
              width: 297px;
              }
              }
              .signupBottomButtonContainer{
                background-color: #ffffff;
                align-items: center;
                display: none;
                position: sticky;
                position: -webkit-sticky;
                position: -moz-sticky;
                position: -ms-sticky;
                position: -o-sticky;
                bottom: 0px;
                text-align: center;
                z-index: 1;
                justify-content : space-evenly;
                padding-top: 10px;
                padding-bottom: 10px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
              }
          `}
        </style>
      </Helmet>
      <AppAppBar refData={refData} ref={ref} />
      <Basic
        refData={refData}
        videoLink={utils.getYoutubeEmbeded(shulData.campaign.introduction.video_link)}
        shulName={shulData.campaign.shul_name}
        ref={ref}
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
Home.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
};
export default UserContainer(Home);
