import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const CampaignLayout = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

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
    window.mainCssLoaded = [];
    return () => {
      window.mainCssLoaded = undefined;
    };
  }, []);

  return (
    <>
      <Helmet
        defer={false}
        async={false}
      >
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
        <link rel="shortcut icon" href="/images/favicon.ico" />
        {/* <!-- Bootstrap --> */}
        <link href="/static/css/bootstrap.min.css" rel="stylesheet" type="text/css" onLoad="window.mainCssLoaded[1]=true;" />
        {/* <!-- Magnific --> */}
        <link href="/static/css/magnific-popup.css" rel="stylesheet" type="text/css" />
        {/* <!-- Icons --> */}
        <link href="/static/css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css" />
        {/* <!-- Slider --> */}
        <link rel="stylesheet" href="/static/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/static/css/owl.theme.default.min.css" />
        <link href="/static/css/swiper.min.css" rel="stylesheet" type="text/css" />
        {/* <!-- Main Css --> */}
        <link href="/static/css/style.css" rel="stylesheet" type="text/css" id="theme-opt" onLoad="window.mainCssLoaded[0]=true;" />
        <link href="/static/css/colors/default.css" rel="stylesheet" id="color-opt" />
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/* <script src="/js/jquery-3.5.1.min.js" />
        <script src="/js/bootstrap.bundle.min.js" />
        <script src="/js/jquery.easing.min.js" />
        <script src="/js/scrollspy.min.js" /> */}
        {/* <!-- maintenance --> */}
        {/* <script src="/js/jquery.countdown.js" /> */}
        {/* <script src="/js/maintenance.init.js" /> */}
        {/* <!-- Magnific Popup --> */}
        {/* <script src="/js/jquery.magnific-popup.min.js" /> */}
        {/* <script src="/js/magnific.init.js" /> */}
        {/* <!-- Typed --> */}
        {/* <script src="/js/typed.js" /> */}
        {/* <script src="/js/typed.init.js" /> */}
        {/* <!-- SLIDER --> */}
        {/* <script src="/js/owl.carousel.min.js " />
        <script src="/js/owl.init.js " />
        <script src="/js/swiper.min.js" />
        <script src="/js/swiper.init.js" /> */}
        {/* <!--FLEX SLIDER--> */}
        {/* <script src="/js/jquery.flexslider-min.js" /> */}
        {/* <script src="/js/flexslider.init.js" /> */}
        {/* <!-- Counter --> */}
        {/* <script src="/js/counter.init.js" /> */}
        {/* <!-- Parallax --> */}
        {/* <script src="/js/parallax.js " /> */}
        {/* <!-- Icons --> */}
        {/* <script src="/js/feather.min.js" /> */}
        {/* <script src="https://unicons.iconscout.com/release/v2.1.9/script/monochrome/bundle.js" /> */}
        {/* <!-- Main Js --> */}
        {/* <script src="/js/app.js" /> */}
      </Helmet>
      {scriptLoaded ? <Outlet /> : ''}
    </>

  );
};

export default CampaignLayout;
