const { sendRequest } = require('../api');
const colors = require('colors');

const API_KEYS = {
  smsRu: process.env.SMSHUB,
};

const URLs = {
  smsRu: 'https://smshub.org/stubs/handler_api.php',
};

const SmsRuService = {
  getBalance: async () => {
    const result = await sendRequest(URLs.smsRu, 'GET', {
      api_key: API_KEYS.smsRu,
      action: 'getBalance',
      currency: 840,
    });
    console.log(colors.blue('SMS-RU Balance:'), colors.green(result));
  },

  buyNumber: async () => {
    const result = await sendRequest(URLs.smsRu, 'GET', {
      api_key: API_KEYS.smsRu,
      action: 'getNumber',
      service: 'tg',
      operator: 'any',
      country: 6,
      maxPrice: 0.25,
      currency: 840,
    });
    if (result && result.startsWith('ACCESS_NUMBER')) {
      const [, id, number] = result.split(':');
      return { id, number };
    } else {
      console.log(colors.red('Failed to buy number:'), result);
      return null;
    }
  },

  checkOtp: async (id) => {
    const result = await sendRequest(URLs.smsRu, 'GET', {
      api_key: API_KEYS.smsRu,
      action: 'getStatus',
      id,
    });
    console.log(colors.yellow('OTP Status:'), result);
  },

  deleteNumber: async (id) => {
    const result = await sendRequest(URLs.smsRu, 'GET', {
      api_key: API_KEYS.smsRu,
      action: 'setStatus',
      status: 8,
      id,
    });
    console.log(colors.red('Number deleted:'), result);
  },
};

module.exports = SmsRuService;
