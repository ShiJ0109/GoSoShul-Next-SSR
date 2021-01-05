import React from "react";

class TmpDashboard extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
      {}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2"></div>
          {}
        </div>
        {}
      </div>
      {}
      {}
      <div className="container ">
        <div className="row text-center ">
          <div className="col-md-1" />
          <div className="col-md-2 bg-white  border-LTB ">
            <div className="content-padding-TB row-text-style box11">
              <h5>You Started</h5>
              <p>7 Days</p>
            </div>
          </div>
          <div className="col-md-3 bg-white ">
            <div className="content-padding-TB row-text-style box12">
              <h5>You’ve Raised</h5>
              <p>$3,456.77 </p>
            </div>
          </div>
          <div className="col-md-1 bg-white ">
            <div className="content-padding-TB row-text-style box13">
              <h5>Tagged</h5>
              <p>2</p>
            </div>
          </div>
          <div className="col-md-2 bg-white ">
            <div className="content-padding-TB row-text-style box14">
              <h5>Social</h5>
              <p>6</p>
            </div>
          </div>
          <div className="col-md-2 bg-white border-RTB ">
            <div className="content-padding-TB row-text-style box15">
              <h5>Total Network</h5>
              <p>263</p>
            </div>
          </div>
        </div>
        <a href="#" className="growth-text-clr">
          View Your Daily Growth
          <i className="fa fa-long-arrow-right pl-3" aria-hidden="true" />
        </a>
      </div>
      {}
      {}
      <div className="container pt-5">
        {}
        <div className="row">
          <div className="col-md-1" />
          <div
            className="col-md-3"
            style={{
              marginRight: "20px"
            }}
          >
            <div className="card bg-transparent card-box-show-chng">
              <div className="card-header step1-headbox pl-0 pr-0">
                <div className="head-text-step1">
                  Step 1
                  <span>
                    <img src="/dist/img/row1.png" className="rowimg-1 " />
                  </span>
                </div>
              </div>
              {}
              <div className="card-body bg-white card1">
                <div className="alert  alert-dismissible">
                  <h5 className="txt-b1">
                    <img
                      src="/dist/img/right-arrow.png"
                      className="arrow-img-w "
                    />
                      Donate
                  </h5>
                  <span className="txt-b2">
                    You’ve already donated $180
                  </span>
                </div>
              </div>
              {}
              <div className="card-footer bg-white card2">
                <a href="#" className>
                  Donate More{" "}
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
            className="col-md-3"
            style={{
              marginRight: "20px"
            }}
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
              {}
              <div className="card-body bg-white card1">
                <div className="alert  alert-dismissible">
                  <h5 className="txt-b1">
                    <img
                      src="/dist/img/arrow1.png"
                      className="arrow-img-w "
                    />
                      Tag
                  </h5>
                  <span className="txt-b2">
                    You haven't tagged any friends yet
                  </span>
                </div>
              </div>
              {}
              <div className="card-footer bg-white card2">
                <a href="#" className>
                  Tag Now{" "}
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
            className="col-md-3"
            style={{
              marginRight: "0px"
            }}
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
                    <img
                      src="/dist/img/right-arrow.png"
                      className="arrow-img-w "
                    />
                      Share
                  </h5>
                  <span className="txt-b2">
                    You've Shared Your Post onAll Social Platforms
                  </span>
                </div>
              </div>
              <div className="card-footer bg-white card2">
                <a href="#" className>
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
          <div className="col-md-1" />
        </div>
        {}
        {}
        <div className="row">
          {}
          {}
        </div>
        {}
      </div>
      {}
    </div>

    );
  }
}

export default TmpDashboard;
