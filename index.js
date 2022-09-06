import inquirer from './node_modules/inquirer/lib/inquirer.js';
import {generateHTML} from './src/generateHTML.js';
import Manager from './lib/Manager.js';
import Intern from './lib/Intern.js';
import Engineer from './lib/Engineer.js';


const managerQuestions = [
  
    {
      type: 'input',
      name: 'Member_Name',
      message: 'What is the name of the Manager of this team?',
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
    name: 'Member_Name',
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
    name: 'Member_Name',
    message: 'What is the name of this Intern?',
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
  let name = answers.Member_Name;
  let id = answers.Member_Id;
  let email = answers.Member_Email;
  let github = answers.Member_Github;

const engineer = new Engineer(name, id, email, github);

engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub();
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
  let name = answers.Member_Name;
  let id = answers.Member_Id;
  let email = answers.Member_Email;
  let school = answers.Member_School;

const intern = new Intern(name, id, email, school);

intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();

}

function generateManagerCard (answers) {

  let name = answers.Member_Name;
  let id = answers.Member_Id;
  let email = answers.Member_Email;
  let office = answers.Member_Office;

const manager = new Manager(name, id, email, office);

manager.getName();
manager.getId();
manager.getEmail();
manager.getOfficeNumber();

}

inquirer
  .prompt(managerQuestions)
  .then(answers => {
    generateManagerCard(answers);
    nextRole(answers);    
  });