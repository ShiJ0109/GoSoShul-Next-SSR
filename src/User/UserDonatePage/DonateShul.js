import React from 'react';
import PropTypes from 'prop-types';
import Spacer from 'react-add-space';
import { UserDashboardContainer, UserContainer } from 'containers';
import Paginations from 'components/Paginations/Paginations';
import UserDonateModal from 'components/Modal/UserDonateModal/UserDonateModal';
import * as utils from 'utils/common';

class DonateShul extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItems: [],
      pageOfItems: [],
      donateModalStat: false,
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  async componentDidMount() {
    const { donation } = this.props.userDashboardState;
    const totalItems = utils.splitArrayIntoChunksOfLen(donation, 4);
    console.log(totalItems);
    this.setState({ totalItems: donation });
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems });
  }

  render() {
    const { totalItems, pageOfItems, donateModalStat } = this.state;
    return (
      <div className="active tab-pane inlineSize-donate-mobile " id="activity">
        {}
        <div className="card-body donate-crd-paddRL-0">
          <h6>Here is a list of your shul donations :</h6>
          <table
            id="donationTable"
            className="table w-100  nowrap table-hover no-footer dataTable example"
            data-page-length={5}
          >
            <thead>
              <tr className="table-headcolor">
                <th className="text-left" />
                <th className />
                <th className />
                <th data-orderable="false" />
                <th data-orderable="false" />
              </tr>
            </thead>
            <tbody className="change-padding-donatetable">
              {pageOfItems.map((item, index) => (
                <tr id="buy-1" key={index}>
                  <td className="tab-first-td-radius">
                    <h6 className="rowDescriptionText">
                      {item.name}
                      <small className="rowDescriptionDate">
                        <Spacer amount={1} />
                        {utils.convertISODateToLocale(item.created_date)}
                      </small>
                    </h6>
                  </td>
                  <td>
                    <h6 className="rowPrice">
                      $
                      {item.amount}
                    </h6>
                  </td>
                  <td className="tab-last-td-radius donate111">
                    <span className="tableListButton">
                      <img
                        src="/dist/img/Icon material-receipt.png"
                        className="tableListBtnImg"
                        alt=""
                      />
                    </span>
                    <span
                      className="tableListButton tooltip21 gray-tooltip"
                      data-toggle="tooltip"
                      title="Text Here"
                    >
                      <img
                        src="/dist/img/Icon feather-download.png"
                        className="tableListBtnImg"
                        alt=""
                      />
                    </span>
                    <span className>
                      <button
                        className="btn donateTabBtn mob-donate0"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        data-backdrop="static"
                        data-keyboard={false}
                        onClick={(e) => { this.setState({ donateModalStat: true }); }}
                      >
                        Donate Again
                      </button>
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
          {
            donateModalStat && <UserDonateModal />
          }
        </div>
        <Paginations items={totalItems} onChangePage={this.onChangePage} />
      </div>
    );
  }
}

DonateShul.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
  userDashboardState: PropTypes.object,
  userDashboardActions: PropTypes.object,
};

export default UserDashboardContainer(UserContainer(DonateShul));
