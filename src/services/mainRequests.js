import axios from 'axios';
import requestParams from '../constants/requestParams';

const getAuthToken = () => {
  return JSON.parse(localStorage.getItem('authToken')).access_token;
};

export const GetCampaignDeadline = () => {
  return axios
    .post(requestParams.mainUrls.getCampaignDeadline, {}, {
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
      return {
        stat: 'failure',
        data: null,
        error,
      };
    });
};

export const GetTotalData = () => {
  return axios
    .post(requestParams.mainUrls.getTotalDonationStat, {}, {
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
      return {
        stat: 'failure',
        data: null,
        error,
      };
    });
};

export const GetShulIdByUrl = (campaign_url) => {
  return axios
    .post(requestParams.mainUrls.getShulIdByUrl, {campaign_url}, {
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
      return {
        stat: 'failure',
        data: null,
        error,
      };
    });
};

export const GetAllDonations = (values) => {

  return axios
    .post(requestParams.mainUrls.getAllDonations, values, {
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
      return {
        stat: 'failure',
        data: null,
        error,
      };
    });
};

export const GetCampaignData = (values) => {

  return axios
    .post(requestParams.mainUrls.getCampaignData, values, {
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
      return {
        stat: 'failure',
        data: null,
        error,
      };
    });
};

export default GetCampaignDeadline;
