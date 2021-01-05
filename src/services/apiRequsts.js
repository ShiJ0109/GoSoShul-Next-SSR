import axios from 'axios';
import qs from 'qs';
import requestParams from '../constants/requestParams';

const getAuthToken = () => {
  return JSON.parse(localStorage.getItem('authToken')).access_token;
};

export const GetUserProfile = () => {
  const authToken = getAuthToken();

  return axios
    .get(requestParams.shulUrls.user, {
      headers: { Authorization: `Bearer ${authToken}` }
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const PostSignUp = (values) => {
  return axios
    .post(requestParams.shulUrls.signup, values, {
      headers: {
        'content-type': 'application/json',
        'X-API-KEY': 'CODEX@123',
        Authorization: 'Basic YWRtaW46MTIzNA=='
      },
    })
    .then((response) => {
      console.log(response);
      return {
        stat: 'success',
        data: response.data,
        error: null,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        stat: 'failure',
        data: null,
        error,
      };
    });
};

export const PostLogin = (values) => {
  return axios
    .post(requestParams.shulUrls.login, values, {
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
      console.log(error.response.data);
      return {
        stat: 'failure',
        data: null,
        error,
      };
    });
};

export const GetShulDashboard = (session) => {
  return axios
    .post(requestParams.shulUrls.shulDashboard, { session }, {
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
export const GetProfile = (session) => {
  return axios
    .post(requestParams.shulUrls.getProfile, { session }, {
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
export const SetProfile = (session, id, profile) => {
  return axios
    .post(requestParams.shulUrls.setProfile, { session, id, profile }, {
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

export const SetContact = (session, id, contact) => {
  return axios
    .post(requestParams.shulUrls.setContact, { session, id, contact }, {
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

export const GetCampaignSettings = (session, id) => {
  return axios
    .post(requestParams.shulUrls.getCampaignSettings, { session, id }, {
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

export const SetCampaignSettings = (session, id, campaignSettings) => {
  return axios
    .post(requestParams.shulUrls.setCampaignSettings, { ...campaignSettings, session, id }, {
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

export const SetGoal = (session, id, campaign_goal) => {
  return axios
    .post(requestParams.shulUrls.setCampaignGoal, {session, id, campaign_goal }, {
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

export const SetCampaignUrl = (session, id, url) => {
  return axios
    .post(requestParams.shulUrls.setCampaignUrl, {session, id, url }, {
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

export const GetDonationStat = (session, id) => {
  return axios
    .post(requestParams.shulUrls.getDonationStat, { session, id }, {
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

export const GetShulLists = (values) => {
  return axios
    .post(requestParams.shulUrls.getShulLists, values, {
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

export const GetAllShulInfo = (values) => {
  return axios
    .post(requestParams.shulUrls.getAllShulInfo, values, {
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

export const ChangePassword = (values) => {
  return axios
    .post(requestParams.shulUrls.changePassword, values, {
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
