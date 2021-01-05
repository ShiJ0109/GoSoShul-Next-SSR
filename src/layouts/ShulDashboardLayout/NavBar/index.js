import React, { useEffect, useState } from 'react';
import {
  Link as RouterLink, useLocation, useNavigate, Navigate
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Spacer from 'react-add-space';
import * as utils from 'utils/common';
import NavItem from './NavItem';

const items = [
  {
    href: 'dashboard',
    title: 'Dashboard'
  },
  {
    href: 'profile',
    title: 'Profile'
  },
  {
    href: 'paymentsetup',
    title: 'Payment Setup'
  },
  {
    href: 'campaignsettings',
    title: 'Campaign Settings'
  },

  {
    href: 'donations',
    title: 'Donations'
  },
  {
    href: 'marketcampaign',
    title: (
      <>
        Market
        <br />
        Your Campaign
      </>)
  },
  // {
  //   href: '/shul/products',
  //   icon: ShoppingBagIcon,
  //   title: 'Products'
  // },
  // {
  //   href: '/shul/account',
  //   icon: UserIcon,
  //   title: 'Account'
  // },
  // {
  //   href: '/shul/settings',
  //   icon: SettingsIcon,
  //   title: 'Settings'
  // },
  // {
  //   href: '/login',
  //   icon: LockIcon,
  //   title: 'Login'
  // },
  // {
  //   href: '/register',
  //   icon: UserPlusIcon,
  //   title: 'Register'
  // },
  // {
  //   href: '/404',
  //   icon: AlertCircleIcon,
  //   title: 'Error'
  // }
];

const NavBar = ({
  onMobileClose, openMobile, onMobileOpen, handleLogState
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <>
      <nav
        id="mobile-btn-toggle"
        className="main-header navbar navbar-expand navbar-white navbar-light"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              onClick={() => { onMobileOpen(); }}
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item" id="logo-img-mobile">
            <a href="#" className="nav-link">
              <img src="/dist/img/logo-small.png" alt="Go Soshul" className />
            </a>
          </li>
        </ul>
      </nav>
      <aside className="main-sidebar sidebar-dark-primary ">
        {}
        <a href="#" className="brand-link text-center logo-padding">
          <img
            src="/dist/img/logo.png"
            alt="Go Soshul"
            height={40}
            className="true"
          />
        </a>
        {}
        <div className="sidebar">
          {}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {items.map((item) => (
                <NavItem
                  href={item.href}
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  active={item.href === utils.getLastPathName(window.location.href)}
                />
              ))}
              <li className="nav-item logout-paddingT">
                <a
                  href="#"
                  className="nav-link"
                  onClick={
                 () => {
                   handleLogState();
                 }
               }
                >
                  <img src="/dist/img/logout.png" alt="logout" className />
                  <p>
                    {' '}
                    <Spacer amount={1} />
                    Logout
                  </p>
                </a>
              </li>
            </ul>
          </nav>
          {}
        </div>
      </aside>
    </>

  );

  return (
    <>
      {content}
      {openMobile
        ? (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 1
            }}
            onClick={onMobileClose}
          />
        ) : ''}
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
  onMobileOpen: PropTypes.func,
  handleLogState: PropTypes.func,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
