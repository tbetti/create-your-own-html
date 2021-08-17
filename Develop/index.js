const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const questions = require('./utils/questions');
const createHtml = require('./utils/createHtml');

// Function to write to HTML file
function writeToFile(fileName, data){
  return fs.writeFile(path.join(__dirname, fileName), data);
}

// Run the application
function initialize(){
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile('index.html', createHtml(data));;
    })
    .catch((error) => {
      console.log(error);
    })
}
initialize();