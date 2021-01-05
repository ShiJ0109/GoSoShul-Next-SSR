import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles
} from '@material-ui/core';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { UserContainer, ShulDashboardContainer } from 'containers';
import Warning from 'components/Typography/Warning';
// import model
import ShulDashboardModel from 'models/shul/ShulDashboardModel';
import * as utils from 'utils/common';
import Clock from 'components/Accessaries/AdminClock';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = ({ userState, shulDashboardState }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setdata] = useState(ShulDashboardModel(shulDashboardState));
  const [copyState, setCopy] = useState(false);
  const baseUrl = utils.getBaseUrl(window.location.href);

  return (
    <div className="content-wrapper">
      {}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2" />
          {}
        </div>
        {}
      </div>
      {}
      {}
      <div className="container ">
        <div className="row flex-column-reverse flex-sm-row shul-clckboard-padding">
          <div className="col-lg-1 col-md-0 col-sm-0" />
          <div className="col-lg-5 col-md-7  col-sm-5   bg-white  border-LTB">
            <div className="copy-link-box-padding">
              <div>
                <label className="copy-link-labeltxt">
                  Your Dedicated Campaign URL
                </label>
                <input
                  type="text"
                  id="invite-link"
                  defaultValue={`${baseUrl}/campaign/${data.campaign_url}`}
                  name="invite-link"
                  readOnly
                  className="copy-link-inputfiled"
                  style={{ width: '80%' }}
                />
                <CopyToClipboard
                  onCopy={() => {
                    setCopy(true);
                    setTimeout(() => {
                      setCopy(false);
                    }, 1500);
                  }}
                  text={`${baseUrl}/campaign/${data.campaign_url}`}
                >
                  <span
                    className="copy-link-btn"
                    style={{ marginLeft: '0px' }}
                  >
                    Copy Link
                  </span>
                </CopyToClipboard>
                {copyState ? <Warning>Copied</Warning> : null}

              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5  col-sm-6 bg-white  border-RTB">
            <div className="copy-link-box-padding ">
              <div className="buy-button color-top-padding">
                <div className="text-center">
                  <Clock deadline={data.deadline} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div id="carousel-mobile-hide" className="row text-center ">
          <div className="col-lg-1 col-md-0 col-sm-0" />
          <div className="col-lg-3 col-md-5 col-sm-3  bg-white border-LTB ">
            <div className="content-padding-TB row-text-style box12  border-LTB ">
              <h5>Congregation</h5>
              <p className="dashboard-box-row-nopaddingT">
                {data.campaign_stat.congregation}
                {' '}
              </p>
            </div>
          </div>
          <div className="col-lg-1  col-md-1  col-sm-1 bg-white ">
            <div className="content-padding-TB row-text-style box13">
              <h5>Tagged</h5>
              <p className="dashboard-box-row-nopaddingT">{utils.CommaFomatter(data.campaign_stat.tagged)}</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2  bg-white ">
            <div className="content-padding-TB row-text-style box14">
              <h5>Social</h5>
              <p className="dashboard-box-row-nopaddingT">{utils.CommaFomatter(data.campaign_stat.social)}</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2  col-sm-2 bg-white  ">
            <div className="content-padding-TB row-text-style box15">
              <h5>Total Network</h5>
              <p className="dashboard-box-row-nopaddingT">{utils.CommaFomatter(data.campaign_stat.total_network)}</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 bg-white  border-RTB ">
            <div className="content-padding-TB row-text-style box11">
              <h5>Raised</h5>
              <p>
                $
                {utils.CommaFomatter(data.campaign_stat.raised)}
              </p>
            </div>
          </div>
        </div>
        <div id="carousel-mobile-show" className="row bg-white text-center">
          <div className="col-sm-1" />
          <div className="col-sm-10">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="content-padding-TB row-text-style box11">
                    <h5>Congregation</h5>
                    <p>{data.campaign_stat.congregation}</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="content-padding-TB row-text-style box12">
                    <h5>Tagged</h5>
                    <p>{utils.CommaFomatter(data.campaign_stat.tagged)}</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="content-padding-TB row-text-style box13">
                    <h5>Social</h5>
                    <p>{utils.CommaFomatter(data.campaign_stat.social)}</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="content-padding-TB row-text-style box14">
                    <h5>Total Network</h5>
                    <p>{utils.CommaFomatter(data.campaign_stat.total_network)}</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="content-padding-TB row-text-style box15">
                    <h5>Raised</h5>
                    <p className="dashboard-box-row-nopaddingT">
                      $
                      {utils.CommaFomatter(data.campaign_stat.raised)}
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-1 col-md-0 col-sm-0" />
          <div
            className="col-lg-3 col-md-4 col-sm-4 mr-Step1-donate"
            // style={{
            //   marginRight: '20px'
            // }}
          >
            <div className="card bg-transparent card-box-show-chng">
              <div className="card-header step1-headbox pl-0 pr-0">
                <div className="head-text-step1">
                  Step 1
                  <span>
                    <img src="/dist/img/row1.png" className="rowimg-2" />
                  </span>
                </div>
              </div>
              <div className="card-body bg-white card1">
                <div className="alert  alert-dismissible">
                  <h5 className="txt-b1">
                    {
                      (data.shul_status.profile === '0')
                        ? (
                          <img
                            src="/dist/img/arrow1.png"
                            className="arrow-img-w "
                          />
                        )
                        : (
                          <img
                            src="/dist/img/right-arrow.png"
                            className="arrow-img-w "
                          />
                        )
                    }
                        Profile
                  </h5>
                  <span className="txt-b2">
                    {
                      (data.shul_status.profile === '0')
                        ? 'You haven`t completed your profile.'
                        : 'You have completed you profile.'
                    }

                  </span>
                </div>
              </div>
              {}
              <div className="card-footer bg-white card2">
                <a
                  href="#"
                  onClick={() => {
                    navigate('/shul/profile', { replace: true });
                  }}
                  className
                >
                  Profile Settings
                  {' '}
                  <i
                    className="fa fa-long-arrow-right pl-2"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
            {}
          </div>
          {}
          <div
            className="col-lg-3 col-md-4 col-sm-4 mr-Step1-donate"
            // style={{
            //   marginRight: '20px'
            // }}
          >
            <div className="card bg-transparent card-box-show-chng">
              <div className="card-header step1-headbox pl-0 pr-0">
                <div className="head-text-step1">
                  Step 2
                  <span>
                    <img src="/dist/img/row1.png" className="rowimg-2 " />
                  </span>
                </div>
              </div>
              <div className="card-body bg-white card1">
                <div className="alert  alert-dismissible">
                  <h5 className="txt-b1">
                    {
                      (data.shul_status.campaign === '0')
                        ? (
                          <img
                            src="/dist/img/arrow1.png"
                            className="arrow-img-w "
                          />
                        )
                        : (
                          <img
                            src="/dist/img/right-arrow.png"
                            className="arrow-img-w "
                          />
                        )
                    }
                        Campaign
                  </h5>
                  <span className="txt-b2">
                    {
                      (data.shul_status.campaign === '0')
                        ? 'You haven’t finished setting up your campaign.'
                        : 'You have finished setting up your campaign'
                    }

                  </span>
                </div>
              </div>
              <div className="card-footer bg-white card2">
                <a
                  href="#"
                  onClick={() => {
                    navigate('/shul/campaignsettings');
                  }}
                  className
                >
                  Campaign Settings
                  {' '}
                  <i
                    className="fa fa-long-arrow-right pl-2"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
            {}
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-4 mr-Step3-share"
            // style={{
            //   marginRight: '0px'
            // }}
          >
            <div className="card bg-transparent card-box-show-chng">
              <div className="card-header step1-headbox pl-0 pr-0">
                <div className="head-text-step1">
                  Step 3
                  <span>
                    <img src="/dist/img/row1.png" className="rowimg-2 " />
                  </span>
                </div>
              </div>
              {}
              <div className="card-body bg-white card1">
                <div className="alert alert-dismissible">
                  <h5 className="txt-b1">
                    {
                      (data.shul_status.congregation === '0')
                        ? (
                          <img
                            src="/dist/img/arrow1.png"
                            className="arrow-img-w "
                          />
                        )
                        : (
                          <img
                            src="/dist/img/right-arrow.png"
                            className="arrow-img-w "
                          />
                        )
                    }
                        Congregation
                  </h5>
                  <span className="txt-b2">Prepare Your Congregation</span>
                </div>
              </div>
              <div className="card-footer bg-white card2">
                <a
                  href="#"
                  onClick={() => {
                    navigate('/shul/marketcampaign');
                  }}
                  className
                >
                  Get Prepared
                  <i
                    className="fa fa-long-arrow-right pl-2"
                    aria-hidden="true"
                  />
                </a>
              </div>
              {}
            </div>
            {}
          </div>
          <div className="col-md-1" />
        </div>
        {}
        {}
        <div className="row" />
        {}
      </div>
      {}
    </div>
  );
};

Dashboard.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
};

export default ShulDashboardContainer(UserContainer(Dashboard));
