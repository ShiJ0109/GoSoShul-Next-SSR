import React from 'react';
import * as utils from 'utils/common';

const CarouselElement = ({ memoryCard }) => {
  const transformUrl = utils.transformCloudinaryUrl(memoryCard.image_link, 'ar_1,q_100,r_5,c_crop');
  return (
    <div className="card bg-trans shop-list border-0 position-relative overflow-hidden m-2">
      <div
        className="shop-image position-relative overflow-hidden rounded shadow"
      >
        <a href="shop-product-detail.html">
          <img
            src={transformUrl}
            className="img-fluid"
            alt=""
          />
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); }}
          className="overlay-work"
        >
          <img
            src={transformUrl}
            className="img-fluid"
            alt=""
          />
        </a>
      </div>
      <div className="card-body content text-center pt-4 p-2" style={{ width: '100%' }}>
        <a href="#" className="owl-text-color1  product-name h6">
          {memoryCard.english_name}
        </a>
        <p className="p-color1">{memoryCard.hebrew_name}</p>
      </div>
    </div>
  );
};

export default CarouselElement;
