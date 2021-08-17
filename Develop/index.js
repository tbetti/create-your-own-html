const inquirer = require('inquirer');
const questions = require('./utils/questions');
const { createHtml, writeToFile } = require('./utils/createHtml')


// Run the application
function initialize(){
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile('index.html', createHtml(data));
    })
    .catch((error) => {
      console.log(error);
    })
}
initialize();