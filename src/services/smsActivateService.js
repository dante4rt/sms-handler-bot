const { sendRequest } = require('../api');
const colors = require('colors');

const API_KEYS = {
  smsActivate: process.env.SMSACTIVATE,
};

const URLs = {
  smsActivate: 'https://api.sms-activate.io/stubs/handler_api.php',
};

const SmsActivateService = {
  getBalance: async () => {
    const result = await sendRequest(URLs.smsActivate, 'GET', {
      api_key: API_KEYS.smsActivate,
      action: 'getBalance',
    });
    console.log(colors.blue('SMS-Activate Balance:'), colors.green(result));
  },

  buyNumber: async () => {
    const result = await sendRequest(URLs.smsActivate, 'GET', {
      api_key: API_KEYS.smsActivate,
      action: 'getNumber',
      service: 'tg',
      operator: 'axis',
      country: 6,
      maxPrice: 30,
    });
    console.log(colors.cyan('Service purchase result:'), result);
  },

  checkActivations: async () => {
    const result = await sendRequest(URLs.smsActivate, 'GET', {
      api_key: API_KEYS.smsActivate,
      action: 'getActiveActivations',
    });
    console.log(colors.magenta('Active activations:'), result);
  },
};

module.exports = SmsActivateService;
