const readline = require('readline-sync');
const { showSmsRuMenu } = require('./smsRuMenu');
const { showSmsActivateMenu } = require('./smsActivateMenu');
const SmsRuService = require('../services/smsRuService');
const SmsActivateService = require('../services/smsActivateService');
const colors = require('colors');

const showMainMenu = async () => {
  while (true) {
    console.log('\n### Main Menu ###'.rainbow);
    console.log('1. SMS-RU'.brightGreen);
    console.log('2. SMS-Activate'.brightGreen);
    console.log('3. Exit'.brightGreen);

    const choice = readline.question('Choose a service (1-3): '.brightWhite);

    if (choice === '1') {
      await SmsRuService.getBalance();
      await showSmsRuMenu();
    } else if (choice === '2') {
      await SmsActivateService.getBalance();
      await showSmsActivateMenu();
    } else if (choice === '3') {
      console.log(colors.cyan('👋 Exiting the bot. See you next time!'));
      console.log(colors.green('Subscribe: https://t.me/HappyCuanAirdrop.'));
      process.exit(0);
      break;
    } else {
      console.log(colors.yellow('Invalid option, try again.'));
    }
  }
};

module.exports = { showMainMenu };
