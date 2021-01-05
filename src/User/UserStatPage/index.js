import React from 'react';
import PropTypes from 'prop-types';
import { UserDashboardContainer, UserContainer } from 'containers';
import Paginations from 'components/Paginations/Paginations';
import * as utils from 'utils/common';

class UserStatPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItems: [],
      pageOfItems: [],
      main: {},
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  async componentDidMount() {
    const { main, daily } = this.props.userDashboardState.dashboard;
    const totalItems = utils.splitArrayIntoChunksOfLen(daily, 4);
    console.log(totalItems);
    this.setState({ main, totalItems: daily });
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems });
  }

  render() {
    const { main, pageOfItems, totalItems } = this.state;
    return (
      <div className="content-wrapper">
        {}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2" />
            {}
          </div>
          {}
        </div>
        {}
        {}
        <div className="container ">
          <div id="carousel-mobile-hide" className="row text-center ">
            <div className="col-lg-1 col-md-0 col-sm-0" />
            <div className="col-lg-2 col-md-3 col-sm-2 bg-white  border-LTB ">
              <div className="content-padding-TB row-text-style box11">
                <h5>You Started</h5>
                <p>{`${main.started} Days`}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-3 bg-white ">
              <div className="content-padding-TB row-text-style box12">
                <h5>You’ve Raised</h5>
                <p>
                  {`$${utils.CommaFomatter(main.raised)}`}
                </p>
              </div>
            </div>
            <div className="col-lg-1  col-md-1  col-sm-1 bg-white ">
              <div className="content-padding-TB row-text-style box13">
                <h5>Tagged</h5>
                <p>{main.tagged}</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 bg-white ">
              <div className="content-padding-TB row-text-style box14">
                <h5>Social</h5>
                <p>{main.social_users}</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-2  col-sm-2 bg-white border-RTB ">
              <div className="content-padding-TB row-text-style box15">
                <h5>Total Network</h5>
                <p>{main.total_network}</p>
              </div>
            </div>
          </div>
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
                    <div className="content-padding-TB row-text-style box11">
                      <h5>You Started</h5>
                      <p>{`${main.started} Days`}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="content-padding-TB row-text-style box12">
                      <h5>You’ve Raised</h5>
                      <p>
                        {' '}
                        {`$${utils.CommaFomatter(main.raised)}`}
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="content-padding-TB row-text-style box13">
                      <h5>Tagged</h5>
                      <p>{main.tagged}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="content-padding-TB row-text-style box14">
                      <h5>Social</h5>
                      <p>{main.social_users}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="content-padding-TB row-text-style box15">
                      <h5>Total Network</h5>
                      <p>{main.total_network}</p>
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
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-md-0 col-sm-0" />
            <div className="col-lg-10 col-md-12 col-sm-12">
              <div className="card cardStyle">
                <div className="card-body pl-0 pr-0 table-responsive ">
                  <div id="contentReplaceble">
                    <div className="tag-more-table-container">
                      <table id="tag-more-table">
                        <thead>
                          <tr>
                            <th />
                            <th className="tag-more-table-heading">Tagged</th>
                            <th className="tag-more-table-heading">Social</th>
                            <th className="tag-more-table-heading">Spread</th>
                            <th className="tag-more-table-heading">total</th>
                            <th className="tag-more-table-heading">Raised</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            pageOfItems.map((item) => (
                              <tr className="table-row-class-donations">
                                <td className="stats-table-row-number">{`Day ${item.days}`}</td>
                                <td className="stats-table-number-data">{item.tagged}</td>
                                <td className="stats-table-number-data">{item.social}</td>
                                <td className="stats-table-number-data">{item.spread}</td>
                                <td className="stats-table-number-data">{item.total}</td>
                                <td className="stats-table-number-data">{`$${utils.CommaFomatter(item.raised)}`}</td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                    <Paginations items={totalItems} onChangePage={this.onChangePage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
      </div>

    );
  }
}

UserStatPage.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
  userDashboardState: PropTypes.object,
};

export default UserDashboardContainer(UserContainer(UserStatPage));
