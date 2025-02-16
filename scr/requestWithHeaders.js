const axios = require('axios');

async function fetchDataWithHeaders() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'Custom-Header': 'TestValue'
    },
    params: {
      userId: 1
    }
  });
  return response.config;
}

module.exports = fetchDataWithHeaders;