const axios = require('axios');

async function fetchMockData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return { error: 'Request failed' };
  }
}

module.exports = fetchMockData;