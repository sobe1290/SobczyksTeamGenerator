const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');


const managerQuestion = [
  
    {
      type: 'input',
      name: 'Manager_Name',
      message: 'What is the name of the team member?',
      },
    {
      type: 'number',
      name: 'Member_Id',
      message: 'What is the id number of the team member?',
      },
    {
      type: 'input',
      name: 'Member_Email',
      message: 'What is the Email address of the team member?',
      },
    {
      type: 'input',
      name: 'Member_Office',
      message: 'What is the office number of this manager?',
    },
];

const engineerQuestion = [
  {
    type: 'input',
    name: 'Engineer_Name',
    message: 'What is the name of the team member?',
    },
  {
    type: 'number',
    name: 'Member_Id',
    message: 'What is the id number of the team member?',
    },
  {
    type: 'input',
    name: 'Member_Email',
    message: 'What is the Email address of the team member?',
    },
  {
    type: 'input',
    name: 'Member_Github',
    message: 'What is the Github Username of this Engineer?',
  },
];

const studentQuestion = [
  {
    type: 'input',
    name: 'Intern_Name',
    message: 'What is the name of the Intern?',
    },
  {
    type: 'number',
    name: 'Member_Id',
    message: 'What is the id number of the team member?',
    },
  {
    type: 'input',
    name: 'Member_Email',
    message: 'What is the Email address of the team member?',
    },
  {
    type: 'input',
    name: 'Member_School',
    message: 'What is the School of this Student?',
  },
];

const additionalQuestion = [
  {
    type: 'list',
    name: 'Member_Role',
    message: 'What is the role of the team member you wish to add?',
    choices: ['Engineer','Intern', 'None']
    },
]

inquirer
  .prompt()
  .then(answers => {
    generateHTML(answers);    
  });