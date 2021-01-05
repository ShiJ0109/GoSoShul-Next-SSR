import React from "react";

class Prep extends React.Component {
  render() {
    return (
      <div className="active tab-pane" id="activity">
        {}
        <div className="container form-paddingL">
          {}
          {}
          <div className="row">
            <div className="col-lg-11 col-md-12 col-sm-12">
              <p className="maket-para1 only-mob-makepara-new">
                It’s important to prep the congregation and get them excited
                about being a part of this once in a lifetime nationwide
                campaign. There’s nothing more powerful than rallying together
                toward a unified goal.
              </p>
            </div>
            <div className="col-lg-11 col-md-11 col-sm-12">
              <div className="share-section1">
                <h5 className="maket-para2 only-mob-makepara-new">
                  Watch the video below for some instructions on how to best
                  Prepare the congregation for the upcoming campaign
                </h5>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 col-sm-7">
              <div className="row">
                <div className="video-section">
                  {}
                  <img src="/dist/img/web1.png" width={440} height={280} />
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 ">
            <div className="col-md-6">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 only-mob-EmailpadddingL">
                  <div className="share-section1">
                    <h5 className="pb-2">Email Template</h5>
                    <textarea
                      className="form-control email-template-textarea"
                      rows={1}
                      placeholder={"Lorem Ipsum"}
                    />
                    <textarea
                      className="form-control email-template-textarea mt-3"
                      rows={10}
                      placeholder={"Lorem Ipsum"}
                    />
                  </div>
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

export default Prep;
