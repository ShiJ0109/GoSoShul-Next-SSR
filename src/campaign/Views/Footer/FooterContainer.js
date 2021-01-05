import React from 'react';
import './Footer.css';

const FooterContainer = () => {
  return (
    <div className="container">
      <div className="row iphn-n-px-size">
        <div className="col-lg-3 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
          <a href="#" className="logo-footer">
            <img src="/images/gososhul/white-logo.png" height={40} alt />
          </a>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            porttitor
          </p>
        </div>
        {}
        <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <h4 className="text-light footer-head">More Links</h4>
          <ul className="list-unstyled footer-list mt-4">
            <li>
              <a href="page-aboutus.html" className="text-foot">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="page-services.html" className="text-foot">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="page-team.html" className="text-foot">
                {' '}
                Contact
              </a>
            </li>
          </ul>
        </div>
        {}
        <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <h4 className="text-light footer-head">More Links</h4>
          <ul className="list-unstyled footer-list mt-4">
            <li>
              <a href="page-aboutus.html" className="text-foot">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="page-services.html" className="text-foot">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="page-team.html" className="text-foot">
                {' '}
                Contact
              </a>
            </li>
          </ul>
        </div>
        {}
        <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <h4 className="text-light footer-head">Contact Us</h4>
          <p className="mt-4">admin@gososhul.com</p>
          <ul
            className="list-unstyled social-icon social mb-0 mt-4"
            style={
            {
              display: 'block '
            }
          }
          >
            <h4 className="text-light footer-head">Socials</h4>
            <li className="list-inline-item facebook-hg">
              <a href="javascript:void(0)" className>
                <i className="fa fa-facebook-f icon-size-fb" />
              </a>
            </li>
            <li className="list-inline-item twitter-hg">
              <a href="javascript:void(0)" className>
                <i className="fa fa-twitter icon-size-tw" />
              </a>
            </li>
            <li className="list-inline-item insta-hg">
              <a href="javascript:void(0)" className="insta-icon">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <h4 className="text-light footer-head">©️ GoSoshul 2020</h4>
        </div>
        {}
      </div>
      {}
    </div>
  );
};

export default FooterContainer;
