import React from 'react';
import {
  Fade,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const ProgressBar = ({ totalDonate }) => {
  // function to convert currency to 1B, 1K
  function kBMFormatter(num) {
    if (Math.abs(num) > 999999999) return `${Math.sign(num) * ((Math.abs(num) / 1000000000).toFixed(1))}B`;
    if (Math.abs(num) > 999999) return `${Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(1))}M`;
    if (Math.abs(num) > 999) return `${Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1))}K`;
    return `${Math.sign(num) * ((Math.abs(num)).toFixed(1))}`;
  }
  const style = `linear-gradient(to right, rgb(85,190,33,1) ${totalDonate.achieved}%, rgb(223, 228, 234,0.5) ${totalDonate.achieved}%)`;
  return (
    <Fade
      in
      timeout={4000}
    >
      <section className="section pb-0 pt-0">
        <div id="carousel-mobile-hide" className="rowbox-bg" style={{ background: style, opacity: 1 }}>
          <div
            className="row justify-content-around achiever-row-TBpadding"
            id="counter"
          >
            <div className="col-lg-1 col-md-2">
              <div className="counter-box text-color-op">
                <h2 id="demo" className=" title-dark font-sz-per ">
                  {totalDonate.achieved}
                  %
                </h2>
                <h6 className="counter-head title-dark fw-lg">Achieved</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 tras-animt1 animate__animated animate__fadeInDown">
              <div className="counter-box ">
                <h6 className="counter-head title-dark font-sz-txt ">Raised</h6>
                <h2 className="mb-0  title-dark  font-sz-doll">
                  $
                  {(totalDonate.raised * 1).toLocaleString()}
                </h2>
              </div>
              {}
            </div>
            {}
            <div className="col-lg-2 col-md-3 tras-animt2 animate__animated animate__fadeInDown">
              <div className="counter-box">
                <h6 className="counter-head title-dark font-sz-txt ">
                  Donations
                </h6>
                <h2 className="mb-0  title-dark  font-sz-doll">{(totalDonate.donations * 1).toLocaleString()}</h2>
              </div>
              {}
            </div>
            {}
            <div className="col-lg-2 col-md-1 tras-animt3 animate__animated animate__fadeInDown">
              <div className="counter-box">
                <h6 className="counter-head title-dark font-sz-txt ">Shuls</h6>
                <h2 className="mb-0  title-dark  font-sz-doll">{totalDonate.shuls}</h2>
              </div>
              {}
            </div>
            {}
            <div className="col-lg-2 col-md-1 tras-animt4 animate__animated animate__fadeInDown">
              <div className="counter-box">
                <h6 className="counter-head title-dark font-sz-txt">Goal</h6>
                <h2 className="mb-0  title-dark font-sz-doll">
                  $
                  {kBMFormatter(totalDonate.goal)}
                </h2>
              </div>
              {}
            </div>
            {}
          </div>
        </div>
        <div id="carousel-mobile-show" className="container-fluid rowbox-bg " style={{ background: style, opacity: 1 }}>
          <div className="row text-center">
            <div className="col-sm-1" />
            <div className="col-sm-10">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="counter-box text-color-op">
                      <h2 className=" title-dark font-sz-per">
                        {totalDonate.achieved}
                        %
                    </h2>
                      <h6 className="counter-head title-dark fw-lg">Achieved</h6>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="counter-box ">
                      <h6 className="counter-head title-dark font-sz-txt ">
                        Raised
                    </h6>
                      <h2 className="mb-0  title-dark mt-2 font-sz-doll">
                        $
                      {(totalDonate.raised * 1).toLocaleString()}
                      </h2>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="counter-box">
                      <h6 className="counter-head title-dark font-sz-txt ">
                        Donations
                    </h6>
                      <h2 className="mb-0  title-dark mt-2 font-sz-doll">
                        {(totalDonate.donations * 1).toLocaleString()}
                      </h2>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="counter-box">
                      <h6 className="counter-head title-dark font-sz-txt ">
                        Shuls
                    </h6>
                      <h2 className="mb-0  title-dark mt-2 font-sz-doll">{totalDonate.shuls}</h2>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="counter-box">
                      <h6 className="counter-head title-dark font-sz-txt">
                        Goal
                    </h6>
                      <h2 className="mb-0  title-dark mt-2 font-sz-doll">
                        $
                      {kBMFormatter(totalDonate.goal)}
                      </h2>
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
          {}
        </div>
      </section>
    </Fade>

  );
};

ProgressBar.propTypes = {
  totalDonate: PropTypes.object,
};

export default ProgressBar;
