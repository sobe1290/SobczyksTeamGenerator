import inquirer from './node_modules/inquirer/lib/inquirer.js';
import {generateHTML} from './src/generateHTML.js';


const managerQuestions = [
  
    {
      type: 'input',
      name: 'Manager_Name',
      message: 'What is the name of the Manager of the Team?',
      },
    {
      type: 'input',
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
    message: 'What is the name of this Engineer?',
    },
  {
    type: 'input',
    name: 'Member_Id',
    message: 'What is the id number of this Engineer?',
    },
  {
    type: 'input',
    name: 'Member_Email',
    message: 'What is the Email address of this Engineer?',
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
    choices: ['Engineer','Intern', 'None, Exit and Create HTML.']
    },
];

const internQuestions = [
  {
    type: 'input',
    name: 'Intern_Name',
    message: 'What is the name of the Intern?',
    },
  {
    type: 'input',
    name: 'Member_Id',
    message: 'What is the id number of this Intern?',
    },
  {
    type: 'input',
    name: 'Member_Email',
    message: 'What is the Email address of this Intern?',
    },
  {
    type: 'input',
    name: 'Member_School',
    message: 'What is the School of this Intern?',
  },
  {
    type: 'list',
    name: 'Member_Role',
    message: 'What is the role of the team member you wish to add?',
    choices: ['Engineer','Intern', 'None, Exit and Create HTML.']
    },
];

function nextRole (answers) {
  if (answers.Member_Role === 'Engineer') {
    engineerAsk();
  } else if (answers.Member_Role === 'Intern'){
    internAsk();
  } else {
    generateHTML(answers);
  };
};


function engineerAsk () {
  inquirer
    .prompt(engineerQuestions)
    .then(answers => {
      generateEngineerCard(answers);
      nextRole(answers);      
    });
};

function generateEngineerCard (answers) {
  console.log(answers.Engineer_Name, answers.Member_Id, answers.Member_Email, answers.Member_Github, answers.Member_Role)
}

function internAsk () {
  inquirer
    .prompt(internQuestions)
    .then(answers => {
      generateInternCard(answers);
      nextRole(answers);
    });
};


function generateInternCard (answers) {
  console.log(answers.Intern_Name, answers.Member_Id, answers.Member_Email, answers.Member_School, answers.Member_Role)
}

// Need to wrap all in an async/await? Or will sequence work?


function generateManagerCard (answers) {
  console.log(answers.Manager_Name, answers.Member_Id, answers.Member_Email, answers.Member_Office, answers.Member_Role)
}

inquirer
  .prompt(managerQuestions)
  .then(answers => {
    generateManagerCard(answers);
    nextRole(answers);    
  });