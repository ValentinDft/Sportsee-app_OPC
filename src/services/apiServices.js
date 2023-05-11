const baseUrl = 'http://localhost:3000/';

const getApiData = (endpoint) => {
  return fetch(baseUrl + endpoint)
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
};

export const getUsersInfo = (userId) => {
  return getApiData('user/' + userId);
};

export const getUsersActivity = (userId) => {
  return getApiData('user/' + userId + '/activity');
};
