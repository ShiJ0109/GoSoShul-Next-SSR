import React, { useContext } from 'react';
import Login from './Login';
import './Login.css';

// import LoadingProvider instead of annoying callback
import {LoadingProvider} from './LoadingContext';

const ShulLogin = () => {
  return (
    <LoadingProvider>
      <div className="go-bg">
        <Login />
      </div>
    </LoadingProvider>

  );
};
export default ShulLogin;
