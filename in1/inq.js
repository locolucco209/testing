'use strict';
var inquirer = require('inquirer');

inquirer
  .prompt([
    {
        message: 'Pick number 1 - 5',
      type: 'checkbox',
      message: 'Pick number 1 - 5',
      name: 'toppings',
      choices: [
        new inquirer.Separator(' = The Meats = '),
        {
          name: '1'
        },
        {
          name: '2'
        },
        {
          name: '3'
        },
        {
          name: '4'
        },
        {
          name: '5'
        },

      validate: function(answer) {
        if (answer.length < 1) {
          return 'You must choose at least one topping.';
        }
        return true;
      }
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });
