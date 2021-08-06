const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const questions = require('./utils/questions');

inquirer
  .prompt(questions)
  .then((data) => {
    console.log(data);
  });
