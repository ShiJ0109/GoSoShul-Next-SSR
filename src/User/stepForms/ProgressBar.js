import React from 'react';

const ProgressBar = ({ formStat }) => {
  if (formStat === 'Donate') {
    return (
      <div className="row three-steptag-mob">
        <div className="col-lg-12 col-md-12 col-sm-12  d-flex justify-content-center ">
          <div className="multisteps-form__progress progress-w-br1">
            <h5 className="multisteps-form__progress-btn special-btn progress-w-br2 js-active">
              1.
              <span> Donate</span>
            </h5>
            <h5
              className="multisteps-form__progress-btn simple-line "
              type="button"
            />
            <h5
              className="multisteps-form__progress-btn simple-line"
              type="button"
            />
            {}
            <h5 className="multisteps-form__progress-btn special-btn progress-w-br3">
              2.
              <span> Tag</span>
            </h5>
            <h5 className="multisteps-form__progress-btn   simple-line special-btn-end progress-w-br4">
              3.
              <span> Share</span>
            </h5>
          </div>
        </div>
      </div>
    );
  }
  if (formStat === 'PaymentDetail') {
    return (
      <div className="row three-steptag-mob">
        <div className="col-lg-12 col-md-12 col-sm-12  d-flex justify-content-center ">
          <div className="multisteps-form__progress progress-w-br1">
            <h5 className="multisteps-form__progress-btn special-btn progress-w-br2 js-active">
              1.
              <span> Donate</span>
            </h5>
            <h5
              className="multisteps-form__progress-btn simple-line js-active"
              type="button"
            />
            <h5
              className="multisteps-form__progress-btn simple-line js-active"
              type="button"
            />
            {}
            <h5 className="multisteps-form__progress-btn special-btn progress-w-br3">
              2.
              <span> Tag</span>
            </h5>
            <h5 className="multisteps-form__progress-btn   simple-line special-btn-end progress-w-br4">
              3.
              <span> Share</span>
            </h5>
          </div>
        </div>
      </div>

    );
  }
  if (formStat === 'Tag') {
    return (
      <div className="row three-steptag-mob">
        <div className="col-lg-12 col-md-12 col-sm-12  d-flex justify-content-center ">
          <div className="multisteps-form__progress progress-w-br1">
            <h5 className="multisteps-form__progress-btn special-btn progress-w-br2 js-active">
              1.
              <span> Donate</span>
            </h5>
            <h5
              className="multisteps-form__progress-btn simple-line js-active"
              type="button"
            />
            <h5
              className="multisteps-form__progress-btn simple-line js-active"
              type="button"
            />
            {}
            <h5 className="multisteps-form__progress-btn special-btn progress-w-br3 js-active">
              2.
              <span> Tag</span>
            </h5>
            <h5 className="multisteps-form__progress-btn   simple-line special-btn-end progress-w-br4">
              3.
              <span> Share</span>
            </h5>
          </div>
        </div>
      </div>

    );
  }
  if (formStat === 'Share') {
    return (
      <div className="row three-steptag-mob">
        <div className="col-lg-12 col-md-12 col-sm-12  d-flex justify-content-center ">
          <div className="multisteps-form__progress progress-w-br1">
            <h5 className="multisteps-form__progress-btn special-btn progress-w-br2 js-active">
              1.
              <span> Donate</span>
            </h5>
            <h5
              className="multisteps-form__progress-btn simple-line js-active"
              type="button"
            />
            <h5
              className="multisteps-form__progress-btn simple-line js-active"
              type="button"
            />
            {}
            <h5 className="multisteps-form__progress-btn special-btn progress-w-br3 js-active">
              2.
              <span> Tag</span>
            </h5>
            <h5 className="multisteps-form__progress-btn   simple-line special-btn-end progress-w-br4 js-active">
              3.
              <span> Share</span>
            </h5>
          </div>
        </div>
      </div>
    );
  }
};

export default ProgressBar;
