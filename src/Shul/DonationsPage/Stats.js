import React from 'react';
import PropTypes from 'prop-types';
import Paginations from 'components/Paginations/Paginations';
import * as utils from 'utils/common';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItems: [],
      pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  async componentDidMount() {
    let totalDay = 0;
    const fakeStat = {
      days: '',
      congergation: '',
      tagged: '',
      social: '',
      spread: '',
      total_network: '',
      raised: ''
    };
    this.props.stats.map((dayStat) => {
      if (dayStat.days > totalDay) totalDay = dayStat.days;
    });
    if (totalDay % 4 !== 0) totalDay = totalDay * 1 + 4 - totalDay % 4;
    console.log(totalDay);
    const totalItems = [...Array(totalDay).keys()].map((i) => {
      const item = this.props.stats.filter((dayStat) => (dayStat.days * 1 === i + 1));
      if (item.length === 1) return item[0];
      return { ...fakeStat, days: i + 1 };
    });
    console.log(totalItems);
    this.setState({ totalItems });
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems });
  }

  render() {
    const { pageOfItems, totalItems } = this.state;
    return (
      <div className="active tab-pane" id="activity">
        <div className="tag-more-table-container">
          <table id="tag-more-table">
            <thead>
              <tr>
                <th />
                <th className="tag-more-table-heading">Congragation</th>
                <th className="tag-more-table-heading">Tagged</th>
                <th className="tag-more-table-heading">Social</th>
                <th className="tag-more-table-heading">Spread</th>
                <th className="tag-more-table-heading">total</th>
                <th className="tag-more-table-heading">Raised</th>
              </tr>
            </thead>
            <tbody>
              {pageOfItems.map((item) => (
                <tr className="table-row-class-donations" key={item.days}>
                  <td className="stats-table-row-number">
                    {`Day ${item.days}`}
                  </td>
                  <td className="stats-table-number-data">
                    {utils.CommaFomatter(item.congergation)}
                  </td>
                  <td className="stats-table-number-data">
                    {utils.CommaFomatter(item.tagged)}
                  </td>
                  <td className="stats-table-number-data">
                    {utils.CommaFomatter(item.social)}
                  </td>
                  <td className="stats-table-number-data">
                    {utils.CommaFomatter(item.spread)}
                  </td>
                  <td className="stats-table-number-data">
                    {utils.CommaFomatter(item.total_network)}
                  </td>
                  <td className="stats-table-number-data">
                    {`$${utils.CommaFomatter(item.raised)}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Paginations items={totalItems} onChangePage={this.onChangePage} />
      </div>
    );
  }
}

Stats.propTypes = {
  stats: PropTypes.array,
};

export default Stats;
