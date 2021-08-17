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
    message: 'What is your occupation?',
    name: 'occupation',
    validate: answer => {
      if(answer != '') return true;
      else return 'Please input your occupation';
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
    message: 'Write a short (~1 paragraph) bio about yourself.',
    name: 'bio',
    validate: answer => {
      if(answer != '') return true;
      else return 'Please enter a bio';
    }
  },
  {
      type: 'input',
      message: 'What is your LinkedIn username?',
      name: 'linkedin',
      validate: answer => {
        if(answer != '') return true;
        else return 'LinkedIn username required';
      }
  },
  {
      type: 'input',
      message: 'What is your Github username?',
      name: 'github',
      validate: answer => {
        if(answer != '') return true;
        else return 'Github username required';
      }
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    validate: answer => {
      const pass = answer.match(/^\S+@\S+$/);
                if(pass) return true;
                else return 'Please enter a valid email';
    }
  },
  {
    type: 'input',
    message: 'Input the URL to your profile. Be sure to include http:// or https:// at the beginning:',
    name: 'profile',
    validate: answer => {
      if(answer != '') return true;
      else return 'Profile URL required. If you do not have one, type N/A';
    }
  }
]

module.exports = questions;