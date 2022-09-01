const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

inquirer
  .prompt([{
      type: 'list',
      name: 'Member_Role',
      message: 'What is the role of the team member you wish to add?',
      choices: ['Employee','Manager','Engineer','Intern']
      },
    {
      type: 'input',
      name: 'Member_Name',
      message: 'What is the name of the team member?',
      default: 'James Bond'
      },
    {
      type: 'number',
      name: 'Member_Id',
      message: 'What is the id number of the team member?',
      default: 007
      },
    {
      type: 'input',
      name: 'Member_Email',
      message: 'What is the Email address of the team member?',
      default: 'James.bond@MI7.com'
      },
    {
      type: 'input',
      name: 'Member_Office',
      message: 'What is the office number of this manager?',
      default: 'Room 006',
      when(answers) {
        return answers.Member_Role === 'Manager'
      },
    },
    {
      type: 'input',
      name: 'Member_Github',
      message: 'What is the Github Username of this Engineer?',
      default: 'Q',
      when(answers) {
        return answers.Member_Role === 'Engineer'
      },
    },
    {
      type: 'input',
      name: 'Member_School',
      message: 'What is the School of this Student?',
      default: 'University of Washington',
      when(answers) {
        return answers.Member_Role === 'Intern'
     },
    }
    
    
    ])
  .then(answers => {
    generateHTML(answers);    
  });