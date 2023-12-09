import client from './client';

const endpoint = client.databaseURL;

const getTerms = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
