import React from 'react';

const Tagmore = () => {
  return (
    <div className="tab-pane" id="timeline">
      {}
      {}
      <div className="card-body tagged-crd-paddingLR-24">
        <h6 className="tag-page-heading">
          You can tag as many people are you want to make a bigger
          <br />
          {' '}
          difference in this tremendous mitzwah.
        </h6>
        <div id="contentReplaceble">
          <div className>
            <div className="tag-more-table-container tag-more-mob-w-Auto">
              <table id="tag-more-table111">
                <thead>
                  <tr>
                    <th />
                    <th className="tag-more-table-heading tagtable-align-chnge">
                        First Name
                      </th>
                    <th className="tag-more-table-heading tagtable-align-chnge">
                        Last Name
                      </th>
                    <th className="tag-more-table-heading tagtable-align-chnge tag-th-mob">
                        Email
                      </th>
                  </tr>
                </thead>
                <tbody id="add-more-form-row">
                  <tr>
                    <td className="table-row-number tagT-paddingLR">1</td>
                    <td>
                        <input
                          className="table-first-last-name-input"
                          type
                          placeholder="First Name"
                          name
                        />
                      </td>
                    <td>
                        <input
                          className="table-first-last-name-input"
                          type
                          placeholder="Last Name"
                          name
                        />
                      </td>
                    <td>
                        <input
                          className="table-email-input"
                          type
                          placeholder="Enter Email"
                          name
                        />
                      </td>
                  </tr>
                  <tr>
                    <td className="table-row-number tagT-paddingLR">2</td>
                    <td>
                        <input
                          className="table-first-last-name-input"
                          type
                          placeholder="First Name"
                          name
                        />
                      </td>
                    <td className="tag-td-mob1">
                        <input
                          className="table-first-last-name-input"
                          type
                          placeholder="Last Name"
                          name
                        />
                      </td>
                    <td>
                        <input
                          className="table-email-input"
                          type
                          placeholder="Enter Email"
                          name
                        />
                      </td>
                  </tr>
                  <tr>
                    <td className="table-row-number tagT-paddingLR">3</td>
                    <td>
                        <input
                          className="table-first-last-name-input"
                          type
                          placeholder="First Name"
                          name
                        />
                      </td>
                    <td className="tag-td-mob1">
                        <input
                          className="table-first-last-name-input"
                          type
                          placeholder="Last Name"
                          name
                        />
                      </td>
                    <td>
                        <input
                          className="table-email-input"
                          type
                          placeholder="Enter Email"
                          name
                        />
                      </td>
                  </tr>
                  <tr>
                    <td className="table-row-number tagT-paddingLR">4</td>
                    <td>
                        <input
                          className="table-first-last-name-input"
                          type
                          placeholder="First Name"
                          name
                        />
                      </td>
                    <td className="tag-td-mob1">
                        <input
                          className="table-first-last-name-input"
                          type
                          placeholder="Last Name"
                          name
                        />
                      </td>
                    <td>
                        <input
                          className="table-email-input"
                          type
                          placeholder="Enter Email"
                          name
                        />
                      </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="tag-more-table-footer">
                    <th />
                    <th
                        className="tag-more-table-add-more-button"
                        id="add-more-row-btn"
                      >
                        {' '}
                        + Add More People
                      </th>
                    <th />
                    <th />
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-5">
              <div
                onClick="document.getElementById('customCheck3').click()"
                id="challeng-box"
                className="card web-box2-background  mt-3 mb-4 "
              >
                <div className="card-body pb-0 ">
                  <ul className="list-unstyled">
                    <li className="list-chalng-color1">
                        <img src="/dist/img/hand1.png" width={32} />
                        <span> Challenge Match</span>
                      </li>
                    <li className="mbottom-1">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck3"
                            onClick="checkToggle('#challeng-box', '#customCheck3', \n                                             '#customCheck4', '#doubleUp-box')"
                            defaultValue="Challenge"
                          />
                          <label
                            className="custom-control-label list-text-color2 txt-chng5"
                            htmlFor="Challenge"
                          >
                            Increase donation by 150% by challenging your
                            friends to match or beat your donation. Just a
                            friendly challenge for charity!
                          </label>
                        </div>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1" />
            <div className="col-lg-5 col-md-5 col-sm-5">
              <div
                id="doubleUp-box"
                onClick="document.getElementById('customCheck4').click()"
                className="card web-box2-background mt-3 mb-4 "
              >
                <div className="card-body pb-0">
                  <ul className="list-unstyled text-muted">
                    <li className=" list-chalng-color1">
                        <img src="/dist/img/stp11.png" width={32} />
                        <span> Double Up!</span>
                      </li>
                    <li className="mbottom-1">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck4"
                            onClick="checkToggle('#doubleUp-box','#customCheck4','#customCheck3', \n                                               '#challeng-box')"
                            defaultValue="Double"
                          />
                          <label
                            className="custom-control-label list-text-color2 txt-chng5"
                            htmlFor="Double"
                          >
                            Increase your friends donation by an average of 66%
                            by letting them know you’ll automatically match
                            whatever they donate.
                          </label>
                        </div>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <button
              onClick="submitTagForm()"
              className="btn donateAgainButton add-padding-tagnow"
            >
              <span className="tagnow-PaddingLR">Tag Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tagmore;
