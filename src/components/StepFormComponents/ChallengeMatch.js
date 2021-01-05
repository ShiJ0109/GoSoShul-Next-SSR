import React from 'react';

const ChallengeMatch = ({ state, handleClick }) => {
  if (state === false) {
    return (
      <div
        id="challeng-box"
        className="card web-box2-background"
        style={{
          border: 'none'
        }}
        onClick={() => { handleClick(); }}
      >
        <div className="card-body pb-0">
          <ul className="list-unstyled text-muted">
            <li className="list-chalng-color1">
              <img src="/images/gososhul/hand1.png" width={32} />
              <span className="dou1"> Challenge Match</span>
            </li>
            <li className="mbottom-1">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={state}
                  defaultValue="customCheck3"
                  id="customCheck3"
                />
                <span
                  className="custom-control-label list-text-color2 txt-chng5 paddingl-onchecked-tym"
                  htmlFor="customCheck3"
                >
                  Increase donation by 150% by challenging your friends to match
                  or beat your donation. Just a friendly challenge for charity!
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  if (state === true) {
    return (
      <div
        id="challeng-box"
        className="card web-box2-background"
        style={{
          border: '1px solid rgb(85, 190, 33)'
        }}
        onClick={() => { handleClick(); }}
      >
        <div className="card-body pb-0">
          <ul className="list-unstyled text-muted">
            <li className="list-chalng-color1">
              <img src="/images/gososhul/hand1.png" width={32} />
              <span className="dou1"> Challenge Match</span>
            </li>
            <li className="mbottom-1">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  checked={state}
                  className="custom-control-input"
                  defaultValue="customCheck3"
                  id="customCheck3"
                />
                <span
                  className="custom-control-label list-text-color2 txt-chng5 paddingl-onchecked-tym"
                  htmlFor="customCheck3"
                >
                  Increase donation by 150% by challenging your friends to match
                  or beat your donation. Just a friendly challenge for charity!
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default ChallengeMatch;
