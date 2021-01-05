import React from 'react';

const GoalContent = ({ donationStat, goal }) => {
  // function to convert currency to 1B, 1K

  function kBMFormatter(num) {
    if (Math.abs(num) > 999999999) return `${Math.sign(num) * ((Math.abs(num) / 1000000000).toFixed(1))}B`;
    if (Math.abs(num) > 999999) return `${Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(1))}M`;
    if (Math.abs(num) > 999) return `${Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1))}K`;
    return `${Math.sign(num) * ((Math.abs(num)).toFixed(1))}`;
  }
  const { total } = donationStat;
  const achieved = Math.round(total.amount / goal * 100);
  const style = `linear-gradient(to right, rgb(85,190,33,1) ${achieved}%, rgb(223, 228, 234,0.5) ${achieved}%)`;

  return (
    <>
      <div
        id="carousel-mobile-hide2"
        className="container-fluid rowbox-bg-2 pb-5"
      >
        <div className="row justify-content-around " id="counter">
          <div className="col-lg-1 col-md-0  mt-4 pt-2" />
          <div className="col-lg-2 col-md-4  mt-4 pt-2 ">
            <div className="counter-box">
              <h3 className="counter-head title-dark ">
                Thank you to our Donors.
              </h3>
            </div>
          </div>
          <div className="col-md-1 col-1 mt-4 pt-2" />
          <div className="col-md-2 col-6 mt-4 pt-2 ">
            <div className="counter-box">
              <h6 className="counter-head title-fd ">Raised</h6>
              <h2 className="mb-0  title-dark mt-2">
                {' '}
                $
                {(total.amount * 1).toLocaleString()}
              </h2>
            </div>
          </div>
          <div className="col-md-1 col-1 mt-4 pt-2" />
          <div className="col-md-2 col-6 mt-4 pt-2">
            <div className="counter-box">
              <h6 className="counter-head title-fd ">Donors</h6>
              <h2 className="mb-0  title-dark mt-2">
                {(total.donors * 1).toLocaleString()}
                {' '}
              </h2>
            </div>
          </div>
          <div className="col-md-2 col-6 mt-4 pt-2">
            <div className="counter-box">
              <h6 className="counter-head title-fd ">Goal</h6>
              <h2 className="mb-0  title-dark mt-2">{kBMFormatter(goal)}</h2>
            </div>
          </div>
          <div className="col-md-1 col-6 mt-4 pt-2" />
        </div>
      </div>
      <div id="carousel-mobile-show2" className="container-fluid rowbox-bg " style={{ background: style, opacity: 1 }}>
        <div className="row text-center">
          <div className="col-sm-1" />
          <div className="col-sm-10">
            <div
              id="carouselExampleControls2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {}
                <div className="carousel-item active">
                  <div className="counter-box ">
                    <h6 className="counter-head title-dark font-sz-txt ">
                      Raised
                    </h6>
                    <h2 className="mb-0  title-dark mt-2 font-sz-doll">
                      $
                      {(total.amount * 1).toLocaleString()}
                    </h2>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="counter-box">
                    <h6 className="counter-head title-dark font-sz-txt ">
                      Donors
                    </h6>
                    <h2 className="mb-0  title-dark mt-2 font-sz-doll">
                      {(total.donors * 1).toLocaleString()}
                    </h2>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="counter-box">
                    <h6 className="counter-head title-dark font-sz-txt">
                      Goal
                    </h6>
                    <h2 className="mb-0  title-dark mt-2 font-sz-doll">{kBMFormatter(goal)}</h2>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls2"
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
                href="#carouselExampleControls2"
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
    </>
  );
};

export default GoalContent;
