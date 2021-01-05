import React from "react";
import FollowModal from "./FollowModal";

class PaymentSetup extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        {}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2"></div>
            {}
          </div>
          {}
        </div>
        {}
        {}
        <div className="container ">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-9">
              <div className="payment-text1">
                <p>
                  We use Stripe and Plaid as the backbone to safe and secure
                  instant payments. You must follow the instructions below to
                  set up your account to accept and control your funds. It only
                  takes a few minutes and you’ll be all set.
                </p>
              </div>
            </div>
          </div>
          <div className="data-replaceble">
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-9 ">
                <div className="payment-step-text pt-4">
                  <h5>Step 1</h5>
                  <h4>Connect Your Stripe Account</h4>
                  <p>
                    Whether you already have a stripe account or not, this link
                    will walk you through connecting with Gososhul to connect to
                    your new or existing Stripe account so we can process
                    payments and transfer campaign funds to your account.{" "}
                  </p>
                  <div className>
                    <button
                      className="btn greenbtn green1 payment-btn-width1 waves-effect waves-light"
                      type="submit"
                    >
                      Connect Now
                    </button>
                  </div>
                </div>
                <div className="payment-step-text pt-4">
                  <h5>Step 2</h5>
                  <h4>Activate Non-Profit Rates</h4>
                  <p>
                    We detected that your account is not yet approved for not
                    for profit rates.In order to get the lowest rates and keep
                    the most funds, follow these simple instructions and you’ll
                    be approved within 24 hours.{" "}
                  </p>
                  <div className>
                    <button
                      className="btn greenbtn green1  col-md-6 waves-effect waves-light"
                      type="submit"
                    >
                      Send an email to: support@stripe.com
                    </button>
                    <span className="side-text-top">
                      Attach your 501c3 letter and tax id
                    </span>
                  </div>
                </div>
                <div className="payment-step-text pt-4">
                  <h5>Step 3</h5>
                  <h4>Activate Instant Check Payments</h4>
                  <p>
                    Follow these instructions to activate instant check payments
                    from your donors bank account, safely and securely. Fees are
                    1% lower on ACH payments.{" "}
                  </p>
                  <div className=" ">
                    <button
                      id="follow-instruction"
                      className="btn greenbtn green1 col-md-3 waves-effect waves-light"
                      type="submit"
                    >
                      Follow Instruction
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4 mt-5">
              <div className="col-md-1" />
              <div className="col-md-10">
                <div className="card">
                  <div className="card-body">
                    <div className="row pt-4">
                      <div className="col-md-1">
                        <img
                          src="/dist/img/not-arrow.png"
                          width={24}
                          className
                        />
                      </div>
                      <div className="col-md-10 pl-0">
                        <h4 className="application-txt">Application Charges</h4>
                        <p className="app-charg-para1 mb-1">
                          These are the total charges all in with credit card
                          processing fees that will be deducted per transaction.
                          And we’ve built in the options for donors to opt into
                          covering the fees.{" "}
                        </p>
                        <p className="app-charg-para2 mb-0">
                          Instant Check - 2.9% + .30 cents
                        </p>
                        <p className="app-charg-para2 ">
                          Credit/Debit Cards* - 3.9% + .30 cents
                        </p>
                        <p className="app-charg-para1 ">
                          *If you enabled non profit rates as described above.
                          If not there is an additional .7%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Container">
          <FollowModal></FollowModal>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentSetup;
