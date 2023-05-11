import axios from 'axios';

const baseUrl = 'http://localhost:3000/';

const getApiDataAxios = (endpoint) => {
  return axios
    .get(baseUrl + endpoint)
    .then((response) => response.data.data)
    .catch((error) => {
      console.error(error);
    });
};

export const getUsersInfoWithAxios = (userId) => {
  return getApiDataAxios('user/' + userId);
};

export const getUsersActivityWithAxios = (userId) => {
  return getApiDataAxios('user/' + userId + '/activity');
};
