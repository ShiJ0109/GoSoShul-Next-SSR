import React, { useState, useEffect, lazy } from 'react';
import Head from 'next/head';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useScrollPosition from '@react-hook/window-scroll';
import {
  Hidden,
} from '@material-ui/core';

// import apiRequest components
import * as apiRequests from 'services/apiRequsts';
import * as mainRequests from 'services/mainRequests';

// import model
import CampaignSettingsModel from 'models/shul/CampaignSettingsModel';

// import loading component
import { Spin } from 'components/Loading/Loading';

// import views from UX design
import * as utils from 'utils/common';
import AppAppBar from 'campaign/Views/AllShulAppAppBar/AppAppBar';
import Basic from 'campaign/Views/AllShulBasic/Basic';
import ProgressBar from 'campaign/Views/ProgressBar';
// import ShulCampaigns from 'campaign/Views/ShulCampaign/ShulCampaigns';
// import InMemoryOf from 'campaign/Views/InMemoryOf/InMemoryOf';
// import AllShulDonorLists from 'campaign/Views/Donors/AllShulDonorLists';
// import Sponsors from 'campaign/Views/Sponsors/Sponsors';
import Footer from 'campaign/Views/Footer/Footer';
import SignupPopUp from 'campaign/Views/SignupPopUp';

//test
import dynamic from 'next/dynamic';
const Sponsors = dynamic(() => import('campaign/Views/Sponsors/Sponsors'), {
  ssr: false,
});
const ShulCampaigns = dynamic(() => import('campaign/Views/ShulCampaign/ShulCampaigns'), {
  ssr: false,
});
const InMemoryOf = dynamic(() => import('campaign/Views/InMemoryOf/InMemoryOf'), {
  ssr: false,
});

const AllShulDonorLists = dynamic(() => import('campaign/Views/Donors/AllShulDonorLists'), {
  ssr: false,
});

// CSS lazy loading
const Artists = lazy(() => import('campaign/Home.css'));

const AllShul = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // const navigate = useNavigate();
  // states for data porting
  const [totalData, setTotalData] = useState(false);
  const [allShulData, setAllShulData] = useState(false);
  const [error, setError] = useState(false);
  const scrollY = useScrollPosition(60);

  const timer = setInterval(() => {
    const loaded = typeof window !== 'undefined'
    && typeof window.mainCssLoaded !== 'undefined'
    && window.mainCssLoaded[0]
    && window.mainCssLoaded[1];
    setScriptLoaded(loaded);
    if (loaded) {
      clearInterval(timer);
    }
  }, 500);

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
    window.mainCssLoaded = [];
    fetchData();
    return () => {
      window.mainCssLoaded = undefined;
    };
  }, []);
  // if (error) navigate('/404');
  if (error) return null;
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title> Go Soshul</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Premium Bootstrap 4 Landing Page Template" />
        <meta name="keywords" content="Saas, Software, multi-uses, HTML, Clean, Modern" />
        <meta name="author" content="Shreethemes" />
        <meta name="email" content="shreethemes@gmail.com" />
        <meta name="website" content="http://www.shreethemes.in" />
        <meta name="Version" content="v2.5.1" />
        {/* <!-- favicon --> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* <!-- Bootstrap --> */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" onLoad="window.mainCssLoaded[1]=true;" />
        {/* <!-- Magnific --> */}
        <link href="/css/magnific-popup.css" rel="stylesheet" type="text/css" />
        {/* <!-- Icons --> */}
        <link href="/css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css" />
        {/* <!-- Slider --> */}
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link href="/css/swiper.min.css" rel="stylesheet" type="text/css" />
        {/* <!-- Main Css --> */}
        <link href="/css/style.css" rel="stylesheet" type="text/css" id="theme-opt" onLoad="window.mainCssLoaded[0]=true;" />
        <link href="/css/colors/default.css" rel="stylesheet" id="color-opt" />
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script src="/js/jquery-3.5.1.min.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
        {/* <script src="/js/jquery.easing.min.js"></script> */}
        {/* <script src="/js/scrollspy.min.js"></script> */}
        {/* <script src="/js/jquery.magnific-popup.min.js"></script> */}
        <script src="/js/magnific.init.js"></script>
        <script src="/js/typed.js"></script>
        <script src="/js/typed.init.js"></script>
        {/* <script src="/js/owl.init.js "></script> */}
        <script src="/js/swiper.min.js"></script>
        <script src="/js/swiper.init.js"></script> -->
        <script src="/js/jquery.flexslider-min.js"></script>
        <script src="/js/flexslider.init.js"></script>
        <script src="/js/parallax.js "></script>
        {/* <script src="/js/feather.min.js"></script> */}
        <script src="https://unicons.iconscout.com/release/v2.1.9/script/monochrome/bundle.js"></script>
        <script src="/js/app.js"></script>
      </Head>
      {
        (totalData === false || allShulData === false) && <Spin />
      }
      {
        scriptLoaded && totalData && allShulData &&
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
      }

    </>
  );
};

export default AllShul;
