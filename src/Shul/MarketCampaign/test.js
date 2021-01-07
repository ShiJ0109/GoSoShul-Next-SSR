import React from 'react';
import { Helmet } from 'react-helmet';
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
import * as utils from 'utils/common';

const SocialTest = () => {
  return (
    <div className="content-wrapper">
      <Helmet>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GoSoShul" />
        <meta property="og:quote" content="GoSoShul" />
        <meta property="og:hashtag" content="GoSoShul" />
        <meta property="og:image:url" content="https://res.cloudinary.com/dkoaz5iep/image/upload/v1605506466/gososhul/et6xmze2vefvrhufhu0r.png" />
        <meta property="og:image:secure_url" content="https://res.cloudinary.com/dkoaz5iep/image/upload/v1605506466/gososhul/et6xmze2vefvrhufhu0r.png" />
        <meta property="og:image" content="https://res.cloudinary.com/dkoaz5iep/image/upload/v1605506466/gososhul/et6xmze2vefvrhufhu0r.png" />
        <meta property="og:url" content="http://www.gososhul.com" />
        <meta property="og:video" content="https://youtu.be/gUJ74JJi2ig" />
        <meta property="og:site_name" content="GoSoShul" />
        <meta property="og:description" content="This is Test" />
        <meta property="fb:app_id" content="712279122666491" />
      </Helmet>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2" />
          {}
        </div>
        {}
      </div>
      {}
      <div className="container">
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10 marketpage-margin-left">
            <FacebookShareButton
              url="https://www.gososhul.com/campaign"
              quote="GoSoshul"
              hashtag="GoSoshul"
              className="btn btn-pills btn-fb1-clr mt-2 mr-3"
            >
              <a
                href="javascript:void(0)"
                className="btn btn-pills btn-fb1-clr mt-2 mr-3"
              >
                {/* <FacebookIcon size={25} /> */}
                <img src="/dist/img/fb1.png" width={18} alt="fb" />
                <span className="pl-2">Facebook</span>
              </a>
            </FacebookShareButton>
            <WhatsappShareButton
              url="https://gososhul.com/spread"
              quote="GoSoShul"
              hashtag="shul name"
              className="btn btn-pills btn-fb1-clr mt-2 mr-3"
            >
              <a
                href="javascript:void(0)"
                className="btn btn-pills btn-wsap1-clr mt-2 "
              >
                <img src="/dist/img/wsap.png" width={18} />
                <span className="pl-2">WhatsApp</span>
              </a>
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialTest;
