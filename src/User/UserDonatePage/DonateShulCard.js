import React, { useState, useEffect } from 'react';
import UserDonateModal from 'components/Modal/UserDonateModal/UserDonateModal';
import * as utils from 'utils/common';

const DonateShulCard = ({ shulElement, index }) => {
  const [donateModalStat, setDonatModalStat] = useState(false);
  const [hover, setHover] = useState(false);
  const achieved = Math.floor(shulElement.donation_amount / shulElement.goal * 100);
  // const achieved = 50;
  const [counter, setCounter] = useState(0);
  let delay = achieved ? Math.floor(2400 / achieved) : 2400;
  if (achieved < 10) delay = 200;

  useEffect(() => {
    let interval;
    if (hover && achieved) {
      interval = setInterval(() => {
        setCounter((counter) => ((counter < achieved) ? counter + 1 : counter));
      }, delay);
      return () => {
        clearInterval(interval);
      };
    }

    setCounter(0);
  }, [hover]);

  return (
    <div className="col-lg-4 col-md-4 col-sm-12 " key={index}>
      {
            donateModalStat && <UserDonateModal />
          }
      <div id="box-pro-hover1" onMouseEnter={() => { setHover(true); }} onMouseLeave={() => { setHover(false); }}>
        <div className="progress-box progressBox-Mt-5">
          <div className="progress" id="progressbar-hover1">
            {
            hover
              ? (
                <div className="progress-bar position-relative bg-bar-color" style={{ width: `${achieved}%` }}>
                  <div className="progress-value d-block text-muted h6">
                    {counter}
                    %
                  </div>
                  {' '}
                </div>
              ) : ''
          }
          </div>
        </div>
        {}
        <div className="card web-index2-background   border-0">
          <div className="card-body card-boxmargin-b">
            <img src={shulElement.logo_link} className="imglog-width" />
            <ul className="list-unstyled d-flex justify-content-start  mt-3 pt-4 mb-0">
              <li className="web-font-text">
                Raised
                <span className="d-block">
                  {`$${utils.CommaFomatter(shulElement.donation_amount)}`}
                  {' '}
                </span>
              </li>
              <li className="ml-2 web-font-text-1">
                Goal
                {' '}
                <span className="d-block">{utils.kBMFormatter(shulElement.goal)}</span>
              </li>
            </ul>
            <div className="row mt-3 ">
              <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                <button className="btn ViewButton">View</button>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6  text-center ">
                <button
                  className="btn   shul-box-donatebtn2 shul-box-donatebtn2"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  data-backdrop="static"
                  data-keyboard="false"
                  onClick={(e) => { setDonatModalStat(true); }}
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateShulCard;
