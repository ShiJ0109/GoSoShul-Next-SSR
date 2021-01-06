import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SponsorElement from './SponsorElement';

const SponsorLists = ({ sponsors }) => {
  return (
    <div className="col-12 mt-4">
      <div id="client-five">
        <OwlCarousel
          items={5}
          className="owl-theme"
          loop
          nav
          autoplay
          autoplayTimeout={3000}
          navText={["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"]}
          responsive={
            {
              0: {
                items: 1
              },
              600: {
                items: 3
              },
              1000: {
                items: 5
              }
            }
          }
          margin={8}
        >
          {
            sponsors.map((sponsor) => {
              return (<SponsorElement sponsor={sponsor} />);
            })
          }
        </OwlCarousel>
      </div>
    </div>
  );
};

export default SponsorLists;
