import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DonateLayout = () => {
  // css loading state
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const timer = setInterval(() => {
    const loaded = typeof window !== 'undefined' && typeof window.mainCssLoaded !== 'undefined' && window.mainCssLoaded;
    setScriptLoaded(loaded);
    if (loaded) {
      clearInterval(timer);
    }
  }, 500);

  // Fetch all shuldashboard data via Redux actions when component is loading.
  useEffect(() => {
    window.mainCssLoaded = undefined;
    return () => {
      window.mainCssLoaded = undefined;
    };
  }, []);

  return (
    <>
      <Helmet defer={false}>
        <meta charset="UTF-8" />
        <title>Go Soshul</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Version" content="v2.5.1" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
        <link href="/css/stepbarform.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" type="text/css" onLoad="window.mainCssLoaded=true;" />
        <link href="/css/radiobtn.css" rel="stylesheet" type="text/css" />
        <link href="/css/colors/default.css" rel="stylesheet" id="color-opt" />
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
        <script src="https://code.jquery.com/jquery-3.1.1.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" />
        <script src="/js/stepbar.js" />
      </Helmet>
      {scriptLoaded && <Outlet />}
    </>

  );
};

export default DonateLayout;
