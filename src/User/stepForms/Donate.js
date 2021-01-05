import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Double, Supercharge } from 'components/StepFormComponents';
import Warning from 'components/Typography/Warning';

const Donate = ({
  refData, shulLists, donateProps,tagProps, handleStepChange, handleDonate, handleTag
}) => {
  // set the initial state from donateProps
  const [donate, setDonate] = useState(donateProps.donate);
  const [shulId, setShulId] = useState(donateProps.shul_id);

  // change donate state if amount, double, superCharge state changed.

  return (
    <Formik
      initialValues={{
        shulIdYup: shulId,
        subject: donate.amount,
      }}
      validationSchema={
        (refData === undefined)
          ? (Yup.object().shape({
            shulIdYup: Yup.string().required('Select Shul'),
            subject: Yup.string().max(255).required('This field is required'),
          }))
          : (Yup.object().shape({
            subject: Yup.string().max(255).required('This field is required'),
          }))
    }
      onSubmit={(values) => {
        if (refData === undefined) {
          handleDonate({ ...donateProps, shul_id: shulId, donate });
          handleTag({...tagProps, shul_id: shulId});
        }
        else handleDonate({ ...donateProps, donate });

        handleStepChange('PaymentDetail');
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
              <div className="row pl-4 step-forms-Rpadding-mobileview">
                {/* debug mode */}
                {/* <h6>{JSON.stringify(donate)}</h6>
                <h6>{JSON.stringify(refData)}</h6>
                <h6>{values.shulIdYup}</h6>
                <h6>{JSON.stringify(donateProps)}</h6> */}
                <div className="col-lg-7 col-md-7 col-sm-7">
                  {
              (refData === undefined)
                ? (
                  <div className="title-heading ">
                    <h5 className=" fnt-1 ">
                      Select A Shul Campaign
                    </h5>
                    <p className="para-fnt1 pb-2">
                      This shul will be the one you are campaigning
                      for to help meet
                      <br />
                      {' '}
                      their goal.
                    </p>
                    <div className="form-group col-md-12 col-sm-12 form1-paddingall">
                      <select
                        name="shulIdYup"
                        id="inputState"
                        className="form-control select-input-drop"
                        value={values.shulIdYup}
                        onBlur={handleBlur}
                        onChange={(e) => {
                          e.preventDefault();
                          setShulId(e.target.value);
                          values.shulIdYup = e.target.value;
                        }}
                      >
                        <option key="default" value="">Select Shul</option>
                        {
                      shulLists.map((shulData) => (
                        <option
                          key={shulData.id}
                          value={shulData.id}
                        >
                          {shulData.name}
                        </option>
                      ))
                      }
                      </select>
                      <Warning>{touched.shulIdYup && errors.shulIdYup}</Warning>
                    </div>
                  </div>
                )
                : (
                  <div className="title-heading ">
                    <h5 className=" fnt-1 ">
                      Join
                      {' '}
                      {refData.referrer_first_name}
                      {' '}
                      and Donate
                    </h5>
                    <p className="para-fnt1 pb-3">
                      Remember, the goal is to donate to the campaign
                      you’re tagged into to give it that positive
                      reach. You will have the opportunity to donate
                      to all the other shuls as well.
                    </p>
                  </div>
                )

            }
                  {(() => {
                    if (refData === undefined) return '';
                    switch (refData.ref_option) {
                      case '2':

                        return (
                          <div className="row mt-4">
                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                              <div className="media pb-3 ">
                                <div className=" mr-2">
                                  <img src="/images/gososhul/step1.png" />
                                </div>
                                <div className="para-fnt2">
                                  <p className="title">
                                    {refData.referrer_first_name}
                                    {' '}
                                    pledged to match your give!
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <div className="media pb-3 ">
                                <div className="  mr-2">
                                  <img src="/images/gososhul/step2.png" />
                                </div>
                                <div className="para-fnt2">
                                  <p className="title ">
                                    {refData.referrer_last_name}
                                    ,
                                    {refData.referrer_first_name}
                                    {' '}
                                    challenged you to match or beat his $500
                                    donation.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                        );

                      case '3':

                        return (
                          <div className="row mt-4">
                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                              <div className="media pb-3 ">
                                <div className=" mr-2">
                                  <img src="/images/gososhul/step1.png" />
                                </div>
                                <div className="para-fnt2">
                                  <p className="title">
                                    {refData.referrer_first_name}
                                    {' '}
                                    pledged to double your give!
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <div className="media pb-3 ">
                                <div className="  mr-2">
                                  <img src="/images/gososhul/step2.png" />
                                </div>
                                <div className="para-fnt2">
                                  <p className="title ">
                                    {refData.referrer_last_name}
                                    ,
                                    {refData.referrer_first_name}
                                    {' '}
                                    challenged you to double his $500
                                    donation.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );

                      default:

                        return (
                          ''
                        );
                    }
                  })()}
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group position-relative pb-2">
                        <i
                          className="fa fa-usd icons-dollr"
                          aria-hidden="true"
                        />
                        <input
                          name="subject"
                          id="doller-amnt1"
                          className="chng-step-field"
                          placeholder="Enter Your Donation Amount"
                          value={values.subject}
                          onBlur={handleBlur}
                          onChange={(e) => {
                            values.subject = e.target.value;
                            setDonate({
                              ...donate,
                              amount: e.target.value
                            });
                          }}
                        />
                        <Warning>{touched.subject && errors.subject}</Warning>
                      </div>
                      <div className="preset-amt-text">
                        <span>Or Select a Preset Amount</span>
                        <button
                          type="button"
                          className="btn btn-pills   amont-btn amount-100-rmargin  "
                          value="$100"
                          onClick={() => {
                            setDonate({
                              ...donate,
                              amount: 100
                            });
                            values.subject = 100;
                          }}
                        >
                          +$100
                        </button>
                        <button
                          type="button"
                          className="btn btn-pills   amont-btn "
                          value="$200"
                          onClick={() => {
                            setDonate({
                              ...donate,
                              amount: 200
                            });
                            values.subject = 200;
                          }}
                        >
                          +$200
                        </button>
                        <button
                          type="button"
                          className="btn btn-pills   amont-btn  "
                          value="$500"
                          onClick={() => {
                            setDonate({
                              ...donate,
                              amount: 500
                            });
                            values.subject = 500;
                          }}
                        >
                          +$500
                        </button>
                        <button
                          type="button"
                          className="btn btn-pills  amont-1000-btn"
                          value="$1000"
                          onClick={() => {
                            setDonate({
                              ...donate,
                              amount: 1000
                            });
                            values.subject = 1000;
                          }}
                        >
                          +$1000
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
                {}
                <div className="col-lg-5 col-md-5 col-sm-5">
                  <Double
                    state={(donate.double === '1')}
                    handleClick={() => {
                      setDonate({
                        ...donate,
                        double: (donate.double === '1')
                          ? '0' : '1'
                      });
                    }}
                  />
                  <Supercharge
                    state={(donate.supercharge === '1')}
                    handleClick={() => {
                      setDonate({
                        ...donate,
                        supercharge: (donate.supercharge === '1')
                          ? '0' : '1',
                      });
                    }}
                  />
                </div>
                {}
              </div>
              <div className="button-row d-flex nextBox-rowpadding">
                <button
                  className="btn nxtbtn-step-green ml-auto "
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  title="Next"
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
            {}
          </div>
        </form>
      )}
    </Formik>

  );
};

export default Donate;
