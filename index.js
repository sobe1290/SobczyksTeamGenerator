import inquirer from './node_modules/inquirer/lib/inquirer.js';
import * as genHTML from './src/generateHTML.js';
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
    genHTML.generateHTML(answers);
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

const htmlEngineerCardElement = `
<div class="card">
<div class="container">
    <div class="topHalf">
        <h4>${engineer.getName()}</h4>
        <p>Role:${engineer.getRole()}</p>
    </div>
    <div class="bottomHalf">
        <p>ID: ${engineer.getId()}</p>
        <p><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
        <p><a href="https://github.com/${engineer.getGithub()}" target="_blank">Github Link</a></p>
    </div>    
</div>
</div>`


genHTML.cardArray.push(htmlEngineerCardElement);
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

const htmlInternCardElement = `
<div class="card">
<div class="container">
    <div class="topHalf">
        <h4>${intern.getName()}</h4>
        <p>Role:${intern.getRole()}</p>
    </div>
    <div class="bottomHalf">
        <p>ID: ${intern.getId()}</p>
        <p><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
        <p>${intern.getSchool()}</p>
    </div>    
</div>
</div>`


genHTML.cardArray.push(htmlInternCardElement);

}

function generateManagerCard (answers) {

  let name = answers.Member_Name;
  let id = answers.Member_Id;
  let email = answers.Member_Email;
  let office = answers.Member_Office;

const manager = new Manager(name, id, email, office);

const htmlManagerCardElement = `
<div class="card">
    <div class="container">
        <div class="topHalf">
            <h4>${manager.getName()}</h4>
            <p>Role:${manager.getRole()}</p>
        </div>
        <div class="bottomHalf">
            <p>ID: ${manager.getId()}</p>
            <p><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p>Office Number ${manager.getOfficeNumber()}</p>
        </div>    
    </div>
</div>`




genHTML.cardArray.push(htmlManagerCardElement);

}

inquirer
  .prompt(managerQuestions)
  .then(answers => {
    generateManagerCard(answers);
    nextRole(answers);    
  });