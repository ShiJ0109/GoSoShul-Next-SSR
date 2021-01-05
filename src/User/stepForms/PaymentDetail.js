import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Warning from 'components/Typography/Warning';
// user Requests
import * as userRequests from 'services/userRequests';

const PaymentDetail = ({
  handleStepChange, handleBack, donateProps, handleDonate, shulLists
}) => {
  // set the initial state from donateProps

  // change donate state if amount, double, superCharge state changed.
  const [donate, setDonate] = useState(donateProps.donate);

  return (
    <Formik
      initialValues={donate}
      validationSchema={
          Yup.object().shape({
            cc_number: Yup.string().max(255).required('This field is required'),
            cc_exp_date: Yup.string().max(255).required('This field is required'),
            cc_cvv: Yup.string().max(255).required('This field is required'),
            message: Yup.string().max(255).required('This field is required'),
          })
    }
      onSubmit={(values) => {
        handleDonate({ ...donateProps, donate: values });
        userRequests.PostDonate({ ...donateProps, donate: values })
          .then((ret) => {
            if (ret.stat === 'success') handleStepChange('Tag');
            else{ window.alert(ret.error.response.data.status);}
          });
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <div
            className="multisteps-form__panel js-active"
            data-animation="scaleIn"
          >
            <div className="multisteps-form__content">
              <div className="row pl-4 step-forms3-Rpadding-mobileview">
                <h6>{JSON.stringify(values)}</h6>
                <h6>{values.shulIdYup}</h6>
                <h6>{JSON.stringify(donateProps)}</h6>
                <div className="col-lg-6  col-md-6  col-sm-6">
                  <div className="form-row">
                    <h5 className=" fnt-2 pr-5">Payment Details</h5>
                    <div className="form-group ">
                      <input
                        type="radio"
                        defaultChecked
                        defaultValue="creditcard"
                        name="paymentMode"
                        id="creditcard"
                      />
                      <label
                        htmlFor="creditcard"
                        className="radiobtntyp"
                      >
                        <img src="/images/gososhul/cc2.png" id="cc1" />
                    Credit Card
                      </label>
                    </div>
                    <div className="form-group pr-2">
                      <input
                        type="radio"
                        defaultValue="instantcash"
                        name="paymentMode"
                        id="instantcheck"
                      />
                      <label
                        htmlFor="instantcheck"
                        className="radiobtntyp"
                      >
                        <img src="/images/gososhul/ic1.png" id="ic1" />
                    Instant Check
                      </label>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6 pr-3">
                      <label className="lab-colr">First Name</label>
                      <input
                        name="name1"
                        id="name1"
                        type="text"
                        className="chng-frnd-fd "
                        placeholder="Enter First Name"
                      />
                    </div>
                    <div className="form-group col-md-6 pr-3">
                      <label className="lab-colr">Last Name</label>
                      <input
                        name="name2"
                        id="name2"
                        type="text"
                        className="chng-frnd-fd "
                        placeholder="Enter Last Name"
                      />
                    </div>
                  </div>
                  <div className="form-group pr-3">
                    <label className="lab-colr">
                      Credit Card Number
                    </label>
                    <input
                      name="cc_number"
                      id="mail"
                      type="text"
                      className="chng-frnd-fd"
                      placeholder="xxxxxxxxxxxxxxxxxxx"
                      value={values.cc_number}
                      onChange={handleChange}
                    />
                    <input
                      name="email"
                      id="mail"
                      type="text"
                      className="cvv-input"
                      placeholder
                    />
                    <Warning>{touched.cc_number && errors.cc_number}</Warning>
                  </div>
                  <div className="form-row pb-1">
                    <div className="form-group col-md-6 pr-3">
                      <label className="lab-colr">Exp. Date</label>
                      <input
                        name="cc_exp_date"
                        id="name3"
                        type="text"
                        className="chng-frnd-fd "
                        placeholder="_ _ /_ _ "
                        value={values.cc_exp_date}
                        onChange={handleChange}
                      />
                      <Warning>{touched.cc_exp_date && errors.cc_exp_date}</Warning>
                    </div>
                    <div className="form-group col-md-6 pr-3">
                      <label className="lab-colr">CVV</label>
                      <input
                        name="cc_cvv"
                        id="name4"
                        type="text"
                        className="chng-frnd-fd "
                        placeholder={123}
                        value={values.cc_cvv}
                        onChange={handleChange}
                      />
                      <Warning>{touched.cc_cvv && errors.cc_cvv}</Warning>
                    </div>
                  </div>
                  <div className="form-group pt-4">
                    <div className="custom-control custom-checkbox">
                      {
                        (values.charge_fee === '1')
                          ? (
                            <input
                              type="checkbox"
                              name="charge_fee"
                              className="custom-control-input"
                              checked
                              onClick={() => {
                                handleChange('charge_fee')('0');
                              }}
                              id="customCheck1"
                            />
                          ) : (
                            <input
                              type="checkbox"
                              name="charge_fee"
                              className="custom-control-input"
                              checked={(values.charge_fee === '1')}
                              onClick={() => {
                                handleChange('charge_fee')('1');
                              }}
                              id="customCheck1"
                            />
                          )
                      }
                      <label
                        className="custom-control-label list-text-color2 txt-chng5"
                        htmlFor="customCheck1"
                      >
                        Yes, charge me the fees of $3.95 so the shul
                        can keep it all!
                      </label>
                    </div>
                    {}
                  </div>
                </div>
                {}
                <div className="col-lg-6  col-md-6  col-sm-6  form3-paddingall ">
                  <div className="d-flex mb-2 justify-content-between">
                    <h4 className="sum-text">Summary</h4>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-center step-form-price-table table-padding mb-2">
                      <tbody>
                        <tr id="row-1">
                          <td className="tb-cont-size border-0">
                            Donation
                            {' '}
                            <span>(young israel of cherry hill)</span>
                          </td>
                          <td className=" tb-wg border-0">
                            {`$${donate.amount}`}
                            {' '}
                          </td>
                          <td className="border-0">
                            <span>
                              <button
                                type="button"
                                className="bg-transparent stepform-table-cross-button"
                              >
                                <i
                                  className="fa fa-times-circle"
                                  aria-hidden="true"
                                  style={{
                                    fontSize: '22px',
                                    color: 'red'
                                  }}
                                />
                              </button>
                            </span>
                          </td>
                        </tr>
                        {
                           (donate.double === '1')
                             ? (
                               <tr id="row-2">
                                 <td className="tb-cont-size border-0">
                                   Double it
                                 </td>
                                 <td className=" tb-wg border-0">$180</td>
                                 <td className="border-0">
                                   <span>
                                     <button
                                       type="button"
                                       className="bg-transparent  stepform-table-cross-button"
                                     >
                                       <i
                                         className="fa fa-times-circle"
                                         aria-hidden="true"
                                         style={{
                                           fontSize: '22px',
                                           color: 'red'
                                         }}
                                       />
                                     </button>
                                   </span>
                                 </td>
                               </tr>
                             ) : ''
                           }
                        {
                            (donate.supercharge === '1')
                              ? (
                                <tr id="row-2">
                                  <td className="tb-cont-size border-0">
                                    Double it
                                    <span>(all shuls)</span>
                                  </td>
                                  <td className=" tb-wg border-0">$180</td>
                                  <td className="border-0">
                                    <span>
                                      <button
                                        type="button"
                                        className="bg-transparent  stepform-table-cross-button"
                                      >
                                        <i
                                          className="fa fa-times-circle"
                                          aria-hidden="true"
                                          style={{
                                            fontSize: '22px',
                                            color: 'red'
                                          }}
                                        />
                                      </button>
                                    </span>
                                  </td>
                                </tr>
                              ) : ''
                            }
                        <tr id="row-3">
                          <td className="tb-cont-size border-0">
                            Fees
                          </td>
                          <td className=" tb-wg  border-0">$9.95</td>
                          <td className="border-0">
                            <span>
                              <button
                                type="button"
                                className="bg-transparent stepform-table-cross-button"
                              >
                                <i
                                  className="fa fa-times-circle"
                                  aria-hidden="true"
                                  style={{
                                    fontSize: '22px',
                                    color: 'red'
                                  }}
                                />
                              </button>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="tb-cont-size ">Total</td>
                          <td className=" tb-wg  ">$1189.95</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="form-group position-relative mb-0 mob-summyhonorof11">
                    <label className="honor-text">In Honor Of</label>
                    <textarea
                      name="message"
                      id="comments"
                      className="textbox-area-filed"
                      placeholder="Write a short message"
                      defaultValue=""
                      value={values.message}
                      onChange={handleChange}
                    />
                    <Warning>{touched.message && errors.message}</Warning>
                  </div>
                  <div className="form-check form-check-inline mob-checkbox112">
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="addnewaddress"
                        />
                        <label
                          className="custom-control-label list-text-color2 txt-chng5"
                          htmlFor="addnewaddress"
                        >
                          Keep Me Anonymous
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {}
              </div>
              {}
              <div className="button-row d-flex col-12 form3-donatstepthree">
                <button
                  id="go-backprev-btn"
                  className="btn js-btn-prev "
                  type="button"
                  onClick={() => {
                    handleBack();
                  }}
                >
                  <i
                    className="fa fa-caret-left  back-clr-icon"
                    aria-hidden="true"
                  />
             Go Back
                </button>
                <button
                  className="btn nxtbtn-step-green ml-auto js-btn-next "
                  type="button"
                  title="Next"
                  onClick={() => {
                    handleSubmit();
                  }}
                  style={
              {
                color: 'rgb(33, 29, 40)',
                border: '3px solid rgb(85, 190, 33)'
              }
            }
                >
                  Next
                </button>
                <hr
                  className="hr-right-line"
                  style={
            {
              border: '2px solid rgb(85, 190, 33)'
            }
          }
                />
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>

  );
};

export default PaymentDetail;
