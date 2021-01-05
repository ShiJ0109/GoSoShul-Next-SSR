import React from 'react';
import AboutContainer from './AboutContainer';
import PropTypes from 'prop-types';
import { Prop } from 'components/Loading/generic';

const About = ({about, shulName}) => {
  return (
    <section className="section">
      <AboutContainer about={about} shulName={shulName} />
      {}
    </section>
  );
};

About.propTypes = {
  about: PropTypes.shape({
    logo_link: PropTypes.string,
    video_link: PropTypes.string,
    about_shul: PropTypes.string,
    photos: PropTypes.array,
  }),
  shulName: PropTypes.string,
};

export default About;
