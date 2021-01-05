import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import requestParams from '../constants/requestParams';

// const navigate = useNavigate();

export const stripeConnect = (session) => {
  return axios
    .post(requestParams.stripeUrls.stripeConnect, {
      session,
      id: null,
      return_url: `${window.location.origin}/shul/paymentsetup/completed`,
      refresh_url: `${window.location.origin}/shul/paymentsetup/refresh`,
    },
    {
      headers: {
        'content-type': 'application/json',
        'X-API-KEY': 'CODEX@123',
        Authorization: 'Basic YWRtaW46MTIzNA=='
      },
    })
    .then((response) => {
      window.location = response.data.Location;
      localStorage.setItem('stripeData', JSON.stringify({
        id: response.data.refresh_id,
        session,
      }));
    })
    .catch((error) => {
      window.alert(error.response.data.status);
    });
};

export const stripeConnectRefresh = (session, refreshId) => {
  return axios
    .post(requestParams.stripeUrls.stripeConnectRefresh, {
      session,
      id: refreshId,
      refresh_url: `${window.location.origin}/shul/paymentsetup/refresh`,
    },
    {
      headers: {
        'content-type': 'application/json',
        'X-API-KEY': 'CODEX@123',
        Authorization: 'Basic YWRtaW46MTIzNA=='
      },
    })
    .then((response) => {
      return {
        stat: 'success',
        data: response.data,
        error: null,
      };
    })
    .catch((error) => {
      if (error.response.status < 400) {
        return {
          stat: 'success',
          data: error.response.data,
          error: null,
        };
      }
      return {
        stat: 'failure',
        data: null,
        error,
      };
    });
};

export const stripeConnectCompleted = (session) => {
  return axios
    .post(requestParams.stripeUrls.stripeConnectCompleted,
      {
        session
      },
      {
        headers: {
          'content-type': 'application/json',
          'X-API-KEY': 'CODEX@123',
          Authorization: 'Basic YWRtaW46MTIzNA=='
        },
      })
    .then((response) => {
      localStorage.setItem('stripeData', JSON.stringify({
        id: null,
        session: null,
      }));
      window.alert('Stripe connect success');
      // navigate('/shul/paymentsetup');
      return {
        stat: 'success',
        data: response.data,
        error: null,
      };
    })
    .catch((error) => {
      window.alert(error.response.data.status);
      // navigate('/shul/paymentsetup');
    });
};
export default stripeConnect;
