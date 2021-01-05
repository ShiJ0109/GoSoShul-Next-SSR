import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import {
  Hidden,
} from '@material-ui/core';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ShulDashboardContainer, UserContainer } from 'containers';
import { Spin } from 'components/Loading/Loading';
import NavBar from './NavBar';
import Footer from './Footer';

const DashboardLayout = ({
  userState,
  userActions,
  shulDashboardState,
  shulDashboardActions
}) => {
  const navigate = useNavigate();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const { session } = userState;
  const { handleFetchData } = shulDashboardActions;
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
    window.mainCssLoaded = [];
    handleFetchData(session);
    return () => {
      window.mainCssLoaded = undefined;
    };
  }, []);

  if (shulDashboardState.loaded === false) return <Spin />;

  if (logState === false) {
    logout();
    return (
      <Navigate to="/campaign" />

    );
  }
  if (shulDashboardState.stat !== 'success') {
    return (
      <Navigate to="/login" />
    );
  }

  return (
    <HelmetProvider>
      <div>
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
          <link rel="stylesheet" href="/dist/css/adminlte.css" onLoad="window.mainCssLoaded[1]=true;" />
          <link rel="stylesheet" href="/dist/css/style.css" onLoad="window.mainCssLoaded[0]=true;" />
          <link rel="stylesheet" href="/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
          <link rel="stylesheet" href="/plugins/daterangepicker/daterangepicker.css" />
          <link rel="stylesheet" href="/plugins/summernote/summernote-bs4.css" />
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          {' '}
          {/* <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous" /> */}
          {/* <!-- jQuery --> */}
          {/* <script src="/plugins/jquery/jquery.min.js" /> */}
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
        <script src="/dist/js/jquery.countdown.js" /> */}
          {/* <script src="/dist/js/maintenance.init.js" /> */}
          {/* <!-- jQuery UI 1.11.4 --> */}
          <script src="/plugins/jquery-ui/jquery-ui.min.js" />
          {/* <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip --> */}
          {/* <!-- Bootstrap 4 --> */}
          {/* <script src="/plugins/bootstrap/js/bootstrap.bundle.min.js" /> */}
          {/* <!-- Sparkline --> */}
          {/* <script src="/plugins/sparklines/sparkline.js" /> */}
          {/* <!-- JQVMap --> */}
          {/* <script src="/plugins/jqvmap/jquery.vmap.min.js" /> */}
          {/* <script src="/plugins/jqvmap/maps/jquery.vmap.usa.js" /> */}
          {/* <!-- jQuery Knob Chart --> */}
          {/* <script src="/plugins/jquery-knob/jquery.knob.min.js" /> */}
          {/* <!-- daterangepicker --> */}
          {/* <script src="/plugins/moment/moment.min.js" /> */}
          {/* <script src="/plugins/daterangepicker/daterangepicker.js" /> */}
          {/* <!-- Tempusdominus Bootstrap 4 --> */}
          {/* <script src="/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js" /> */}
          {/* <!-- Summernote --> */}
          {/* <script src="/plugins/summernote/summernote-bs4.min.js" /> */}
          {/* <!-- overlayScrollbars --> */}
          {/* <script src="/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js" /> */}
          {/* <!-- AdminLTE App --> */}
          {/* <script src="/dist/js/adminlte.js" /> */}
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.0.5/js/adminlte.min.js" /> */}

          {/* <!-- AdminLTE dashboard demo (This is only for demo purposes) --> */}
          {/* <script src="/dist/js/pages/dashboard.js" /> */}
          {/* <!-- AdminLTE for demo purposes --> */}
          {/* <script src="/dist/js/demo.js" /> */}
          `
        </Helmet>
        {
          scriptLoaded ? (
            <>
              <Hidden smDown>
                <div className="hold-transition sidebar-mini layout-fixed">
                  <div className="wrapper">
                    <NavBar
                      onMobileClose={() => setMobileNavOpen(false)}
                      openMobile={isMobileNavOpen}
                      onMobileNavOpen={() => setMobileNavOpen(true)}
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
            : <Spin />
        }

      </div>
    </HelmetProvider>
  );
};

export default ShulDashboardContainer(UserContainer(DashboardLayout));
