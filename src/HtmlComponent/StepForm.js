import React from 'react';

const StepForm = () => {
  return (
    <div className="content">
      {}
      <div className="content__inner">
        <div className="container overflow-hidden">
          {}
          <div className="multisteps-form">
            <div className="row three-steptag-mob">
              <div className="col-lg-12 col-md-12 col-sm-12  d-flex justify-content-center ">
                <div className="multisteps-form__progress progress-w-br1">
                  <h5 className="multisteps-form__progress-btn special-btn progress-w-br2 ">
                    1.
                    <span> Donate</span>
                  </h5>
                  <h5
                    className="multisteps-form__progress-btn simple-line "
                    type="button"
                  />
                  <h5
                    className="multisteps-form__progress-btn simple-line"
                    type="button"
                  />
                  {}
                  <h5 className="multisteps-form__progress-btn special-btn progress-w-br3">
                    2.
                    <span> Tag</span>
                  </h5>
                  <h5 className="multisteps-form__progress-btn   simple-line special-btn-end progress-w-br4">
                    3.
                    <span> Share</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <form className="multisteps-form__form">
                  <div
                    className="multisteps-form__panel js-active"
                    data-animation="scaleIn"
                  >
                    <div className="multisteps-form__content">
                      <div className="row pl-4 step-forms-Rpadding-mobileview">
                        <div className="col-lg-7 col-md-7 col-sm-7">
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
                                id="inputState"
                                className="form-control select-input-drop"
                              >
                                <option selected>Select Shul</option>
                                <option>USA</option>
                                <option>UK</option>
                              </select>
                            </div>
                          </div>
                          {}
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
                                />
                              </div>
                              <div className="preset-amt-text">
                                <span>Or Select a Preset Amount</span>
                                <button
                                  type="button"
                                  className="btn btn-pills   amont-btn amount-100-rmargin  "
                                  value={100}
                                  onClick="foo('doller-amnt1',this.value)"
                                >
                                  +$100
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-pills   amont-btn "
                                  value={200}
                                  onClick="foo('doller-amnt1',this.value)"
                                >
                                  +$200
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-pills   amont-btn  "
                                  value={500}
                                  onClick="foo('doller-amnt1',this.value)"
                                >
                                  +$500
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-pills  amont-1000-btn"
                                  value={1000}
                                  onClick="foo('doller-amnt1',this.value)"
                                >
                                  +$1000
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {}
                        <div className="col-lg-5 col-md-5 col-sm-5 ">
                          <div
                            onClick="document.getElementById('select-box3').click()"
                            id="box-clr-chng3"
                            className="card web-box-background   border-0 mb-4 "
                          >
                            <div className="card-body pb-0">
                              <ul className="list-unstyled text-muted">
                                <li
                                  className="mb-3 list-text-color1"
                                  id="doble-color3"
                                >
                                  <img
                                    id="select-img3"
                                    src="images/gososhul/stp11.png"
                                    width={32}
                                  />
                                  {' '}
                                  <span className="dou1">Double It!</span>
                                </li>
                                <li className="mbottom-1">
                                  {' '}
                                  <label
                                    htmlFor="double it"
                                    className="container-radiobtn list-text-color2"
                                    id="doble-para-color3"
                                  >
                                    Double your donation to divide among the
                                    other 354 shuls?
                                    <input
                                      type="checkbox"
                                      onClick="checkToggle('#box-clr-chng3', 'select-box3','#select-img3','images/gososhul/stp12.png' ,'images/gososhul/stp11.png','#doble-color3','#doble-para-color3','select-box4','#doble-para-color4')"
                                      id="select-box3"
                                      defaultValue="double it"
                                      name="radio1"
                                    />
                                    <span className="checkmark" />
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            onClick="document.getElementById('select-box4').click()"
                            id="box-clr-chng4"
                            className="card web-box-background mb-3  border-0"
                          >
                            <div className="card-body pb-0">
                              <ul className="list-unstyled text-muted">
                                <li
                                  className="mb-3 list-text-color1"
                                  id="doble-color4"
                                >
                                  <img
                                    id="select-img4"
                                    src="images/gososhul/open-bolt.png"
                                    width={20}
                                  />
                                  <span className="dou2">
                                    {' '}
                                    Supercharge It!
                                  </span>
                                </li>
                                <li className="mbottom-1">
                                  {' '}
                                  <label
                                    htmlFor="Supercharge"
                                    className="container-radiobtn list-text-color2"
                                    id="doble-para-color4"
                                  >
                                    Double your donation to divide among the
                                    other 354 shuls?
                                    <input
                                      type="checkbox"
                                      onClick="checkToggle('#box-clr-chng4', 'select-box4','#select-img4','images/gososhul/light-bolt.png' ,'images/gososhul/open-bolt.png','#doble-color4','#doble-para-color4' ,'select-box3','#doble-para-color3')"
                                      id="select-box4"
                                      defaultValue="Supercharge"
                                      name="radio1"
                                    />
                                    <span className="checkmark" />
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {}
                      </div>
                      {}
                      <div className="button-row d-flex nextBox-rowpadding">
                        <button
                          className="btn nxtbtn-step-green ml-auto js-btn-next "
                          type="button"
                          title="Next"
                        >
                          Next
                        </button>
                        <hr className="hr-right-line" />
                      </div>
                    </div>
                  </div>
                  {}
                  <div
                    className="multisteps-form__panel"
                    data-animation="scaleIn"
                  >
                    <div className="multisteps-form__content">
                      <div className="row pl-4  step-forms-Rpadding-mobileview">
                        <div className="col-lg-7 col-md-7 col-sm-7">
                          <div className="title-heading ">
                            <h5 className=" fnt-1 ">Join Josh and Donate</h5>
                            <p className="para-fnt1 pb-3">
                              Remember, the goal is to donate to the campaign
                              you’re tagged into to give it that positive
                              reach. You will have the opportunity to donate
                              to all the other shuls as well.
                            </p>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                              <div className="media pb-3 ">
                                <div className=" mr-2">
                                  <img src="images/gososhul/step1.png" />
                                </div>
                                <div className="para-fnt2">
                                  <p className="title">
                                    Josh pledged to match your give!
                                  </p>
                                </div>
                              </div>
                            </div>
                            {}
                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                              <div className="media pb-3 ">
                                <div className="  mr-2">
                                  <img src="images/gososhul/step2.png" />
                                </div>
                                <div className="para-fnt2">
                                  <p className="title ">
                                    Sonik, Josh challenged you to match or
                                    beat his $500 donation.
                                  </p>
                                </div>
                              </div>
                            </div>
                            {}
                            <div className="col-lg-12 col-md-12 col-sm-12 ">
                              <div className="form-group position-relative pb-2">
                                <i
                                  className="fa fa-usd icons-dollr"
                                  aria-hidden="true"
                                />
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
                                  onClick="foo('doller-amnt2',this.value)"
                                >
                                  +$100
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-pills   amont-btn "
                                  value={200}
                                  onClick="foo('doller-amnt2',this.value)"
                                >
                                  +$200
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-pills   amont-btn  "
                                  value={500}
                                  onClick="foo('doller-amnt2',this.value)"
                                >
                                  +$500
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-pills   amont-1000-btn  "
                                  value={1000}
                                  onClick="foo('doller-amnt2',this.value)"
                                >
                                  +$1000
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {}
                        <div className="col-lg-5 col-md-5 col-sm-5">
                          <div
                            onClick="document.getElementById('select-box5').click()"
                            id="box-clr-chng5"
                            className="card web-box-background   border-0 mb-4 "
                          >
                            <div className="card-body pb-0">
                              <ul className="list-unstyled text-muted">
                                <li
                                  className="pb-3 list-text-color1"
                                  id="doble-color5"
                                >
                                  <img
                                    id="select-img5"
                                    src="images/gososhul/stp11.png"
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
                                  >
                                    Double your donation to divide among the
                                    other 354 shuls?
                                    <input
                                      type="checkbox"
                                      onClick="checkToggle('#box-clr-chng5', 'select-box5','#select-img5','images/gososhul/stp12.png' ,'images/gososhul/stp11.png','#doble-color5','#doble-para-color5','select-box6','#doble-para-color6')"
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
                          <div
                            onClick="document.getElementById('select-box6').click()"
                            id="box-clr-chng6"
                            className="card web-box-background   border-0"
                          >
                            <div className="card-body pb-0">
                              <ul className="list-unstyled text-muted">
                                <li
                                  className="pb-3 list-text-color1"
                                  id="doble-color6"
                                >
                                  <img
                                    id="select-img6"
                                    src="images/gososhul/open-bolt.png"
                                    width={20}
                                  />
                                  <span className="dou2">
                                    {' '}
                                    Supercharge It!
                                  </span>
                                </li>
                                <li className="mbottom-1">
                                  {' '}
                                  <label
                                    htmlFor="Supercharge2"
                                    className="container-radiobtn list-text-color2"
                                    id="doble-para-color6"
                                  >
                                    Double your donation to divide among the
                                    other 354 shuls?
                                    <input
                                      type="checkbox"
                                      onClick="checkToggle('#box-clr-chng6', 'select-box6','#select-img6','images/gososhul/light-bolt.png' ,'images/gososhul/open-bolt.png','#doble-color6','#doble-para-color6' ,'select-box5','#doble-para-color5')"
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
                        </div>
                        {}
                      </div>
                      {}
                      <div className="button-row d-flex  nextBox-rowpadding ">
                        <button
                          id="go-backprev-btn"
                          className="btn  js-btn-prev "
                          type="button"
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
                        >
                          Next
                        </button>
                        <hr className="hr-right-line" />
                      </div>
                    </div>
                  </div>
                  {}
                  <div
                    className="multisteps-form__panel"
                    data-animation="scaleIn"
                  >
                    <div className="multisteps-form__content">
                      <div className="row pl-4 step-forms3-Rpadding-mobileview">
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
                                <img src="images/gososhul/cc2.png" id="cc1" />
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
                                <img src="images/gososhul/ic1.png" id="ic1" />
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
                              name="email"
                              id="mail"
                              type="text"
                              className="chng-frnd-fd"
                              placeholder="xxxxxxxxxxxxxxxxxxx"
                            />
                            <input
                              name="email"
                              id="mail"
                              type="text"
                              className="cvv-input"
                              placeholder
                            />
                          </div>
                          <div className="form-row pb-1">
                            <div className="form-group col-md-6 pr-3">
                              <label className="lab-colr">Exp. Date</label>
                              <input
                                name="name2"
                                id="name3"
                                type="text"
                                className="chng-frnd-fd "
                                placeholder="_ _ /_ _ "
                              />
                            </div>
                            <div className="form-group col-md-6 pr-3">
                              <label className="lab-colr">CVV</label>
                              <input
                                name="name2"
                                id="name4"
                                type="text"
                                className="chng-frnd-fd "
                                placeholder={123}
                              />
                            </div>
                          </div>
                          <div className="form-group pt-4">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
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
                                  <td className=" tb-wg border-0">$1000 </td>
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
                              name="comments"
                              id="comments"
                              className="textbox-area-filed"
                              placeholder="Write a short message"
                              defaultValue=""
                            />
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
                          className="btn  js-btn-prev "
                          type="button"
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
                        >
                          Next
                        </button>
                        <hr className="hr-right-line" />
                      </div>
                    </div>
                  </div>
                  {}
                  <div
                    className="multisteps-form__panel "
                    data-animation="scaleIn"
                  >
                    <div
                      className="multisteps-form__content"
                      style={{
                        marginTop: '-20px'
                      }}
                    >
                      <div className="row pl-4 step-forms3-Rpadding-mobileview">
                        <div className="col-lg-6  col-md-7  col-sm-6">
                          <h5 className=" fnt-2 form4-taghaning ">
                            Choose 2 people you can rely on
                            <br />
                            to join you in this mitzvah...
                          </h5>
                        </div>
                        <div className="col-lg-6  col-md-5  col-sm-6" />
                        <div className="col-lg-6  col-md-6  col-sm-6 pr-4 ">
                          <h4 className="frnd-fng1 mb-2 mt-1 "> Friend 1 </h4>
                          <div className="row">
                            <div className="col-lg-6  col-md-6  col-sm-6 ">
                              <div className="form-group position-relative">
                                <label className="lab-colr">First Name</label>
                                <input
                                  name="name1"
                                  id="name1"
                                  type="text"
                                  className="chng-frnd-fd "
                                  placeholder="Enter First Name"
                                />
                              </div>
                            </div>
                            {}
                            <div className="col-lg-6  col-md-6  col-sm-6 lastnameFormtagpl-2 ">
                              <div className="form-group position-relative">
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
                            {}
                            <div className="col-lg-12  col-md-12  col-sm-12">
                              <div className="form-group position-relative">
                                <label className="lab-colr">Email</label>
                                <input
                                  name="email"
                                  id="mail"
                                  type="email"
                                  className="chng-frnd-fd"
                                  placeholder="Enter Email"
                                />
                              </div>
                            </div>
                            {}
                          </div>
                        </div>
                        {}
                        <div className="col-lg-6  col-md-6  col-sm-6  form4-tag-paddingall  ">
                          <h4 className="frnd-fng1 mb-2 mt-1"> Friend 2 </h4>
                          <div className="row">
                            <div className="col-lg-6  col-md-6  col-sm-6">
                              <div className="form-group position-relative">
                                <label className="lab-colr">First Name</label>
                                <input
                                  name="name1"
                                  id="name1"
                                  type="text"
                                  className="chng-frnd-fd "
                                  placeholder="Enter First Name"
                                />
                              </div>
                            </div>
                            {}
                            <div className="col-lg-6  col-md-6  col-sm-6 lastnameFormtagpl-2">
                              <div className="form-group position-relative">
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
                            {}
                            <div className="col-lg-12  col-md-12  col-sm-12">
                              <div className="form-group position-relative">
                                <label className="lab-colr">Email</label>
                                <input
                                  name="email"
                                  id="mail"
                                  type="email"
                                  className="chng-frnd-fd"
                                  placeholder="Enter Email"
                                />
                              </div>
                            </div>
                            {}
                          </div>
                        </div>
                        <div className="col-lg-6  col-md-6  col-sm-6 pr-4 form4NewPaddingTop ">
                          <div
                            onClick="document.getElementById('customCheck3').click()"
                            id="challeng-box"
                            className="card web-box2-background"
                          >
                            <div className="card-body pb-0">
                              <ul className="list-unstyled text-muted">
                                <li className="list-chalng-color1">
                                  <img
                                    src="images/gososhul/hand1.png"
                                    width={32}
                                  />
                                  <span className="dou1">
                                    {' '}
                                    Challenge Match
                                  </span>
                                </li>
                                <li className="mbottom-1">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      onClick="checkToggleborder('#challeng-box', '#customCheck3', '#customCheck4', '#doubleUp-box')"
                                      className="custom-control-input"
                                      defaultValue="customCheck3"
                                      id="customCheck3"
                                    />
                                    <span
                                      className="custom-control-label list-text-color2 txt-chng5 paddingl-onchecked-tym"
                                      htmlFor="customCheck3"
                                    >
                                      Increase donation by 150% by challenging
                                      your friends to match or beat your
                                      donation. Just a friendly challenge for
                                      charity!
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6  col-md-6  col-sm-6 form4NewPaddingTBBoth ">
                          <div
                            onClick="document.getElementById('customCheck4').click()"
                            id="doubleUp-box"
                            className="card web-box2-background   "
                          >
                            <div className="card-body pb-0">
                              <ul className="list-unstyled text-muted">
                                <li className=" list-chalng-color1">
                                  <img
                                    src="images/gososhul/stp11.png"
                                    width={32}
                                  />
                                  {' '}
                                  <span className="dou1">Double Up!</span>
                                </li>
                                <li className="mbottom-1">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      defaultValue="customCheck4"
                                      id="customCheck4"
                                      onClick="checkToggleborder('#doubleUp-box', '#customCheck4', '#customCheck3', '#challeng-box')"
                                    />
                                    <span
                                      htmlFor="customCheck4"
                                      className="custom-control-label list-text-color2 txt-chng5 paddingl-onchecked-tym"
                                    >
                                      Increase your friends donation by an
                                      average of 66% by letting them know
                                      you’ll automatically match whatever they
                                      donate.
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {}
                      </div>
                      <div className="button-row d-flex col-12 tagpage-rowpadding ">
                        <button
                          id="go-backprev-btn"
                          className="btn  js-btn-prev "
                          type="button"
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
                        >
                          Next
                        </button>
                        <hr className="hr-right-line" />
                      </div>
                    </div>
                  </div>
                  {}
                  <div
                    className="multisteps-form__panel "
                    data-animation="scaleIn"
                  >
                    <div className="multisteps-form__content">
                      <div className="row ">
                        <div className="col-lg-1  col-md-2  col-sm-0 " />
                        <div className="col-lg-8  col-md-8  col-sm-8 ">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="title-heading form5-share-paddingall  ">
                                <h5 className=" fnt-1 mb-2">
                                  <img src="images/gososhul/h2.png" />
                                  <span className="pl-2">
                                    GoSoshul via Social!
                                  </span>
                                </h5>
                                <p className="para-fnt7 ">
                                  Take a few extra seconds to share and
                                  challenge your friends publicly via one or
                                  more of the social platforms below to spread
                                  the good. Every person you refer will be
                                  tracked so you can see how far your touch
                                  has gone
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-12  col-md-12  col-sm-12 pl-0 pr-0 pt-2 form5-share-txtalign">
                              <a
                                href="javascript:void(0)"
                                className="btn btn-pills btn-fb1-clr mt-2 mr-3"
                              >
                                <img src="images/gososhul/fb.png" />
                                <span className="pl-2 dis-fb">Facebook</span>
                              </a>
                              <a
                                href="javascript:void(0)"
                                className="btn btn-pills btn-tw1-clr mt-2 mr-3"
                              >
                                <img src="images/gososhul/tw.png" />
                                <span className="pl-2 dis-twit">Twitter</span>
                              </a>
                              <a
                                href="javascript:void(0)"
                                className="btn btn-pills btn-wsap1-clr mt-2 mr-3"
                              >
                                <img src="images/gososhul/wsap.png" />
                                <span className="pl-2 dis-whtsap">
                                  WhatsApp
                                </span>
                              </a>
                              <a
                                href="javascript:void(0)"
                                className="btn btn-pills btn-inst1-clr mt-2 "
                              >
                                <img src="images/gososhul/inst.png" />
                                <span className="pl-2 dis-insta">
                                  Instagram
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="button-row d-flex  col-12 sharepageNxtbtn-rowpadding">
                        <button
                          id="go-backprev-btn"
                          className="btn  js-btn-prev "
                          type="button"
                        >
                          <i
                            className="fa fa-caret-left  back-clr-icon"
                            aria-hidden="true"
                          />
                             Go Back
                        </button>
                        <button
                          className="btn nxtbtn-step-green ml-auto"
                          type="button"
                        >
                          I Did It!
                        </button>
                        <hr className="hr-right-line" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
