import React from 'react';

const Supercharge = ({ state, handleClick }) => {
  if (state === false) {
    return (
      <div
        id="box-clr-chng6"
        className="card web-box-background   border-0"
        style={{
          backgroundColor: 'rgba(241, 242, 246, 0.4)'
        }}
        onClick={() => { handleClick(); }}
      >
        <div className="card-body pb-0">
          <ul className="list-unstyled text-muted">
            <li
              className="pb-3 list-text-color1"
              id="doble-color6"
              style={{
                color: 'rgb(33, 29, 40)'
              }}
            >
              <img
                id="select-img6"
                src="/images/gososhul/open-bolt.png"
                width={20}
              />
              <span className="dou2"> Supercharge It!</span>
            </li>
            <li className="mbottom-1">
              {' '}
              <label
                htmlFor="Supercharge2"
                className="container-radiobtn list-text-color2"
                id="doble-para-color6"
                style={{
                  color: 'rgb(33, 29, 40)'
                }}
              >
                Double your donation to divide among the other 354 shuls?
                <input
                  type="checkbox"
                  checked={state}
                  id="select-box6"
                  defaultValue="Supercharge2"
                  name="radio2"
                />
                <span className="checkmark" />
              </label>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  if (state === true) {
    return (
      <div
        className="card web-box-background   border-0"
        style={{
          backgroundColor: 'rgb(85, 190, 33)'
        }}
        onClick={() => { handleClick(); }}
      >
        <div className="card-body pb-0">
          <ul className="list-unstyled text-muted">
            <li
              className="pb-3 list-text-color1"
              id="doble-color6"
              style={{
                color: 'rgb(255, 255, 255)'
              }}
            >
              <img
                id="select-img6"
                src="/images/gososhul/light-bolt.png"
                width={20}
              />
              <span className="dou2"> Supercharge It!</span>
            </li>
            <li className="mbottom-1">
              {' '}
              <label
                htmlFor="Supercharge2"
                className="container-radiobtn list-text-color2"
                id="doble-para-color6"
                style={{
                  color: 'rgb(255, 255, 255)'
                }}
              >
                Double your donation to divide among the other 354 shuls?
                <input
                  type="checkbox"
                  checked={state}
                  id="select-box6"
                  defaultValue="Supercharge2"
                  name="radio2"
                />
                <span className="checkmark" />
              </label>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Supercharge;
