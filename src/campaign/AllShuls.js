import React, { useState, useEffect, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useScrollPosition from '@react-hook/window-scroll';
import {
  Hidden,
} from '@material-ui/core';

// import apiRequest components
import * as apiRequests from 'services/apiRequsts';
import * as mainRequests from 'services/mainRequests';

// import loading component
import { Spin } from 'components/Loading/Loading';

// import views from UX design
import * as utils from 'utils/common';
import AppAppBar from './Views/AllShulAppAppBar/AppAppBar';
import Basic from './Views/AllShulBasic/Basic';
import ProgressBar from './Views/ProgressBar';
import ShulCampaigns from './Views/ShulCampaign/ShulCampaigns';
import InMemoryOf from './Views/InMemoryOf/InMemoryOf';
import AllShulDonorLists from './Views/Donors/AllShulDonorLists';
import Sponsors from './Views/Sponsors/Sponsors';
import Footer from './Views/Footer/Footer';
import SignupPopUp from './Views/SignupPopUp';

// CSS lazy loading
const Artists = lazy(() => import('./AllShul.css'));

const AllShul = () => {
  const navigate = useNavigate();
  // states for data porting
  const [totalData, setTotalData] = useState(false);
  const [allShulData, setAllShulData] = useState(false);
  const [error, setError] = useState(false);
  const scrollY = useScrollPosition(60);

  useEffect(() => {
    async function fetchData() {
      apiRequests.GetShulLists({
        ver: 2,
        state: '',
        keyword: ''
      })
        .then((ret) => {
          if (ret.stat === 'success') {
            setAllShulData(ret.data);
          } else {
            setError(ret.error.response.data.status);
          }
        })
        .catch((ex) => {
          setError(ex.response.data.status);
        });

      mainRequests.GetCampaignData()
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
    }
    fetchData();
  }, []);
  if (error) navigate('/404');
  if (totalData === false || allShulData === false) return (<Spin />);
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
                    background: url(images/left.png) no-repeat scroll 0 0;
                    left: -33px;
                    }
                    .owl-carousel .next-slide{
                    background: url(images/right.png) no-repeat scroll 0 0px;
                    right: -46px;
                    }
                    .owl-carousel .prev-slide:hover{
                    background: url(images/gososhul/hover2.png) no-repeat scroll 0 0px;
                    }
                    .owl-carousel .next-slide:hover{
                    background: url(images/gososhul/hover1.png) no-repeat scroll 0 0px;
                    }
                    @media (min-width: 1024px) and (max-width: 1200px){
                    .owl-carousel .prev-slide {
                    background: url(images/left.png) no-repeat scroll 0 0;
                    left: -10px;
                    }
                    .owl-carousel .next-slide {
                    background: url(images/right.png) no-repeat scroll 0 0px;
                    right: -20px;
                    }
                    }
                    @media (min-width: 768px) and (max-width: 1023px){
                    .owl-carousel .prev-slide {
                    background: url(images/left.png) no-repeat scroll 0 0;
                    left: 0px;
                    }
                    .owl-carousel .next-slide {
                    background: url(images/right.png) no-repeat scroll 0 0px;
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
                    width: 246px;
                    height: 114px;
                    }
                    @media (min-width: 1920px){
                    .show-box-width{
                    width: 348px;
                    height: 114px;
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
                    width: 327px;
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
      <AppAppBar />
      <Basic refData={false} videoLink={utils.getYoutubeEmbeded('https://www.youtube.com/embed/aiegUzPX8Zc')} />
      <ProgressBar totalDonate={totalData.donation_stat} />
      <ShulCampaigns AllShulList={allShulData.shul_list} />
      <InMemoryOf in_memory_of={totalData.memories} />
      <AllShulDonorLists donors={totalData.donations} />
      <Sponsors sponsors={totalData.sponsors} />
      <Footer />
      <Hidden smUp>
        {(scrollY > 420) && <SignupPopUp />}
      </Hidden>
    </fragment>
  );
};

export default AllShul;

// let TempAllDonationList = {
//   status: 'OK',
//   status_code: 200,
//   donations: [
//     {
//       name: 'Severus Snape',
//       amount: '$1,200',
//       shul_name: 'clement',
//       message: 'Happy Clement',
//       date: '2020-09-16 12:59:40',
//       date_ago: '5 Hour Ago',
//       donation_type: 'Double It',
//       spread_type: 'Direct'
//     },
//     {
//       name: 'Ginny Weasley',
//       amount: '$500',
//       shul_name: 'Congregation Etz Chaim',
//       message: 'Happy Harry Potter',
//       date: '2020-09-15 22:06:45',
//       date_ago: '1 Day Ago',
//       donation_type: 'Supercharge It',
//       spread_type: 'Indirect'
//     },
//     {
//       name: 'Luna Lovegood',
//       amount: '$180',
//       shul_name: 'Congregation Etz Chaim',
//       message: '',
//       date: '2020-09-15 17:27:31',
//       date_ago: '1 Day Ago',
//       donation_type: '',
//       spread_type: 'Social'
//     },
//     {
//       name: 'Hermione Granger',
//       amount: '$120',
//       shul_name: 'Congregation Etz Chaim',
//       message: '',
//       date: '2020-09-15 17:19:26',
//       date_ago: '1 Day Ago',
//       donation_type: 'Double It',
//       spread_type: 'Indirect'
//     },
//     {
//       name: 'Ron Weasley',
//       amount: '$70',
//       shul_name: 'Congregation Etz Chaim',
//       message: '',
//       date: '2020-09-15 15:24:31',
//       date_ago: '1 Day Ago',
//       donation_type: '',
//       spread_type: 'Indirect'
//     },
//     {
//       name: 'Harry Potter',
//       amount: '$500',
//       shul_name: 'Congregation Etz Chaim',
//       message: '',
//       date: '2020-09-15 15:21:25',
//       date_ago: '1 Day Ago',
//       donation_type: 'Supercharge It',
//       spread_type: 'Direct'
//     },
//     {
//       name: 'Anna Martin',
//       amount: '$200',
//       shul_name: 'Young Israel',
//       message: '',
//       date: '2020-09-14 22:48:50',
//       date_ago: '2 Day Ago',
//       donation_type: 'Double It',
//       spread_type: 'Indirect'
//     },
//     {
//       name: 'Elsa Martin',
//       amount: '$200',
//       shul_name: 'Young Israel',
//       message: '',
//       date: '2020-09-14 22:19:34',
//       date_ago: '2 Day Ago',
//       donation_type: 'Double It',
//       spread_type: 'Direct'
//     },
//     {
//       name: 'James McGuard',
//       amount: '$100',
//       shul_name: 'Young Israel',
//       message: '',
//       date: '2020-09-14 22:13:07',
//       date_ago: '2 Day Ago',
//       donation_type: '',
//       spread_type: 'Direct'
//     }
//   ]
// };
// let TempAllShulList = {
//   status: 'OK',
//   status_code: 200,
//   shul_list: [
//     {
//       id: '1',
//       name: 'Young Israel',
//       country: 'USA',
//       state: 'NJ',
//       campaign_url: 'http://192.168.108.85:3000/gososhul/campaign/Young%20Israel',
//       goal: '10000',
//       logo_link: 'https://res.cloudinary.com/dkoaz5iep/image/upload/v1605506465/gososhul/nejwyhbvlqze4ditjaiy.png',
//       raised: '1830'
//     },
//     {
//       id: '3',
//       name: 'clement',
//       country: '',
//       state: '',
//       campaign_url: 'http://192.168.108.85:3000/gososhul/campaign/clement',
//       goal: '150000',
//       logo_link: 'https://res.cloudinary.com/dkoaz5iep/image/upload/v1600158433/gososhul/o3vfcpolf9ngdrwtzq1t.png',
//       raised: '2430'
//     },
//     {
//       id: '5',
//       name: 'Prince Street Synagogue',
//       country: 'USA',
//       state: 'NJ',
//       campaign_url: 'http://192.168.108.85:3000/gososhul/campaign/Prince%20Street%20Synagogue',
//       goal: '15000',
//       logo_link: 'https://res.cloudinary.com/dkoaz5iep/image/upload/v1605506465/gososhul/nejwyhbvlqze4ditjaiy.png',
//       raised: '1730'
//     },
//     {
//       id: '6',
//       name: 'Temple Beth-El',
//       country: 'USA',
//       state: 'NJ',
//       campaign_url: 'http://192.168.108.85:3000/gososhul/campaign/Temple%20Beth-El',
//       goal: '20000',
//       logo_link: 'https://res.cloudinary.com/dkoaz5iep/image/upload/v1605506465/gososhul/nejwyhbvlqze4ditjaiy.png',
//       raised: '1530'
//     },
//     {
//       id: '7',
//       name: 'Congregation Etz Chaim',
//       country: 'USA',
//       state: 'NJ',
//       campaign_url: 'http://192.168.108.85:3000/gososhul/campaign/Congregation%20Etz%20Chaim',
//       goal: '25000',
//       logo_link: 'https://res.cloudinary.com/dkoaz5iep/image/upload/v1605506465/gososhul/nejwyhbvlqze4ditjaiy.png',
//       raised: '1870'
//     }
//   ]
// };

// let TempTotalDonationStat = {
//   status: 'OK',
//   status_code: 200,
//   stat: {
//     raised: '6990',
//     donations: '25',
//     shuls: '5',
//     goal: '220000',
//     achieved: 3
//   }
// };
