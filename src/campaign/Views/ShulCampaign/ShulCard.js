import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as utils from 'utils/common';

const ShulCard = ({ shulElement }) => {
  const observed = useRef(null);
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const achieved = Math.floor(shulElement.raised / shulElement.goal * 100);
  const [counter, setCounter] = useState(0);
  const delay = achieved ? Math.floor(2400 / achieved) : 2400;

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
    <div id="box-pro-hover1" onMouseEnter={() => { setHover(true); }} onMouseLeave={() => { setHover(false); }}>
      <div className="progress-box mt-5">
        <div className="progress" id="pogressbar-hover">
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
      <div
        className="card web-index2-background   border-0"
        ref={observed}
        onClick={() => { typeof window !== 'undefined' && window.open(`/campaign/${shulElement.campaign_url}`, '', ''); }}
      >
        <div className="card-body card-boxmargin-b">
          <img
            src={shulElement.logo_link}
            className="imglog-width"
            style={{
              maxWidth: '160px',
              height: '100px',
              objectFit: 'contain'
            }}
          />
          <ul className="list-unstyled d-flex justify-content-start  mt-3 pt-4 mb-0">
            <li className="web-font-text">
              Raised
              <span className="d-block">
                $
                {utils.CommaFomatter(shulElement.raised)}
              </span>
            </li>
            <li className="ml-4 web-font-text-1">
              Goal
              {' '}
              <span className="d-block">
                $
                {utils.kBMFormatter(shulElement.goal)}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShulCard;
