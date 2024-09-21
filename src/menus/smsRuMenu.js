require('colors');
const readline = require('readline-sync');
const SmsRuService = require('../services/smsRuService');

const showSmsRuMenu = async () => {
  console.log('\n### SMS-RU Menu ###'.brightYellow);
  console.log('1. Buy Number'.brightGreen);
  console.log('2. Check OTP'.brightGreen);
  console.log('3. Delete Number'.brightGreen);
  console.log('4. Back to Main Menu'.brightGreen);

  const choice = readline.question('Choose an option (1-4): '.brightWhite);

  if (choice === '1') {
    const { id, number } = (await SmsRuService.buyNumber()) || {};
    if (id && number) {
      console.log(colors.green(`Number purchased: ${number} (ID: ${id})`));
      SmsRuService.checkOtp(id);
    }
  } else if (choice === '2') {
    const id = readline.question('Enter the ID to check OTP: '.brightWhite);
    SmsRuService.checkOtp(id);
  } else if (choice === '3') {
    const id = readline.question('Enter the ID to delete: '.brightWhite);
    SmsRuService.deleteNumber(id);
  }
};

module.exports = { showSmsRuMenu };
