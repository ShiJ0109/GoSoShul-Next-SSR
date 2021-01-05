import React, { Component } from 'react';
import Slider from 'react-slick';
import image1 from 'assets/img/bg.jpg';
import image2 from 'assets/img/bg2.jpg';
import image3 from 'assets/img/bg3.jpg';
import './slick.css';

const styles = (theme) => ({
  // . Image Styles
  imgFluid: {
    maxWidth: '100%',
    height: 'auto'
  },
  imgRounded: {
    borderRadius: '6px !important'
  },
  imgRoundedCircle: {
    borderRadius: '50% !important'
  },
  imgRaised: {
    boxShadow:
      '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  imgGallery: {
    width: '100%',
    marginBottom: '2.142rem'
  },
  imgCardTop: {
    width: '100%',
    borderTopLeftRadius: 'calc(.25rem - 1px)',
    borderTopRightRadius: 'calc(.25rem - 1px)'
  },
  imgCardBottom: {
    width: '100%',
    borderBottomLeftRadius: 'calc(.25rem - 1px)',
    borderBottomRightRadius: 'calc(.25rem - 1px)'
  },
  imgCard: {
    width: '100%',
    borderRadius: 'calc(.25rem - 1px)'
  },
  imgCardOverlay: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    padding: '1.25rem'
  },
});

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerPadding: 30
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <img src={image1} alt="First slide" className="slick-image" />
            <h3>1</h3>
          </div>
          <div>
            <img src={image1} alt="First slide" className="slick-image" />
            <h3>2</h3>
          </div>
          <div>
            <img src={image1} alt="First slide" className="slick-image" />
            <h3>3</h3>
          </div>
          <div>
            <img src={image1} alt="First slide" className="slick-image" />
            <h3>4</h3>
          </div>
          <div>
            <img src={image1} alt="First slide" className="slick-image" />
            <h3>5</h3>
          </div>
          <div>
            <img src={image1} alt="First slide" className="slick-image" />
            <h3>6</h3>
          </div>
          <div>
            <img src={image1} alt="First slide" className="slick-image" />
            <h3>7</h3>
          </div>
          <div>
            <img src={image1} alt="First slide" className="slick-image" />
            <h3>8</h3>
          </div>
          <div>
            <img src={image1} alt="First slide" className="slick-image" />
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
