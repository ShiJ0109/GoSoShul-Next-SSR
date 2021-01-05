import React from 'react';

const Tagged = () => {
  return (
    <div className="active tab-pane" id="activity">
      {}
      <div className="card-body  tagged-crd-paddingLR-24">
        <h6 className="tag-page-heading">
          You've tagged three people so far. Here are their statuses.
        </h6>
        <div className="main-tagged-card">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="row">
                <div className=" col-lg-4 col-md-4 col-sm-4 ">
                  <h5 className="tagged-card-name">Josh Bochner</h5>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 tag-box-donarrow">
                  <span>
                    <img
                        src="/dist/img/right-arrow1.png"
                        className="completeIconSize"
                        alt="right-arrow"
                      />
                  </span>
                  <span className="tagged-card-tags">Donated</span>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 tag-box-donarrow">
                  <span>
                    <img
                        src="/dist/img/right-arrow1.png"
                        className="completeIconSize"
                        alt="right-arrow"
                      />
                  </span>
                  <span className="tagged-card-tags">Tagged 2</span>
                </div>
              </div>
              <div>
                <h5 className="tagged-card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque at leo tellus.
                </h5>
              </div>
            </div>
            <div className=" col-lg-1 col-md-1 col-sm-1" />
            <div className="col-lg-3 col-md-3 col-sm-3 ">
              <img
                src="/dist/img/rightgreen.png"
                className="tagged-card-main-img"
                alt="right-green"
              />
            </div>
          </div>
        </div>
        <div className="main-tagged-card">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-9 ">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 ">
                  <h5 className="tagged-card-name">Josh Bochner</h5>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 tag-box-donarrow">
                  <span>
                    <img
                        src="/dist/img/arrow1.png"
                        className="completeIconSize"
                        alt="right-arrow"
                      />
                  </span>
                  <span className="tagged-card-tags">Donated</span>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 tag-box-donarrow">
                  <span>
                    <img
                        src="/dist/img/arrow1.png"
                        className="completeIconSize"
                        alt="right-arrow"
                      />
                  </span>
                  <span className="tagged-card-tags">Tagged 2</span>
                </div>
              </div>
              <div>
                <h5 className="tagged-card-text">
                  You can encourage Ari directly by using this link below when
                  you email or text him
                </h5>
                <div>
                  <span className="invilink-text">Ari's Invite Link</span>
                  <span>
                    <input
                        type="text"
                        id="invite-link"
                        defaultValue="gososhul.com/inviteid=?2131"
                        name="invite-link"
                        className="invite-link-input"
                      />
                    <span
                        onClick="copyToClipboard()"
                        className="link-copy-button"
                      >
                        Copy Link
                      </span>
                  </span>
                  <span className="Whatsapp-button">
                    <button className="btn donateAgainButton tag-btnpadding-tabview">
                        <span className="whatsapp-logo">
                          <img
                            src="/dist/img/logo-whatsapp.png"
                            alt="whatsapp-logo"
                          />
                        </span>
                        <span className="sm-d-txtWhtasp">Whatsapp</span>
                      </button>
                  </span>
                </div>
                <div className="text-center">
                  <small id="copy-to-clipboard-text" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 ">
              <img
                src="/dist/img/redtick.png"
                className="tagged-card-main-img"
                alt="right-green"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tagged;
