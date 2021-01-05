import * as stripeRequests from 'services/stripeRequests';
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const StripeComplete = () => {
  const stripeData = JSON.parse(localStorage.getItem('stripeData'));
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const ret = await stripeRequests.stripeConnectCompleted(stripeData.session);
      console.log(ret);
      if (ret.stat === 'failure') setAlert(ret.error.response.data.status);
      else {
        navigate('/shul/paymentsetup');
      }
    }
    fetchData();
  }, []);
  if (alert) window.alert(alert);
  return null;
};

export default StripeComplete;
