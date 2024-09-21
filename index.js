require('dotenv').config();
const colors = require('colors');
const { showMainMenu } = require('./src/menus/mainMenu');
const { displayHeader } = require('./src/ui');

(async () => {
  displayHeader();
  console.log(colors.cyan('Starting SMS service application...'));
  await showMainMenu();
})();
