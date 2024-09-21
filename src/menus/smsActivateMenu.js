require('colors');
const readline = require('readline-sync');
const SmsActivateService = require('../services/smsActivateService');

const showSmsActivateMenu = async () => {
  console.log('\n### SMS-Activate Menu ###'.brightYellow);
  console.log('1. Buy Number'.brightGreen);
  console.log('2. Check Activations'.brightGreen);
  console.log('3. Back to Main Menu'.brightGreen);

  const choice = readline.question('Choose an option (1-3): '.brightWhite);

  if (choice === '1') {
    await SmsActivateService.buyNumber();
  } else if (choice === '2') {
    await SmsActivateService.checkActivations();
  }
};

module.exports = { showSmsActivateMenu };
