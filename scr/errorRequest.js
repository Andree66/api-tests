const axios = require('axios');

async function fetchInvalidUrl() {
  try {
    await axios.get('https://invalid-url.example.com');
  } catch (error) {
    return error.message;
  }
}
module.exports = fetchInvalidUrl;