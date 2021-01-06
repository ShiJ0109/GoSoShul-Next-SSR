import React, {
  useState, useEffect, useRef, useMemo
} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Select from 'react-select';
import { StateList } from 'models/shul/StateList';
import * as utils from 'utils/common';
import ShulCol from './ShulCol';

const ShulCampaigns = ({ AllShulList }) => {
  function splitArrayIntoChunksOfLen(arr, len) {
    const chunks = [];
    let i = 0;
    const n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
  }
  let chunkCount = AllShulList.length >= 6 ? 2 : 1;
  const [data, setData] = useState(null);

  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    const shulCols = splitArrayIntoChunksOfLen(AllShulList, chunkCount);
    const carouselLengh = shulCols.length >= 3 ? 3 : shulCols.length;
    setData({
      shulCols,
      search: '',
      option: '',
      carouselLengh,
    });
  }, []);

  const dynamicFilter = (key, value) => {
    const { search, option } = {
      ...data,
      [key]: value,
    };
    const filteredShulList = AllShulList.filter((value) => {
      return (
        (value.name.toLowerCase().includes(search.toLowerCase())
        || value.country.toLowerCase().includes(search.toLowerCase())
        || value.state.toLowerCase().includes(search.toLowerCase()))
        && value.state.toLowerCase().includes(option.toLowerCase())
      );
    });

    chunkCount = filteredShulList.length >= 6 ? 2 : 1;
    const tmpShulList = splitArrayIntoChunksOfLen(filteredShulList, chunkCount);
    const carouselLengh = tmpShulList.length >= 3 ? 3 : tmpShulList.length;
    console.log(AllShulList);
    console.log(tmpShulList);
    setData({
      ...data,
      shulCols: tmpShulList,
      carouselLengh,
      [key]: value,
    });
  };

  const CarouselComponent = () => {
    if (data === null) return null;
    return (
      <div className="col-12 ">
        <div id="client-three">
          <OwlCarousel
            id="owl"
            items={data.carouselLengh}
            className="owl-theme"
            nav
            dots
            navText={["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"]}
            autoplay
            autoplayTimeout={3000}
            autoplayHoverPause
            responsive={{
              0: {
                items: 1,
                loop: data.shulCols.lengh > 1,
              },
              600: {
                items: 2,
                loop: data.shulCols.lengh > 2,
              },
              1000: {
                items: 3,
                loop: data.shulCols.lengh > 3,
              }
            }}
            onRefresh
          >
            {
            data.shulCols.map((shulCol) => {
              return <ShulCol shulCol={shulCol} />;
            })
            }
          </OwlCarousel>
        </div>
      </div>
    );
  };

  if (data === null) return null;
  return (
    <section className="section">
      <div className="container">
        <div className="row iphn-n-px-size">
          <div className="col-12">
            <div className=" subcribe-form pt-4">
              <h4 className="mb-0 float-left shulCampaigns111">
                Shul Campaigns
                <hr className="hr-css" />
              </h4>
              <div className="form-row by-loc-flexpopert">
                <div className="form-group mb-0 col-lg-1 col-md-0 col-sm-0" />
                <h5 className="by-loc">By Location</h5>
                <div className="form-group mb-0 col-md-3 inPutfiled111">
                  <select
                    value={data.option}
                    id="inputState"
                    className="form-control chng-filed"
                    onChange={(e) => {
                      // filter shul list by state
                      dynamicFilter('option', e.target.value);
                    }}
                  >
                    <option
                      value=""
                      selected
                    >
                      All State
                    </option>
                    {
                      StateList.map((stateValue) => {
                        return (
                          <option
                            value={stateValue.value}
                          >
                            {stateValue.label}
                          </option>
                        );
                      })
                    }
                  </select>
                </div>
                <div className="form-group mb-0 col-md-6">
                  <input
                    type="text"
                    id="search"
                    name="Search"
                    className
                    required
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                    }}
                    placeholder="Search"
                  />
                  <button
                    type="submit"
                    className="btn "
                    onClick={() => {
                      dynamicFilter('search', searchInput);
                    }}
                  >
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <CarouselComponent />
          {}
        </div>
        {}
      </div>
    </section>
  );
};

export default ShulCampaigns;
