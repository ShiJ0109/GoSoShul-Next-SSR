import React from 'react';
import PropTypes from 'prop-types';
import Spacer from 'react-add-space';

const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number
};

const defaultProps = {
  initialPage: 1,
  pageSize: 4
};

class Paginations extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
    this.getPager = this.getPager.bind(this);
  }

  componentWillMount() {
    // set page if items array isn't empty
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    const { items, pageSize } = this.props;
    let { pager } = this.state;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page, pageSize);

    // get new page of items from items array
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pager });

    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
    console.log('==============');
    console.log(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 10;

    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage; let
      endPage;
    if (totalPages <= 5) {
      // less than 5 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 5 total pages so calculate start and end pages
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = [...Array((endPage + 1) - startPage).keys()].map((i) => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }

  render() {
    const { pager } = this.state;

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (
      <div className="dummy-pagination-container">
        <ul className="dummy-pagination">
          {
              pager.currentPage === 1
                ? '' : (
                  <>
                    <li className="last-page-text">
                      <a onClick={() => this.setPage(1)}>
                        First Page
                        <Spacer amount={4} />
                      </a>
                    </li>
                    <li>|</li>
                  </>
                )
          }
          {pager.pages.map((page, index) => (
            <li key={index} className={pager.currentPage === page ? 'active-page-pagination' : ''}>
              <a onClick={() => this.setPage(page)}>{page}</a>
            </li>
          ))}
          {
              pager.currentPage === pager.totalPages
                ? '' : (
                  <>
                    <li className="disabled-li">|</li>
                    <li className="last-page-text">
                      <a onClick={() => this.setPage(pager.totalPages)}>
                        Last Page
                      </a>
                    </li>
                  </>
                )
          }
        </ul>
      </div>
    );
  }
}

Paginations.propTypes = propTypes;
Paginations.defaultProps = defaultProps;
export default Paginations;
