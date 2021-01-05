/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import * as utils from 'utils/common';
import Paginations from 'components/Paginations/Paginations';

class Donations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donors: [],
      filteredDonors: [],
      pageOfDonors: [],
      total: null,
      goal: null,
      donationStat: null,
      selectDonationType: '',
      searchText: '',
    };
    // this.onChangePage = this.onChangePage.bind(this);
    this.filterData = this.filterData.bind(this);
    this.selectTypeChanged = this.selectTypeChanged.bind(this);
    this.searchTextChanged = this.searchTextChanged.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }

  async componentDidMount() {
    const { total } = this.props.donationStat;
    const { donationStat, goal, donors } = this.props;
    const filteredDonors = donors;
    this.setState({
      total, goal, donationStat, donors, filteredDonors, selectDonationType: ''
    });
  }

  onChangePage(pageOfDonors) {
    // update state with new page of items
    this.setState({ pageOfDonors });
  }

  searchTextChanged(e) {
    this.setState({ searchText: e.target.value }, () => { this.filterData(); });
  }

  selectTypeChanged(e) {
    this.setState({ selectDonationType: e.target.value }, () => { this.filterData(); });
    console.log(this.state.selectDonationType);
  }

  filterData() {
    const { searchText, selectDonationType } = this.state;
    const filteredDonors = this.state.donors.filter((value) => {
      return (
        (value.name.toLowerCase().includes(searchText.toLowerCase())
          || value.spread_type.toLowerCase().includes(searchText.toLowerCase())
          || value.amount.toLowerCase().includes(searchText.toLowerCase()))
          && value.spread_type.includes(selectDonationType)
      );
    });
    this.setState({ filteredDonors });
    console.log(filteredDonors);
  }

  render() {
    const { total, goal, donationStat } = this.state;
    if (!total && !goal && !donationStat) return null;
    return (
      <div className="tab-pane" id="timeline">
        <div className="container ">
          <div id="carousel-mobile-hide" className="row text-center ">
            <div className="col-md-3 bg-white border-LTB ">
              <div className="content-padding-TB row-text-style ">
                <h5>Donors</h5>
                <p>{utils.CommaFomatter(total.donors)}</p>
              </div>
            </div>
            <div className="col-md-3 bg-white ">
              <div className="content-padding-TB row-text-style ">
                <h5>Raised</h5>
                <p>{`$${utils.CommaFomatter(total.amount)}`}</p>
              </div>
            </div>
            <div className="col-md-3 bg-white ">
              <div className="content-padding-TB row-text-style ">
                <h5>Goal</h5>
                <p>{`$${utils.CommaFomatter(goal)}`}</p>
              </div>
            </div>
            <div className="col-md-3 bg-white border-RTB ">
              <div className="content-padding-TB row-text-style ">
                <h5>Achieved</h5>
                <p>{`${Math.round(total.amount / goal * 100)}%`}</p>
              </div>
            </div>
          </div>
          {}
          <div id="carousel-mobile-show" className="row bg-white text-center">
            <div className="col-sm-1" />
            <div className="col-sm-10">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="content-padding-TB row-text-style ">
                      <h5>Donars</h5>
                      <p className="dashboard-box-row-nopaddingT">{utils.CommaFomatter(total.donors)}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="content-padding-TB row-text-style ">
                      <h5>Raised</h5>
                      <p>{`$${utils.CommaFomatter(total.amount)}`}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="content-padding-TB row-text-style ">
                      <h5>Goal</h5>
                      <p>{`$${utils.CommaFomatter(goal)}`}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="content-padding-TB row-text-style ">
                      <h5>Achieved</h5>
                      <p>{`${Math.round(total.amount / goal * 100)}%`}</p>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div
            id="carousel-mobile-hide2"
            className="row donation-dirbox4 text-center "
          >
            <div className="col-lg-3 col-md-3  bg-white border-LTB dr-box1 ">
              <div className="content-padding-TB row-text-style1 ">
                <h5>
                  Direct Donations
                  <small>[?]</small>
                </h5>
                <p>
                  {donationStat.direct_donations.donors}
                  {' '}
                  Donors
                </p>
                <hr className="hr-marginLR1" />
                <p>{`$${utils.CommaFomatter(donationStat.direct_donations.amount)}`}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3   bg-white dr-boxpadding dr-box1 ">
              <div className="content-padding-TB row-text-style1 ">
                <h5>
                  Indirect Donations
                  <small>[?]</small>
                </h5>
                <p>
                  {donationStat.indirect_donations.donors}
                  {' '}
                  Donors
                </p>
                <hr className="hr-marginLR2" />
                <p>{`$${utils.CommaFomatter(donationStat.indirect_donations.amount)}`}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 bg-white dr-box1 ">
              <div className="content-padding-TB row-text-style1 ">
                <h5>
                  In
                  {' '}
                  <span className="mob-display-net">
                    Network
                    <small>[?]</small>
                  </span>
                </h5>
                <p>
                  {donationStat.social_donations.donors}
                  {' '}
                  Donors
                </p>
                {' '}
                <hr className="hr-marginLR3" />
                <p>{`$${utils.CommaFomatter(donationStat.social_donations.amount)}`}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3  bg-white border-RTB dr-box1">
              <div className="content-padding-TB row-text-style1 ">
                <h5>
                  Out of Network
                  <small>[?]</small>
                </h5>
                <p>
                  {donationStat.in_network.donors}
                  {' '}
                  Donors
                </p>
                {' '}
                <hr className="hr-marginLR4" />
                <p>{`$${utils.CommaFomatter(donationStat.in_network.amount)}`}</p>
              </div>
            </div>
          </div>
          <div id="carousel-mobile-show2" className="row bg-white text-center">
            <div className="col-sm-1" />
            <div className="col-sm-10">
              <div
                id="carouselExampleControls2"
                className="carousel slide"
                data-ride="false"
              >
                <div className="active tab-pane  table-responsive" id="activity">
                  {}
                  <div className="tag-more-table-container">
                    <table id>
                      <thead />
                      <tbody>
                        <tr className="table-row-class-donations">
                          <td className="donationssection-mobileviewTable">
                            <div className="content-padding-TB row-text-style1 ">
                            <h5>
                              Direct Donations
                              <small>[?]</small>
                            </h5>
                            <p>
                              {donationStat.direct_donations.donors}
                              {' '}
                              Donors
                            </p>
                            {' '}
                            <hr className="hr-marginLR1" />
                            <p>{`$${utils.CommaFomatter(donationStat.direct_donations.amount)}`}</p>
                          </div>
                          </td>
                          <td className="donationssection-mobileviewTable">
                            <div className="content-padding-TB row-text-style1 ">
                            <h5>
                              Indirect Donations
                              <small>[?]</small>
                            </h5>
                            <p>
                              {donationStat.indirect_donations.donors}
                              {' '}
                              Donors
                            </p>
                            {' '}
                            <hr className="hr-marginLR2" />
                            <p>{`$${utils.CommaFomatter(donationStat.indirect_donations.amount)}`}</p>
                          </div>
                          </td>
                          <td className="donationssection-mobileviewTable">
                            <div className="content-padding-TB row-text-style1 ">
                            <h5>
                              In
                              {' '}
                              <span className="mob-display-net">
                                Network
                                <small>[?]</small>
                              </span>
                            </h5>
                            <p>
                              {donationStat.social_donations.donors}
                              {' '}
                              Donors
                            </p>
                            {' '}
                            <hr className="hr-marginLR3" />
                            <p>{`$${utils.CommaFomatter(donationStat.social_donations.amount)}`}</p>
                          </div>
                          </td>
                          <td className="donationssection-mobileviewTable">
                            <div className="content-padding-TB row-text-style1 ">
                            <h5>
                              Out of Network
                              <small>[?]</small>
                            </h5>
                            <p>
                              {donationStat.in_network.donors}
                              {' '}
                              Donors
                            </p>
                            {' '}
                            <hr className="hr-marginLR4" />
                            <p>{`$${utils.CommaFomatter(donationStat.in_network.amount)}`}</p>
                          </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-white mt-5">
          <div className="row pt-4">
            <div className="form-group col-md-4 ">
              <input
                type="text"
                id="search"
                name="email"
                value={this.state.searchText}
                onChange={this.searchTextChanged}
                className="searchInput-donation-table"
                required
                placeholder="Search"
              />
              <button type="submit" className="btn searchBtn">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </div>
            <div className="col-md-4 text-right">
              <div className="form-row ">
                <h5 className="by-loc mt-2">Donation Type</h5>
                <div className="form-group col-md-3 mt-1">
                  <select
                    id="inputState"
                    value={this.state.selectDonationType}
                    onChange={this.selectTypeChanged}
                    className="form-control chng-filed"
                  >
                    <option value="">All</option>
                    <option value="Direct">Direct</option>
                    <option value="Indirect">Indirect</option>
                    <option value="Social">Social</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="text-center col-md-4">
              <p className="mt-1 base-text-color">
                <i className="fas fa-file-export" />
                {' '}
                Export all data
              </p>
            </div>
          </div>
          <div className="tag-more-table-container">
            <table id="tag-more-table">
              <thead>
                <tr>
                  <th className="tag-more-table-heading">Name</th>
                  <th className="tag-more-table-heading">Donation Type</th>
                  <th className="tag-more-table-heading">Date</th>
                  <th className="tag-more-table-heading">Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                  (this.state.filteredDonors.length > 0)
                    ? (
                      this.state.pageOfDonors.map((item, index) => (
                        <tr>
                          <td>
                            <h6 className="rowDescriptionText">{item.name}</h6>
                          </td>
                          <td>
                            <h6 className="rowDescriptionText">{item.spread_type}</h6>
                          </td>
                          <td>
                            <small className="rowDescriptionDate">
                              {utils.convertISODateToLocale(item.date)}
                            </small>
                          </td>
                          <td>
                            <h6 className="rowDescriptionText">
                              <small className="show-donation-detail-popover">
                                <i className="fa fa-angle-down" aria-hidden="true" />
                              </small>
                              {' '}
                              {item.amount}
                            </h6>
                          </td>
                        </tr>
                      ))
                    ) : ''
 }

              </tbody>
            </table>
            {
              (this.state.filteredDonors.length > 0)
                ? (<Paginations items={this.state.filteredDonors} onChangePage={this.onChangePage} />)
                : ''
            }

          </div>
        </div>
      </div>
    );
  }
}

Donations.propTypes = {
  donationStat: PropTypes.object,
  donors: PropTypes.array,
  goal: PropTypes.string,
};

export default Donations;
