const axios = require('axios');
const colors = require('colors');

const sendRequest = async (url, method, params = {}) => {
  try {
    const response = await axios({ url, method, params });
    return response.data;
  } catch (error) {
    console.error(colors.red('Error: '), error.message);
    return null;
  }
};

module.exports = { sendRequest };
