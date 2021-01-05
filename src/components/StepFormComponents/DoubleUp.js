import React from "react";

const DoubleUp =({state, handleClick})=> {
  if(state === false) {
    return (
      <div
        id="doubleUp-box"
        className="card web-box2-background   "
        style={{
          border: "none"
        }}
        onClick={() => { handleClick(); }}
      >
        <div className="card-body pb-0">
          <ul className="list-unstyled text-muted">
            <li className=" list-chalng-color1">
              <img src="/images/gososhul/stp11.png" width={32} />{" "}
              <span className="dou1">Double Up!</span>
            </li>
            <li className="mbottom-1">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  checked={state}
                  className="custom-control-input"
                  defaultValue="customCheck4"
                  id="customCheck4"
                />
                <span
                  htmlFor="customCheck4"
                  className="custom-control-label list-text-color2 txt-chng5 paddingl-onchecked-tym"
                >
                  Increase your friends donation by an average of 66% by letting
                  them know you’ll automatically match whatever they donate.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  if(state === true) {
    return (
      <div
        id="doubleUp-box"
        className="card web-box2-background   "
        style={{
          border: "none"
        }}
        onClick={() => { handleClick(); }}
      >
        <div className="card-body pb-0">
          <ul className="list-unstyled text-muted">
            <li className=" list-chalng-color1">
              <img src="/images/gososhul/stp11.png" width={32} />{" "}
              <span className="dou1">Double Up!</span>
            </li>
            <li className="mbottom-1">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  checked={state}
                  className="custom-control-input"
                  defaultValue="customCheck4"
                  id="customCheck4"
                />
                <span
                  htmlFor="customCheck4"
                  className="custom-control-label list-text-color2 txt-chng5 paddingl-onchecked-tym"
                >
                  Increase your friends donation by an average of 66% by letting
                  them know you’ll automatically match whatever they donate.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DoubleUp;
