const nameEl = $("#name");
const locationEl = $("#location");
const hobbyEl = $("#hobby");
const linkedinEl = $("#linkedin");

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      message: 'Where are you from?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is your favorite hobby?',
      name: 'hobby',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn username?',
        name: 'linkedIn',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'linkedin',
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
