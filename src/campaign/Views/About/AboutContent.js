import React from 'react';

const AboutContent = ({ logo_link, about_shul, shulName }) => {
  console.log(about_shul);
  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
        <div className="young-israel-aboutSectionlogo iphn-n-px-size">
          <img src={logo_link} height={38} />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 mt-4 pt-2 mt-sm-0 pt-sm-0 setHwebonfullwidth">
        <div className="section-title iphn-n-px-size">
        <h4 className="mb-4 text-lettersp">
          {`About ${shulName}`}
        </h4>
        <p className="text-clr-b">
          {about_shul}
        </p>
        </div>
      </div>
    </>

  );
};

export default AboutContent;
