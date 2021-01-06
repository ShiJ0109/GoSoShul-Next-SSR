import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import DonorCol from './DonorCol';

const DonorLists = ({ donors }) => {
  function splitArrayIntoChunksOfLen(arr, len) {
    const chunks = []; let i = 0; const
      n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
  }
  const chunkCount = (Math.ceil(donors.length / 4) >= 4) ? 4 : Math.ceil(donors.length / 4);
  const donorCols = splitArrayIntoChunksOfLen(donors, chunkCount);

  return (
    <section className="section">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div id="customer-testi">
              <OwlCarousel
                items={4}
                className="owl-theme"
                loop
                dots
                autoplayTimeout={3000}
                nav
                navText={["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"]}
                margin={8}
                responsive={{
                  0: {
                    items: 1,
                    loop: donorCols.lengh > 1,

                  },
                  600: {
                    items: 2,
                    loop: donorCols.lengh > 2,
                  },
                  1000: {
                    items: 4,
                    loop: donorCols.lengh > 4,
                  }
                }}

              >
                {
                  donorCols.map((donorCol) => {
                    return <DonorCol donorCol={donorCol} />;
                  })
                }
              </OwlCarousel>
            </div>
            {}
          </div>
          {}
        </div>
      </div>
      {}
    </section>
  );
};

export default DonorLists;
