import React from 'react';
import AboutContent from './AboutContent';
import AboutCarousel from './AboutCarousel';

const AboutContainer = ( {about, shulName} ) => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <AboutContent logo_link={about.logo_link} about_shul={about.about_shul} shulName={shulName} />
        {}
        <AboutCarousel photos={about.photos} />
        {}
      </div>
      {}
    </div>
  );
};

export default AboutContainer;
