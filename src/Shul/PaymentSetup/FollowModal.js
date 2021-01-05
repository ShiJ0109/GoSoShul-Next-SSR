import React from "react";

class FollowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10">
          <div className="follow-instruction-window payment-step-text" href="#">
            <span id="close-popup">x</span>
            <h5>Step 1</h5>
            <h3>Sign Into Stripe</h3>
            <p className="text pt-3 pb-4">
              Navigate to{" "}
              <a
                href="https://dashboard.stripe.com/login"
                target="_blank"
                className="href-clr-grn"
              >
                https://dashboard.stripe.com/login
              </a>{" "}
              and sign in to the Stripe account that is connected to your
              Gososhul account.
            </p>
            <div className>
              <h5>Step 2</h5>
              <h3>Enable ACH</h3>
              <p className="text pt-3 pb-3">
                Go to this page:{" "}
                <a
                  href="https://dashboard.stripe.com/login"
                  target="_blank"
                  className="href-clr-grn"
                >
                  https://stripe.com/docs/ach
                </a>
                . Once on that page, you should see a blue button labeled
                "Enable ACH":
              </p>
              <div className>
                <img src="/dist/img/pop-img1.png" />
              </div>
              <p className="pt-5 pb-3 col-md-11">
                Once you click the "Enable ACH" button, you are ready to accept
                ACH donations! If successful, that page should update to a green
                button labeled "ACH Activated", as shown below:
              </p>
              <div className>
                <img src="/dist/img/pop-img1.png" />
              </div>
              <p className="pt-5 pb-3 col-md-11">
                If you have previously enabled ACH, you may not see the section
                with the button. This means that you are already set to accept
                ACH donations, and no further action is required.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FollowModal;
