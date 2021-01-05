import React from 'react';

const Logo = () => {
  return (
    <div>
      <a className="logo mt-2" href="index.html">
        <img
          src="/images/gososhul/white-logo.png"
          className="l-dark"
          height={38}
          alt
        />
        <img
          src="/images/gososhul/green-logo.png"
          className="l-light"
          height={38}
          alt
        />
      </a>
    </div>
  );
};

export default Logo;
