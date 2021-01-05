import React from "react";

class UserStatPage extends React.Component {
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
          <div id="carousel-mobile-hide" className="row text-center ">
            <div className="col-lg-1 col-md-0 col-sm-0" />
            <div className="col-lg-2 col-md-3 col-sm-2 bg-white  border-LTB ">
              <div className="content-padding-TB row-text-style box11">
                <h5>You Started</h5>
                <p>7 Days</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-3 bg-white ">
              <div className="content-padding-TB row-text-style box12">
                <h5>You’ve Raised</h5>
                <p>$3,456.77 </p>
              </div>
            </div>
            <div className="col-lg-1  col-md-1  col-sm-1 bg-white ">
              <div className="content-padding-TB row-text-style box13">
                <h5>Tagged</h5>
                <p>2</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 bg-white ">
              <div className="content-padding-TB row-text-style box14">
                <h5>Social</h5>
                <p>6</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-2  col-sm-2 bg-white border-RTB ">
              <div className="content-padding-TB row-text-style box15">
                <h5>Total Network</h5>
                <p>263</p>
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
                      <p>7 Days</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="content-padding-TB row-text-style box12">
                      <h5>You’ve Raised</h5>
                      <p>$3,456.77 </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="content-padding-TB row-text-style box13">
                      <h5>Tagged</h5>
                      <p>2</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="content-padding-TB row-text-style box14">
                      <h5>Social</h5>
                      <p>6</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="content-padding-TB row-text-style box15">
                      <h5>Total Network</h5>
                      <p>263</p>
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
            <div className="col-lg-1 col-md-0 col-sm-0"></div>
            <div className="col-lg-10 col-md-12 col-sm-12">
              <div className="card cardStyle">
                {}
                {}
                {}
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
                          <tr className="table-row-class-donations">
                            <td className="stats-table-row-number">Day 1</td>
                            <td className="stats-table-number-data">2</td>
                            <td className="stats-table-number-data">4</td>
                            <td className="stats-table-number-data">14</td>
                            <td className="stats-table-number-data">20</td>
                            <td className="stats-table-number-data">$834</td>
                          </tr>
                          <tr className="table-row-class-donations">
                            <td className="stats-table-row-number">Day 2</td>
                            <td className="stats-table-number-data">3</td>
                            <td className="stats-table-number-data">6</td>
                            <td className="stats-table-number-data">21</td>
                            <td className="stats-table-number-data">30</td>
                            <td className="stats-table-number-data">$839</td>
                          </tr>
                          <tr className="table-row-class-donations">
                            <td className="stats-table-row-number">Day 3</td>
                            <td className="stats-table-number-data">2</td>
                            <td className="stats-table-number-data">4</td>
                            <td className="stats-table-number-data">14</td>
                            <td className="stats-table-number-data">20</td>
                            <td className="stats-table-number-data">$3556</td>
                          </tr>
                          <tr className="table-row-class-donations">
                            <td className="stats-table-row-number">Day 4</td>
                            <td className="stats-table-number-data">2</td>
                            <td className="stats-table-number-data">4</td>
                            <td className="stats-table-number-data">14</td>
                            <td className="stats-table-number-data">20</td>
                            <td className="stats-table-number-data">$2456</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="dummy-pagination-container">
                      <ul className="dummy-pagination">
                        <li className="active-page-pagination">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li className="disabled-li">|</li>
                        <li className="last-page-text">Last Page</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
          {}
          {}
        </div>
        {}
      </div>
    );
  }
}

export default UserStatPage;
