import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  InstagramShareButton,
  FacebookIcon
} from 'react-share';
import { UserDashboardContainer, UserContainer } from 'containers';
import * as utils from 'utils/common';

const SharePage = ({ userDashboardState }) => {
  const { share, shul_list } = userDashboardState;
  const [shareShul, setShareShul] = useState('');
  const baseUrl = utils.getBaseUrl(window.location.href);
  let selectedShul = {};
  if (shareShul === '') {
    selectedShul = {
      clicks: 0,
      signup_num: 0,
    };
  } else {
    selectedShul = share.find((shulShare) => shulShare.shul_id === shareShul);
    if (selectedShul === undefined) {
      selectedShul = {
        clicks: 0,
        signup_num: 0,
      };
    }
  }
  return (
    <div className="content-wrapper">
      {}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row blnk-top-space-marginB" />
          {}
        </div>
        {}
      </div>
      {}
      {}
      <div className="container ">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-0" />
          <div className="col-lg-10 col-md-10 col-sm-10  paddingLR-share-mobile">
            <div className="share-section1">
              <h5 className="pb-2">Share</h5>
              <p>Keep it going by sharing some of the posts below to social</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-0" />
          <div className="col-lg-10 col-md-10 col-sm-10  paddingLR-share-mobile">
            <div className="form-row">
              <div className="form-group  col-lg-3 col-md-2  col-sm-6 ">
                <select
                  id="inputState"
                  className="form-control chng-filed"
                  value={shareShul}
                  onChange={(e) => {
                    setShareShul(e.target.value);
                  }}
                >
                  <option selected value="">Select Shul</option>
                  {
                          shul_list.map((item) => (
                            <option value={item.id}>{item.name}</option>
                          ))
                        }
                </select>
              </div>
            </div>
          </div>
        </div>
        {
          // share.filter(value=>(value.))
        }
        <div className="row text-center ">
          <div className="col-lg-1 col-md-1 col-sm-0 " />
          <div className="col-lg-2 col-md-3 col-sm-2  bg-white  mr-share-mob1 sharebox1">
            <div className="share-padding-TB row-text-style box22">
              <h4>{`${selectedShul.clicks} Clicks`}</h4>
            </div>
          </div>
          <div className=" col-lg-4 col-md-5 col-sm-3  bg-white  mr-share-mob2 sharebox1">
            <div className="share-padding-TB row-text-style box23">
              <h4>{`${selectedShul.signup_num} People Signed Up`}</h4>
            </div>
          </div>
        </div>
      </div>
      {}
      {}
      <div className="container ">
        <div className="row shulcamp-addmt-5 shul-campSetting1-padding">
          <div className="col-lg-1 col-md-0 col-sm-0" />
          <div className="col-lg-7 col-md-7  col-sm-5   bg-white  sharebox1">
            <div className="copy-link-box-padding">
              <div>
                <label htmlFor className="copy-link-labeltxt">
                  Your Dedicated URL
                </label>
                <input
                  type="text"
                  value={(shareShul === '') ? '' : `${baseUrl}/shul/${shareShul}`}
                  name="invite-link"
                  className="copy-link-inputfiled-sharepage"
                />
                <span
                  className="copy-link-btn"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Copy Link
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        {}
        {}
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-0" />
          <div className=" col-lg-6 col-md-6 col-sm-6 paddingLR-share-mobile2">
            <div className="row">
              <div className="col-md-12">
                <div className="share-section1">
                  <h5 className="pb-2">Shul Video</h5>
                </div>
              </div>
              <div className="video-section">
                {
                  shareShul === ''
                    ? (<img src="/dist/img/web1.png" alt="video" />) : (
                      <iframe
                        title={selectedShul.campaign_url}
                        width={440}
                        height={280}
                        src={utils.getYoutubeEmbeded(selectedShul.video_link)}
                        frameBorder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowFullScreen
                      />
                    )
                }
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 pl-0 pr-0 pt-3 mob-txt-ctn1">
                <a
                  href="javascript:void(0)"
                  className="btn btn-pills btn-fb1-clr mt-2 mr-3"
                >
                  <img src="/dist/img/fb.png" />
                  <span className="dis-fb pl-2">Facebook</span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="btn btn-pills btn-wsap1-clr mt-2 mr-3"
                >
                  <img src="/dist/img/wsap.png" />
                  <span className="pl-2 dis-whsp">WhatsApp</span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="btn btn-pills btn-inst1-clr mt-2 "
                >
                  <img src="/dist/img/inst.png" />
                  <span className="pl-2 dis-ins">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 ">
          <div className="col-lg-1 col-md-1 col-sm-0" />
          <div className="col-lg-6 col-md-11 col-sm-12 paddingLR-share-mobile2">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="share-section1">
                  <h5 className="pb-2">Moving Message</h5>
                </div>
              </div>
              <div className="card share-msg">
                {}
                <div className="card-body share-bodymsg">
                  <p>
                    {
                      shareShul === ''
                        ? (`Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting.`) : selectedShul.about_shul

                    }

                  </p>
                </div>
              </div>
              <div className="col-lg-12 pl-0 pr-0 pt-3 mob-txt-ctn1">
                <a
                  href="javascript:void(0)"
                  className="btn btn-pills btn-fb1-clr mt-2 mr-3"
                >
                  <img src="/dist/img/fb.png" />
                  <span className="dis-fb pl-2">Facebook</span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="btn btn-pills btn-wsap1-clr mt-2 mr-3"
                >
                  <img src="/dist/img/wsap.png" />
                  <span className="pl-2 dis-whsp">WhatsApp</span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="btn btn-pills btn-inst1-clr mt-2 "
                >
                  <img src="/dist/img/inst.png" />
                  <span className="pl-2 dis-ins">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 pb-5">
          <div className="col-lg-1 col-md-1 col-sm-0" />
          <div className="col-lg-6 col-md-6 col-sm-6 paddingLR-share-mobile2">
            <div className="row">
              <div className="col-md-12">
                <div className="share-section1">
                  <h5 className="pb-2">Image Post</h5>
                </div>
              </div>
              <div className="video-section">
                {
                  shareShul === ''
                    ? (<img src="/dist/img/web2.png" />) : (
                      <img
                        src={selectedShul.photo_link}
                        width={440}
                        height={280}
                        alt={selectedShul.campaign_url}
                      />
                    )

                }
              </div>
              <div className="col-lg-12 pl-0 pr-0 pt-3 mob-txt-ctn1">
                <a
                  href="javascript:void(0)"
                  className="btn btn-pills btn-fb1-clr mt-2 mr-3"
                >
                  <img src="/dist/img/fb.png" />
                  <span className="dis-fb pl-2">Facebook</span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="btn btn-pills btn-wsap1-clr mt-2 mr-3"
                >
                  <img src="/dist/img/wsap.png" />
                  <span className="pl-2 dis-whsp">WhatsApp</span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="btn btn-pills btn-inst1-clr mt-2 "
                >
                  <img src="/dist/img/inst.png" />
                  <span className="pl-2 dis-ins">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {}
        {}
      </div>
      {}
    </div>
  );
};

SharePage.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
  userDashboardState: PropTypes.object,
  userDashboardActions: PropTypes.object,
};

export default UserDashboardContainer(UserContainer(SharePage));
