import React from "react";

class AmountSubPage extends React.Component {
  render() {
    return (
      <div className="modal-body">
        <div className>
          <div className="title-heading ">
            <h3 className=" fnt-1 ">Donating To Young Israel of Cherry Hill</h3>
            <p className="para-fnt1 pb-3 col-md-10">
              The goal is to donate to the campaign you’re tagged into to give
              it that positive reach.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <div className="form-group position-relative pb-2">
                <i className="fa fa-usd icons-dollr" aria-hidden="true" />
                <input
                  name="subject"
                  id="doller-amnt2"
                  className="chng-step-field"
                  placeholder="Enter Your Donation Amount"
                />
              </div>
              <div className="preset-amt-text ">
                <span>Or Select a Preset Amount</span>
                <button
                  type="button"
                  className="btn btn-pills   amont-btn amount-100-rmargin  "
                  value={100}
                  onclick
                >
                  +$100
                </button>
                <button
                  type="button"
                  className="btn btn-pills   amont-btn "
                  value={200}
                  onclick
                >
                  +$200
                </button>
                <button
                  type="button"
                  className="btn btn-pills   amont-btn  "
                  value={500}
                  onclick
                >
                  +$500
                </button>
                <button
                  type="button"
                  className="btn btn-pills   amont-1000-btn  "
                  value={1000}
                  onclick
                >
                  +$1000
                </button>
              </div>
            </div>
          </div>
          <div className="row modalPageDouleboxMarginT">
            <div className="col-lg-6 col-md-6 col-sm-5">
              <div
                onclick
                id="box-clr-chng5"
                className="card web-box-background   border-0 mb-4 "
              >
                <div className="card-body pb-0">
                  <ul className="list-unstyled text-muted">
                    <li className="pb-3 list-text-color1" id="doble-color5">
                      <img
                        id="select-img5"
                        src="/dist/img/stp11.png"
                        width={32}
                      />{" "}
                      <span className="dou1">Double It!</span>
                    </li>
                    <li className="mbottom-1">
                      <label
                        htmlFor="double it 2"
                        className="container-radiobtn list-text-color2"
                        id="doble-para-color5"
                      >
                        Double your donation to divide among the other 354
                        shuls?
                        <input
                          type="checkbox"
                          onclick
                          id="select-box5"
                          defaultValue="double it 2"
                          name="radio2"
                        />
                        <span className="checkmark" />{" "}
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-5">
              <div onclick>
                <div className="card-body pb-0">
                  <ul className="list-unstyled text-muted">
                    <li className="pb-3 list-text-color1" id="doble-color6">
                      <img
                        id="select-img6"
                        src="/dist/img/open-bolt.png"
                        width={20}
                      />
                      <span className="dou2"> Supercharge It!</span>
                    </li>
                    <li className="mbottom-1">
                      <label
                        htmlFor="Supercharge2"
                        className="container-radiobtn list-text-color2"
                        id="doble-para-color6"
                      >
                        Double your donation to divide among the other 354
                        shuls?
                        <input
                          type="checkbox"
                          onclick
                          id="select-box6"
                          defaultValue="Supercharge2"
                          name="radio2"
                        />{" "}
                        <span className="checkmark" />{" "}
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              id="donate-modalpage2"
              onclick="goToNextModalPage()"
              className="btn nxtbtn-step-green"
              type="button"
              title="Next"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AmountSubPage;
