const questions = [{
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: answer => {
      if(answer != '') return true;
      else return 'Name is required';
    }
  },
  {
    type: 'input',
    message: 'Where are you from?',
    name: 'location',
    validate: answer => {
      if(answer != '') return true;
      else return 'Please input where you currently reside';
    }
  },
  {
    type: 'input',
    message: 'What are your favorite hobbies? (Separate each with a comma)',
    name: 'hobby',
    validate: answer => {
      if(answer != '') return true;
      else return 'Please enter at least one hobby';
    }
  },
  {
      type: 'input',
      message: 'What is your LinkedIn username?',
      name: 'linkedIn',
      validate: answer => {
        if(answer != '') return true;
        else return 'LinkedIn username required. If you do not have one, type N/A';
      }
  },
  {
      type: 'input',
      message: 'What is your Github username?',
      name: 'github',
      validate: answer => {
        if(answer != '') return true;
        else return 'Github username required. If you do not have one, type N/A';
      }
  },
]

module.exports = questions;