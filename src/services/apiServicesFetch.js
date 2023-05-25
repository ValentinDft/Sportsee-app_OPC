const baseUrl = 'http://localhost:3000/';

const getApiData = (endpoint) => {
  return fetch(baseUrl + endpoint)
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
};

export const getUsersInfoWithFetch = (userId) => {
  return getApiData('user/' + userId);
};

export const getUsersActivityWithFetch = (userId) => {
  return getApiData('user/' + userId + '/activity');
};

export const getUsersAverageSessionsWithFetch = (userId) => {
  return getApiData('user/' + userId + '/average-sessions');
};

export const getUsersPerformanceWithFetch = (userId) => {
  return getApiData('user/' + userId + '/performance');
};
