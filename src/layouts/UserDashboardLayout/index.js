import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import {
  Hidden,
} from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { UserDashboardContainer, UserContainer } from 'containers';
import { Spin } from 'components/Loading/Loading';
import NavBar from './NavBar';
import Footer from './Footer';

const UserDashboardLayout = ({
  userState,
  userActions,
  userDashboardState,
  userDashboardActions,
}) => {
  const navigate = useNavigate();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const { session } = userState;
  const { handleFetchData } = userDashboardActions;
  const [logState, setLogState] = useState(true);
  const { logout } = userActions;

  // css loading state
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

  // Fetch all shuldashboard data via Redux actions when component is loading.
  useEffect(() => {
    handleFetchData(session);
    window.mainCssLoaded = [];
    return () => {
      window.mainCssLoaded = undefined;
    };
  }, []);
  if (userDashboardState.loaded === false) return <Spin />;
  if (logState === false) {
    logout();
    return (
      <Navigate to="/campaign" />

    );
  }
  if (userDashboardState.stat !== 'success') {
    return (
      <Navigate to="/login" />
    );
  }

  return (
    <>
      <Helmet defer={false}>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Go Soshul| Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/plugins/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        <link rel="stylesheet" href="/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css" />
        <link rel="stylesheet" href="/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
        <link rel="stylesheet" href="/plugins/jqvmap/jqvmap.min.css" />
        <link rel="stylesheet" href="/dist/css/adminlte.css" onLoad="window.mainCssLoaded[0]=true;" />
        <link rel="stylesheet" href="/dist/css/style.css" onLoad="window.mainCssLoaded[1]=true;" />
        <link rel="stylesheet" href="/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
        <link rel="stylesheet" href="/plugins/daterangepicker/daterangepicker.css" />
        <link rel="stylesheet" href="/plugins/summernote/summernote-bs4.css" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script src="/plugins/jquery-ui/jquery-ui.min.js" />
      </Helmet>
      {
        scriptLoaded && (
          <>
            <Hidden smDown>
              <div className="hold-transition sidebar-mini layout-fixed">
                <div className="wrapper">
                  <NavBar
                    onMobileClose={() => setMobileNavOpen(false)}
                    openMobile={isMobileNavOpen}
                    onMobileOpen={() => setMobileNavOpen(true)}
                    handleLogState={() => setLogState(false)}
                  />
                  <Outlet />
                  <aside className="control-sidebar control-sidebar-dark">{}</aside>
                  {}
                </div>
                <Footer />
              </div>
            </Hidden>
            <Hidden mdUp>
              <div
                className={
            isMobileNavOpen
              ? 'sidebar-mini layout-fixed sidebar-open'
              : 'sidebar-mini layout-fixed sidebar-collapse'
}
              >
                <div className="wrapper">
                  <NavBar
                    onMobileClose={() => setMobileNavOpen(false)}
                    openMobile={isMobileNavOpen}
                    onMobileOpen={() => setMobileNavOpen(true)}
                    handleLogState={() => setLogState(false)}
                  />
                  <Outlet />
                  <aside className="control-sidebar control-sidebar-dark">{}</aside>
                  {}
                </div>
                <Footer />
              </div>
            </Hidden>
          </>
        )
      }

    </>

  );
};

export default UserDashboardContainer(UserContainer(UserDashboardLayout));
