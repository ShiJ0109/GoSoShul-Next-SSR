import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { UserDashboardContainer, UserContainer } from 'containers';
import * as utils from 'utils/common';

const UserDashboardView = ({ userDashboardState }) => {
  const navigate = useNavigate();
  const { main, step } = userDashboardState.dashboard;
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
        <div id="carousel-mobile-hide" className="row text-center ">
          <div className="col-lg-1 col-md-0 col-sm-0" />
          <div className="col-lg-2 col-md-3 col-sm-2 bg-white  border-LTB ">
            <div className="content-padding-TB row-text-style box11">
              <h5>You Started</h5>
              <p className="dashboard-box-row-nopaddingT">{`${main.started} Days`}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-3 bg-white ">
            <div className="content-padding-TB row-text-style box12">
              <h5>You’ve Raised</h5>
              <p className="dashboard-box-row-nopaddingT">
                {`$${utils.CommaFomatter(main.raised)}`}
              </p>
            </div>
          </div>
          <div className="col-lg-1  col-md-1  col-sm-1 bg-white ">
            <div className="content-padding-TB row-text-style box13">
              <h5>Tagged</h5>
              <p className="dashboard-box-row-nopaddingT">{main.tagged}</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 bg-white ">
            <div className="content-padding-TB row-text-style box14">
              <h5>Social</h5>
              <p className="dashboard-box-row-nopaddingT">{main.social_users}</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2  col-sm-2 bg-white border-RTB ">
            <div className="content-padding-TB row-text-style box15">
              <h5>Total Network</h5>
              <p className="dashboard-box-row-nopaddingT">{main.total_network}</p>
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
                    <h5>You Started</h5>
                    <p>{`${main.started} Days`}</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="content-padding-TB row-text-style box12">
                    <h5>You’ve Raised</h5>
                    <p>
                      {' '}
                      {`$${utils.CommaFomatter(main.raised)}`}
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="content-padding-TB row-text-style box13">
                    <h5>Tagged</h5>
                    <p>{main.tagged}</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="content-padding-TB row-text-style box14">
                    <h5>Social</h5>
                    <p>{main.social_users}</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="content-padding-TB row-text-style box15">
                    <h5>Total Network</h5>
                    <p>{main.total_network}</p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <a
          href="#"
          onClick={() => { navigate('/user/stats'); }}
          className="growth-text-clr"
        >
          View Your Daily Growth
          <i className="fa fa-long-arrow-right pl-3" aria-hidden="true" />
        </a>
      </div>
      {}
      {}
      <div className="container pt-5">
        {}
        <div className="row">
          <div className="col-lg-1 col-md-0 col-sm-0" />
          <div className="col-lg-3 col-md-4 col-sm-4 mr-Step1-donate">
            <div className="card bg-transparent card-box-show-chng">
              <div className="card-header step1-headbox pl-0 pr-0">
                <div className="head-text-step1">
                  Step 1
                  <span>
                    <img src="/dist/img/row1.png" className="rowimg-2" />
                  </span>
                </div>
              </div>
              {}
              <div className="card-body bg-white card1">
                <div className="alert  alert-dismissible">
                  <h5 className="txt-b1">
                    {
                      (step.donate)
                        ? (
                          <img
                            src="/dist/img/right-arrow.png"
                            className="arrow-img-w "
                          />
                        )
                        : <img src="/dist/img/arrow1.png" className="arrow-img-w " />

                    }

                        Donate
                  </h5>
                  {
                    (step.donate)
                      ? (
                        <span className="txt-b2">
                          You’ve already donated $
                          {step.donate}
                        </span>
                      ) : (
                        <span className="txt-b2">
                          You haven`t donate yet.
                        </span>
                      )
                  }

                </div>
              </div>
              {}
              <div className="card-footer bg-white card2">
                <a
                  href="#"
                  onClick={() => {
                    navigate('/user/donate');
                  }}
                  className
                >
                  Donate More
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
          <div className="col-lg-3 col-md-4 col-sm-4 mr-Step1-donate">
            <div className="card bg-transparent card-box-show-chng">
              <div className="card-header step1-headbox pl-0 pr-0">
                <div className="head-text-step1">
                  Step 2
                  <span>
                    <img src="/dist/img/row1.png" className="rowimg-2 " />
                  </span>
                </div>
              </div>
              {}
              <div className="card-body bg-white card1">
                <div className="alert  alert-dismissible">
                  <h5 className="txt-b1">
                    {
                      (step.tag)
                        ? (
                          <img
                            src="/dist/img/right-arrow.png"
                            className="arrow-img-w "
                          />
                        )
                        : <img src="/dist/img/arrow1.png" className="arrow-img-w " />

                    }

                        Tag
                  </h5>
                  {
                    (step.donate)
                      ? (
                        <span className="txt-b2">
                          You’ve already tagged
                          {step.tag}
                        </span>
                      ) : (
                        <span className="txt-b2">
                          You haven`t tagged any friends yet.
                        </span>
                      )
                  }
                </div>
              </div>
              {}
              <div className="card-footer bg-white card2">
                <a
                  href="#"
                  onClick={() => {
                    navigate('/user/tag');
                  }}
                  className
                >
                  Tag Now
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
          <div className="col-lg-3 col-md-4 col-sm-4 mr-Step3-share">
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
                      (step.social.Facebook === '1' && step.social.Instagram === '1' && step.social.WhatsApp === '1')
                        ? (
                          <img
                            src="/dist/img/right-arrow.png"
                            className="arrow-img-w "
                          />
                        )
                        : <img src="/dist/img/arrow1.png" className="arrow-img-w " />

                    }

                        Share
                  </h5>
                  {
                      (step.social.Facebook === '1' && step.social.Instagram === '1' && step.social.WhatsApp === '1')
                        ? (
                          <span className="txt-b2">
                            You've Shared Your Post on All Social Platforms
                          </span>
                        ) : (
                          <span className="txt-b2">
                            You haven`t Shared Your Post on All Social Platforms yet.
                          </span>
                        )
                  }
                </div>
              </div>
              <div className="card-footer bg-white card2">
                <a
                  href="#"
                  onClick={() => {
                    navigate('/user/share');
                  }}
                  className
                >
                  Share Again
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
          <div className="col-lg-1 col-md-0 col-sm-0" />
        </div>
        {}
        {}
        {}
      </div>
      {}
    </div>
  );
};

UserDashboardView.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
  userDashboardState: PropTypes.object,
};

export default UserDashboardContainer(UserContainer(UserDashboardView));
