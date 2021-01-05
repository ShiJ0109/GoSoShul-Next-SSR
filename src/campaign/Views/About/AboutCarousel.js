import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import * as utils from 'utils/common';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const AboutCarousel = ({ photos }) => {
  return (
    <div className="col-lg-6 col-md-6  col-sm-6 youngIsrael-Add aboutYoungisrael-youtubeslider">
      {/* <div id="customer-testi-1" className="owl-carousel owl-theme"> */}
      <div id="customer-testi-1">
        <OwlCarousel
          items={1}
          className="owl-theme"
          loop
          nav
          autoplay
          navText={["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"]}
          margin={8}
        >
          {
            photos.map((photo) => {
              return (
                <div className="position-relative">
                  <img
                    src={utils.transformCloudinaryUrl(photo, 'ar_1.7,q_100,r_5,c_crop')}
                    className="card-img-top rounded-top"
                    alt="..."
                  />
                </div>
              );
            })
          }
        </OwlCarousel>
      </div>
    </div>
  );
};

export default AboutCarousel;
