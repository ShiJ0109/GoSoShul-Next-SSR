import React from 'react';
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
import { Helmet } from 'react-helmet';

import { ShulDashboardContainer } from 'containers';
import links from 'constants/socialLink';
import * as utils from 'utils/common';

const load = function (component, product) {
  // load config
  let config = component.props.config || { enabled: true };
  config = JSON.parse(JSON.stringify(config));

  // load buttons
  const _onShareThisLoaded = window.onShareThisLoaded;
  const onload = () => {
    if (!onload.complete) {
      if (!config.id) {
        const id = `sharethis-${Date.now()}`;
        config.id = id;
      }
      if (component.buttons.current) {
        component.buttons.current.id = config.id;
        window.__sharethis__.load(product, config);
      }
      if (_onShareThisLoaded) {
        _onShareThisLoaded();
      }
      onload.complete = true;
    }
  };
  window.onShareThisLoaded = onload;

  // load sharethis.js
  if (document.getElementById('sharethis-js')) {
    if (window.__sharethis__) {
      window.onShareThisLoaded();
    }
  } else {
    const script = document.createElement('script');
    script.setAttribute('id', 'sharethis-js');
    const params = {
      property: config.property || '',
      product,
      source: 'reactjs'
    };
    const query = Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
    script.src = `https://platform-api.sharethis.com/js/sharethis.js?${query}`;
    script.async = true;
    document.body.appendChild(script);
  }
};

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoLink: '',
      photos: [],
      message: '',
      shul_name: '',
      campaign_url: '',
    };
  }

  componentDidMount() {
    const { introduction, shul_name, campaign_url } = this.props.shulDashboardState.campaign;
    this.setState({
      videoLink: introduction.video_link,
      photos: introduction.photos,
      message: introduction.about_shul,
      shul_name,
      campaign_url,
    });
  }

  render() {
    const {
      videoLink, photos, message, shul_name, campaign_url
    } = this.state;
    const baseUrl = utils.getBaseUrl(window.location.href);

    return (
      <div className="tab-pane" id="timeline">
        {}
        <div className="container form-paddingL">
          {}
          {}
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-6 paddingLR-market-mobile2">
              <div className="row">
                <div className="col-md-12">
                  <div className="share-section1">
                    <h5 className="pb-2">Shul Video</h5>
                  </div>
                </div>
                <div className="video-section">
                  {}
                  {/* <img src="/dist/img/web1.png" width={440} height={280} /> */}
                  <iframe
                    title={shul_name}
                    width={440}
                    height={280}
                    src={utils.getYoutubeEmbeded(videoLink)}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 pl-0 pr-0 pt-3 mob-txt-ctn1">
                  <FacebookShareButton
                    url={`${baseUrl}/campaign/${campaign_url}`}
                    quote={utils.getYoutubeEmbeded(videoLink)}
                    hashtag={shul_name}
                    className="btn btn-pills btn-fb1-clr mt-2 mr-3"
                  >
                    <a
                      href="javascript:void(0)"
                      className="btn btn-pills btn-fb1-clr mt-2 mr-3"
                    >
                      {/* <FacebookIcon size={25} /> */}
                      <img src="/dist/img/fb1.png" width={18} />
                      <span className="pl-2">Facebook</span>
                    </a>
                  </FacebookShareButton>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-pills btn-inst1-clr mt-2 mr-3"
                  >
                    <img src="/dist/img/inst.png" width={18} />
                    <span className="pl-2">Instagram</span>
                  </a>
                  <WhatsappShareButton
                    url={`${baseUrl}/campaign/${campaign_url}`}
                    quote={utils.getYoutubeEmbeded(videoLink)}
                    hashtag={shul_name}
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

                  {/* <WhatsApp solidcircle link="http://sharingbuttons.io"/> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 ">
            <div className="col-lg-7 col-md-12 col-sm-12 ">
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
                      {message}
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 pl-0 pr-0 pt-3">
                  <FacebookShareButton
                    url={`${baseUrl}/campaign/${campaign_url}`}
                    quote={message}
                    hashtag={shul_name}
                    className="btn btn-pills btn-fb1-clr mt-2 mr-3"
                  >
                    <a
                      href="javascript:void(0)"
                      className="btn btn-pills btn-fb1-clr mt-2 mr-3"
                    >
                      <img src="/dist/img/fb1.png" width={18} />
                      <span className="pl-2">Facebook</span>
                    </a>
                  </FacebookShareButton>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-pills btn-inst1-clr mt-2  mr-3"
                  >
                    <img src="/dist/img/inst.png" width={18} />
                    <span className="pl-2">Instagram</span>
                  </a>
                  <WhatsappShareButton
                    url={`${baseUrl}/campaign/${campaign_url}`}
                    quote={message}
                    hashtag={shul_name}
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
          <div className="row pt-5 pb-5">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="share-section1">
                    <h5 className="pb-2">Image Post</h5>
                  </div>
                </div>
                <div className="video-section">
                  {}
                  <img
                    src={photos.length > 0
                      ? photos[0] : '/dist/img/web2.png'}
                    width={440}
                    height={280}
                  />
                </div>
                <div className="col-lg-12 pl-0 pr-0 pt-3">
                  <FacebookShareButton
                    url={`${baseUrl}/campaign/${campaign_url}`}
                    quote={photos.length > 0 ? photos[0] : ''}
                    hashtag={shul_name}
                    className="btn btn-pills btn-fb1-clr mt-2 mr-3"
                  >
                    <a
                      href="javascript:void(0)"
                      className="btn btn-pills btn-fb1-clr mt-2 mr-3"
                    >
                      <img src="/dist/img/fb1.png" width={18} />
                      <span className="pl-2">Facebook</span>
                    </a>
                  </FacebookShareButton>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-pills btn-inst1-clr mt-2 mr-3 "
                  >
                    <img src="/dist/img/inst.png" width={18} />
                    <span className="pl-2">Instagram</span>
                  </a>
                  <WhatsappShareButton
                    url={`${baseUrl}/campaign/${campaign_url}`}
                    quote={photos.length > 0 ? photos[0] : ''}
                    hashtag={shul_name}
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
          {}
          {}
        </div>
      </div>
    );
  }
}

export default ShulDashboardContainer(Market);
