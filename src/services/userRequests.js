import axios from 'axios';
import requestParams from '../constants/requestParams';

const getAuthToken = () => {
  return JSON.parse(localStorage.getItem('authToken')).access_token;
};

export const GetRef = (ref_token) => {
  return axios
    // // debug mode for Tagging
    // .post('http://192.168.108.83:8035/gososhul/user/get_ref', { ref_token }, {
    .post(requestParams.userUrls.getRef, { ref_token }, {
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

export const GetAllUserInfo = (values) => {
  return axios
    .post(requestParams.userUrls.getAllUserInfo, values, {
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

export const PostSignUp = (values) => {
  return axios
    .post(requestParams.userUrls.signup, values, {
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
  // // debug mode for PostLogin
  //   .post('http://192.168.108.83:8035/gososhul/login', values, {
    .post(requestParams.userUrls.login, values, {
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

export const PostDonate = (values) => {
  return axios
    .post(requestParams.userUrls.postDonate, values, {
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

export const PostTag = (values) => {
  return axios
    .post(requestParams.userUrls.postTag, values, {
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

export const setPersonalInfo = (session, id, contact) => {
  return axios
    .post(requestParams.userUrls.setPersonalInfo, {...contact, session, id }, {
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

export const setProfileSettings = (session, id, settings) => {
  return axios
    .post(requestParams.userUrls.setProfileSettings, {...settings, session, id }, {
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

export default GetRef;
