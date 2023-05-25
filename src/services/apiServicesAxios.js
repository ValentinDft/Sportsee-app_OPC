import axios from 'axios';

const baseUrl = 'http://localhost:3000/';

const getApiData = (endpoint) => {
  return axios
    .get(baseUrl + endpoint)
    .then((response) => response.data.data)
    .catch((error) => {
      console.error(error);
    });
};

export const getUsersInfoWithAxios = (userId) => {
  return getApiData('user/' + userId);
};

export const getUsersActivityWithAxios = (userId) => {
  return getApiData('user/' + userId + '/activity');
};

export const getUsersAverageSessionsWithAxios = (userId) => {
  return getApiData('user/' + userId + '/average-sessions');
};

export const getUsersPerformanceWithAxios = (userId) => {
  return getApiData('user/' + userId + '/performance');
};
