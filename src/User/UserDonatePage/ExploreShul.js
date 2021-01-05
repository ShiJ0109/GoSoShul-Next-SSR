import React from 'react';
import PropTypes from 'prop-types';
import { UserDashboardContainer, UserContainer } from 'containers';
import { StateList } from 'models/shul/StateList';
import UserDonateModal from 'components/Modal/UserDonateModal/UserDonateModal';
import DonateShulCard from './DonateShulCard';
import * as utils from 'utils/common';

class ExploreShul extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shul_list: [],
      filteredList: [],
      selectState: '',
      searchText: '',
      donateModalStat: false,
    };
    this.filterData = this.filterData.bind(this);
    this.selectStateChanged = this.selectStateChanged.bind(this);
    this.searchTextChanged = this.searchTextChanged.bind(this);
  }

  async componentDidMount() {
    const { shul_list } = this.props.userDashboardState;
    const filteredList = shul_list;
    this.setState({
      shul_list, filteredList, selectState: ''
    });
  }

  searchTextChanged(e) {
    this.setState({ searchText: e.target.value }, () => { this.filterData(); });
  }

  selectStateChanged(e) {
    this.setState({ selectState: e.target.value }, () => { this.filterData(); });
    console.log(this.state.selectState);
  }

  filterData() {
    const { searchText, selectState } = this.state;
    const filteredList = this.state.shul_list.filter((value) => {
      return (
        (value.name.toLowerCase().includes(searchText.toLowerCase())
          || value.name.toLowerCase().includes(searchText.toLowerCase())
          || value.goal.toLowerCase().includes(searchText.toLowerCase())
          || value.donation_amount.toLowerCase().includes(searchText.toLowerCase()))
          && value.state.includes(selectState)
      );
    });
    this.setState({ filteredList });
    console.log(filteredList);
  }

  render() {
    const { donateModalStat, filteredList } = this.state;

    return (
      <div className="active tab-pane" id="timeline">
        {
            donateModalStat && <UserDonateModal />
          }
        <div className="card-body   Mob-shuldonate-crd-20">
          <div className="row ipadviewslist-Dashboard">
            <div className="col-lg-3 col-md-2 col-sm-3 list-shultxt-mob-padding">
              <h6>List of Shuls</h6>
            </div>
            <div className="col-lg-9 col-md-10 col-sm-9  text-right list-bylist-mob-padding">
              <div className="form-row ">
                <h5 className="by-loc">By Location</h5>
                <div className="form-group  col-lg-3 col-md-2  col-sm-6 ">
                  <select
                    id="inputState"
                    className="form-control chng-filed"
                    value={this.state.selectState}
                    onChange={this.selectStateChanged}
                  >
                    <option selected>State</option>
                    {
                      StateList.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="form-group  col-lg-6 col-md-4   col-sm-12 search-sm-alignR">
                  <input
                    type="text"
                    id="search"
                    name="email"
                    className="searchInput"
                    required
                    placeholder="Search"
                    value={this.state.searchText}
                    onChange={this.searchTextChanged}
                  />
                  <button type="submit" className="btn searchBtn">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row inlineSize-othershul-mobile">
            {
              filteredList.map((item, index) => (
                <DonateShulCard index={index} shulElement={item} />
                // <div className="col-lg-4 col-md-4 col-sm-12 " key={index}>
                //   <div id="box-pro-hover1">
                //     <div className="progress-box progressBox-Mt-5">
                //       <div className="progress" id="progressbar-hover1">
                //         {}
                //       </div>
                //     </div>
                //     {}
                //     <div className="card web-index2-background   border-0">
                //       <div className="card-body card-boxmargin-b">
                //         <img src={item.logo_link} className="imglog-width" />
                //         <ul className="list-unstyled d-flex justify-content-start  mt-3 pt-4 mb-0">
                //           <li className="web-font-text">
                //             Raised
                //             <span className="d-block">
                //               {`$${utils.CommaFomatter(item.donation_amount)}`}
                //               {' '}
                //             </span>
                //           </li>
                //           <li className="ml-2 web-font-text-1">
                //             Goal
                //             {' '}
                //             <span className="d-block">{utils.kBMFormatter(item.goal)}</span>
                //           </li>
                //         </ul>
                //         <div className="row mt-3 ">
                //           <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                //             <button className="btn ViewButton">View</button>
                //           </div>
                //           <div className="col-lg-6 col-md-6 col-sm-6  text-center ">
                //             <button
                //               className="btn   shul-box-donatebtn2 shul-box-donatebtn2"
                //               data-toggle="modal"
                //               data-target="#exampleModalCenter"
                //               data-backdrop="static"
                //               data-keyboard="false"
                //               onClick={(e) => { this.setState({ donateModalStat: true }); }}
                //             >
                //               Donate
                //             </button>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                // </div>
              ))
            }
            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div id="box-pro-hover1">
                <div className="progress-box progressBox-Mt-5">
                  <div className="progress" id="progressbar-hover1">
                    {}
                  </div>
                </div>
                {}
                <div className="card web-index2-background   border-0">
                  <div className="card-body card-boxmargin-b">
                    <img src="/dist/img/mid-logo.png" className="imglog-width" />
                    <ul className="list-unstyled d-flex justify-content-start  mt-3 pt-4 mb-0">
                      <li className="web-font-text">
                        Raised
                        <span className="d-block">$145,765 </span>
                      </li>
                      <li className="ml-2 web-font-text-1">
                        Goal
                        {' '}
                        <span className="d-block">$1M </span>
                      </li>
                    </ul>
                    <div className="row mt-3 ">
                      <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                        <button className="btn ViewButton">View</button>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6  text-center ">
                        <button
                          className="btn   shul-box-donatebtn2 shul-box-donatebtn2"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          data-backdrop="static"
                          data-keyboard="false"
                        >
                          Donate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div id="box-pro-hover2">
                <div className="progress-box progressBox-Mt-5">
                  <div className="progress" id="progressbar-hover2">
                    {}
                  </div>
                </div>
                {}
                <div className="card web-index2-background   border-0">
                  <div className="card-body card-boxmargin-b">
                    <img src="/dist/img/mid-logo.png" className="imglog-width" />
                    <ul className="list-unstyled d-flex justify-content-start  mt-3 pt-4 mb-0">
                      <li className="web-font-text">
                        Raised
                        <span className="d-block">$145,765 </span>
                      </li>
                      <li className="ml-2 web-font-text-1">
                        Goal
                        {' '}
                        <span className="d-block">$1M </span>
                      </li>
                    </ul>
                    <div className="row mt-3">
                      <div className="col-md-6 text-center">
                        <button className="btn ViewButton">View</button>
                      </div>
                      <div className="col-md-6 text-center">
                        <button
                          className="btn   shul-box-donatebtn2 shul-box-donatebtn2"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          data-backdrop="static"
                          data-keyboard="false"
                        >
                          Donate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 ">
              <div id="box-pro-hover3">
                <div className="progress-box progressBox-Mt-5">
                  <div className="progress" id="progressbar-hover3">
                    {}
                  </div>
                </div>
                {}
                <div className="card web-index2-background   border-0">
                  <div className="card-body card-boxmargin-b">
                    <img src="/dist/img/mid-logo.png" className="imglog-width" />
                    <ul className="list-unstyled d-flex justify-content-start  mt-3 pt-4 mb-0">
                      <li className="web-font-text">
                        Raised
                        <span className="d-block">$145,765 </span>
                      </li>
                      <li className="ml-2 web-font-text-1">
                        Goal
                        {' '}
                        <span className="d-block">$1M </span>
                      </li>
                    </ul>
                    <div className="row mt-3">
                      <div className="col-md-6 text-center">
                        <button className="btn ViewButton">View</button>
                      </div>
                      <div className="col-md-6 text-center">
                        <button
                          className="btn  shul-box-donatebtn2"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          data-backdrop="static"
                          data-keyboard="false"
                        >
                          Donate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ExploreShul.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
  userDashboardState: PropTypes.object,
  userDashboardActions: PropTypes.object,
};

export default UserDashboardContainer(UserContainer(ExploreShul));
