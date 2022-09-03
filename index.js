const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');


const managerQuestions = [
  
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
    {
      type: 'list',
      name: 'Member_Role',
      message: 'What is the role of the team member you wish to add?',
      choices: ['Engineer','Intern', 'None']
      },
];

const engineerQuestions = [
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
  {
    type: 'list',
    name: 'Member_Role',
    message: 'What is the role of the team member you wish to add?',
    choices: ['Engineer','Intern', 'None']
    },
];

const internQuestions = [
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
  {
    type: 'list',
    name: 'Member_Role',
    message: 'What is the role of the team member you wish to add?',
    choices: ['Engineer','Intern', 'None']
    },
];

function nextRole (answers) {
  if (answers.Member_Role === 'Engineer') {
    engineerAsk();
  } else if (answers.Member_Role === 'Intern'){
    internAsk();
  } else {
    return;
  };
};

function engineerAsk () {
  inquirer
    .prompt(engineerQuestions)
    .then(answers => {
      generateEngineerCard();
      nextRole(answers);
    });
};

function internAsk () {
  inquirer
    .prompt(internQuestions)
    .then(answers => {
      generateInternCard();
      nextRole(answers);
    });
};



// Need to wrap all in an async/await

inquirer
  .prompt(managerQuestions)
  .then(answers => {
    generateManagerCard();
    nextRole(answers);
    generateHTML();    
  });