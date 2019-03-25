const chalk = require('chalk');
var moment = require('moment');

// console.log(chalk.blue.underline(moment().format('dddd')));

if (moment().format('HH') < 12) {
    console.log(chalk.yellow.underline(moment().format('dddd')));
    console.log(chalk.yellow.underline('Good Morning!'));
} else if (moment().format('HH') >= 12 && moment().format('HH') < 17) {
    console.log(chalk.red.underline(moment().format('dddd')));
    console.log(chalk.red.underline('Good Afternoon!'));
} else {
    console.log(chalk.blue.underline(moment().format('dddd')));
    console.log(chalk.blue.underline('Good Evening!'));
}