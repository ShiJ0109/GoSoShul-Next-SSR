import React from 'react';

const Share = ({handleBack}) => {
  return (
    <div
      className="multisteps-form__panel js-active"
      data-animation="scaleIn"
    >
      <div className="multisteps-form__content">
        <div className="row ">
          <div className="col-lg-1  col-md-2  col-sm-0 " />
          <div className="col-lg-8  col-md-8  col-sm-8 ">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-heading form5-share-paddingall  ">
                  <h5 className=" fnt-1 mb-2">
                    <img src="images/gososhul/h2.png" />
                    <span className="pl-2">
                        GoSoshul via Social!
                      </span>
                  </h5>
                  <p className="para-fnt7 ">
                    Take a few extra seconds to share and
                    challenge your friends publicly via one or
                    more of the social platforms below to spread
                    the good. Every person you refer will be
                    tracked so you can see how far your touch
                    has gone
                    </p>
                </div>
              </div>
              <div className="col-lg-12  col-md-12  col-sm-12 pl-0 pr-0 pt-2 form5-share-txtalign">
                <a
                  href="javascript:void(0)"
                  className="btn btn-pills btn-fb1-clr mt-2 mr-3"
                >
                  <img src="images/gososhul/fb.png" />
                  <span className="pl-2 dis-fb">Facebook</span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="btn btn-pills btn-tw1-clr mt-2 mr-3"
                >
                  <img src="images/gososhul/tw.png" />
                  <span className="pl-2 dis-twit">Twitter</span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="btn btn-pills btn-wsap1-clr mt-2 mr-3"
                >
                  <img src="images/gososhul/wsap.png" />
                  <span className="pl-2 dis-whtsap">
                    WhatsApp
                    </span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="btn btn-pills btn-inst1-clr mt-2 "
                >
                  <img src="images/gososhul/inst.png" />
                  <span className="pl-2 dis-insta">
                    Instagram
                    </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="button-row d-flex  col-12 sharepageNxtbtn-rowpadding">
          <button
            id="go-backprev-btn"
            className="btn js-btn-prev "
            type="button"
            onClick={()=>{
              handleBack();
            }}
          >
            <i
              className="fa fa-caret-left  back-clr-icon"
              aria-hidden="true"
            />
               Go Back
          </button>
          <button
            className="btn nxtbtn-step-green ml-auto"
            type="button"
            style={
              {
                color: 'rgb(33, 29, 40)',
                border: '3px solid rgb(85, 190, 33)'
              }
            }
          >
            I Did It!
          </button>
          <hr
            className="hr-right-line"
            style={
            {
              border: '2px solid rgb(85, 190, 33)'
            }
          }
          />
        </div>
      </div>
    </div>
  );
};

export default Share;
