import * as stripeRequests from 'services/stripeRequests';
import React, { useState, useEffect } from 'react';

const StripeRefresh = () => {
  const stripeData = JSON.parse(localStorage.getItem('stripeData'));
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const ret = await stripeRequests.stripeConnectRefresh(stripeData.session, stripeData.id);
      console.log(ret);
      if (ret.stat === 'failure') setAlert(ret.error.response.data.status);
      else {
        window.location = ret.data.location;
      }
    }
    fetchData();
  }, []);
  if (alert) window.alert(alert);
  return null;
};

export default StripeRefresh;
