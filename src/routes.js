import React from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

// // import Layout
import ShulDashboardLayout from 'layouts/ShulDashboardLayout';
import UserDashboardLayout from 'layouts/UserDashboardLayout';
import CampaignLayout from 'layouts/CampaignLayout';
// import DonateLayout from 'layouts/DonateLayout';

// // import demo Components
// import NotFoundView from 'views/errors/NotFoundView';

// // import spread View
// import Spread from 'views/spread';

// import Login View
import LoginView from 'Login/LoginView';
// import ForgetPasswordView from 'Login/ForgetPasswordView';

// import Shul View
import Main from 'Shul/Main';
import ShulRegister from 'Shul/auth/ShulRegister';
import ShulLogin from 'Shul/auth/ShulLogin';
import ShulDashboardView from 'Shul/reports/ShulDashboardView';
// import ShulFogetPassword from 'Shul/auth/ShulForgetPassword';
import ShulProfilePage from 'Shul/Profile/ShulProfilePage';
import CampaignSettingsPage from 'Shul/campaignSettings/CampaignSettingsPage';
import PaymentSetup from 'Shul/PaymentSetup/PaymentSetup';
import StripeRefresh from 'Shul/PaymentSetup/StripeRefresh';
import StripeComplete from 'Shul/PaymentSetup/StripeComplete';
import DonationsPage from 'Shul/DonationsPage';
import MarketCampaign from 'Shul/MarketCampaign';

// // import Campaign View
// import Home from 'campaign/Home';
// import AllShul from 'campaign/AllShuls';
// import CampaignPreview from 'campaign/CampaignPreview';

// import User View
import UserLogin from 'User/auth/UserLogin';
import UserRegister from 'User/auth/UserSignUp';
import Test from 'User/auth/Sessiontest';
import DonateStep from 'User/stepForms/DonateStep';

import StepForms from 'User/stepForms/StepForms';
import UserDashboardView from 'User/Dashboard';
import UserDonatePage from 'User/UserDonatePage';
import SharePage from 'User/SharePage';
import TagPage from 'User/TagPage';
import UserStatsPage from 'User/UserStatPage';
import UserProflePage from 'User/UserProfilePage';

// // test mode
import DashboardLayout from 'layouts/DashboardLayout';
import AccountView from 'views/account/AccountView';
import CustomerListView from 'views/customer/CustomerListView';
import DashboardView from 'views/reports/DashboardView';
import ProductListView from 'views/product/ProductListView';
import SettingsView from 'views/settings/SettingsView';
import SocialTest from 'Shul/MarketCampaign/test';
import SocialCheck from 'Shul/MarketCampaign/check';

// lazy loading dynamic import
import dynamic from 'next/dynamic';

const AllShul = dynamic(() => import('campaign/AllShuls'), {
  ssr: false,
});


const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: 'test', element: <SocialTest /> },
      { path: 'check', element: <SocialCheck /> },
    ]
  },
  // {
  //   path: '/',
  //   element: <Outlet />,
  //   children: [
  //     { path: '/', element: <Navigate to="/campaign" />, },
  //     // { path: '*', element: <Navigate to="/404" /> },
  //     { path: '404', element: <NotFoundView /> },
  //   ]

  // },
  {
    path: '/',
    element: <CampaignLayout />,
    children: [
      { path: 'login', element: <LoginView />, },
      // { path: 'forgetpassword', element: <ForgetPasswordView />, },
    ]

  },
  // {
  //   path: '/campaign',
  //   element: <CampaignLayout />,
  //   children: [
  //     { path: '/:shulName/:ref', element: <Home /> },
  //     { path: '/:shulName', element: <Home /> },
  //     { path: '404', element: <NotFoundView /> },
  //     { path: '/', element: <AllShul /> },
  //   ]
  // },
  // {
  //   path: '/spread/:ref',
  //   element: <Spread />,
  // },
  {
    path: '/user',
    element: <UserDashboardLayout />,
    children: [
      { path: 'dashboard', element: <UserDashboardView /> },
      { path: 'donate', element: <UserDonatePage /> },
      { path: 'tag', element: <TagPage /> },
      { path: 'share', element: <SharePage /> },
      { path: 'stats', element: <UserStatsPage /> },
      { path: 'profile', element: <UserProflePage /> },
    ],

  },
  // {
  //   path: '/user',
  //   element: <CampaignLayout />,
  //   children: [
  //     { path: 'signup', element: <UserRegister /> },
  //     { path: 'login', element: <UserLogin /> },
  //     { path: 'logintest', element: <Test /> },
  //   ],
  // },
  // {
  //   path: '/',
  //   element: <DonateLayout />,
  //   children: [
  //     { path: 'donate', element: <StepForms /> },
  //     { path: 'donate/:ref', element: <DonateStep /> },
  //   ],
  // },
  // {
  //   path: '/shul',
  //   element: <CampaignLayout />,
  //   children: [
  //     { path: 'login', element: <ShulLogin /> },
  //     { path: 'register', element: <ShulRegister /> },
  //     { path: 'forgetpassword', element: <ShulFogetPassword /> },
  //     { path: 'campaign', element: <CampaignPreview /> },

  //   ],
  // },
  {
    path: '/shul',
    element: <ShulDashboardLayout />,
    children: [
      { path: 'dashboard', element: <ShulDashboardView /> },
      { path: 'profile', element: <ShulProfilePage /> },
      { path: 'campaignsettings', element: <CampaignSettingsPage /> },
      { path: 'paymentsetup', element: <PaymentSetup /> },
      { path: 'donations', element: <DonationsPage /> },
      { path: 'marketcampaign', element: <MarketCampaign /> },

    ],
  },
  // { path: '/shul/paymentsetup/refresh', element: <StripeRefresh /> },
  // { path: '/shul/paymentsetup/completed', element: <StripeComplete /> },
  {
    path: '/shul',
    element: <CampaignLayout />,
    children: [
      { path: '/', element: <Main /> },
    ]
  }
];

export default routes;
