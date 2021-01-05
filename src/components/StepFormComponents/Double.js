import React from 'react';

const Double = ({ state, handleClick }) => {
  if (state === false) {
    return (
      <div
        id="box-clr-chng5"
        className="card web-box-background   border-0 mb-4 "
        style={{
          backgroundColor: 'rgba(241, 242, 246, 0.4)'
        }}
        onClick={() => { handleClick(); }}
      >
        <div className="card-body pb-0">
          <ul className="list-unstyled text-muted">
            <li
              className="pb-3 list-text-color1"
              id="doble-color5"
              style={{
                color: 'rgb(33, 29, 40)'
              }}
            >
              <img
                id="select-img5"
                src="/images/gososhul/stp11.png"
                width={32}
              />
              {' '}
              <span className="dou1">Double It!</span>
            </li>
            <li className="mbottom-1">
              {' '}
              <label
                htmlFor="double it 2"
                className="container-radiobtn list-text-color2"
                id="doble-para-color5"
                style={{
                  color: 'rgb(33, 29, 40)'
                }}
              >
                Double your donation to divide among the other 354 shuls?
                <input
                  type="checkbox"
                  id="select-box5"
                  checked={state}
                  defaultValue="double it 2"
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
        className="card web-box-background   border-0 mb-4 "
        style={{
          backgroundColor: 'rgb(85, 190, 33)'
        }}
        onClick={() => { handleClick(); }}
      >
        <div className="card-body pb-0">
          <ul className="list-unstyled text-muted">
            <li
              className="pb-3 list-text-color1"
              id="doble-color5"
              style={{
                color: 'rgb(255, 255, 255)'
              }}
            >
              <img
                id="select-img5"
                src="/images/gososhul/stp12.png"
                width={32}
              />
              {' '}
              <span className="dou1">Double It!</span>
            </li>
            <li className="mbottom-1">
              {' '}
              <label
                htmlFor="double it 2"
                className="container-radiobtn list-text-color2"
                id="doble-para-color5"
                style={{
                  color: 'rgb(255, 255, 255)'
                }}
              >
                Double your donation to divide among the other 354 shuls?
                <input
                  type="checkbox"
                  checked={state}
                  id="select-box5"
                  defaultValue="double it 2"
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

export default Double;
