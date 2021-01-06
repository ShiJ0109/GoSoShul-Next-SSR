import React from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CarouselElement from './CarouselElement';

const InMemoryOfCarousel = ({ data }) => {
  return (
    // <div id="client-four" className="owl-carousel owl-theme">
    <div id="client-four">
      <OwlCarousel
        items={4}
        className="owl-theme"
        loop
        autoplay
        autoplayTimeout={3000}
        nav
        navText={["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"]}
        margin={8}
        responsive={
          {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 4 },
          }
        }
      >
        {
            data.map((memoryCard) => {
              return (
                <CarouselElement  memoryCard={memoryCard} />
              );
            })
        }
      </OwlCarousel>
    </div>
  );
};
InMemoryOfCarousel.propTypes = {
  in_memory_of: PropTypes.arrayOf(PropTypes.shape({
    image_link: PropTypes.string,
    english_name: PropTypes.string,
    hebrew_name: PropTypes.string,
  }))
};
export default InMemoryOfCarousel;
