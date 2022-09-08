 # Sobczyk's Team Profile Generator    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Project Description 

  This is a command line application to help generate a html page, with styling, for a team profile. In this release, a user can add a Manager, Engineer, or an Intern. 

  # Table of Contents

  - [Installation](#installation)

  - [Usage](#usage)

  - [License](#license)

  - [Contributing](#contributing)

  - [Tests](#tests)

  - [Questions](#questions)

  - [Demonstration](#demonstration)

    
  ## Installation 

  Node.js a javascript runtime which is required to run this project. Download Node.js at https://nodejs.org/dist/v16.17.0/node-v16.17.0-x64.msi. 

  Inquirer is an additional library that is used in this project. Once the repository for this page is cloned from Github, open a terminal in the same folder as the project. Run the following command to install the Inquirer Library:

  Jest is also a library that is used for testing this application. See the tests section below.

  ```
  npm install
  ```

  ## Usage 

  To run this application, open a terminal in the same folder as the project. Run the command:  

  ```
  node index.js
  ```

  A series of prompts will then appear one at a time to help you build your team. By default, questions are asked about the manager first. After the manager questions are asked a user can then answer questions to add an Engineer or Intern. If a user is finished, they can select none and exit.

  ## License 

  MIT License

  ### About this License 

  Copyright 2022, Patrick Sobczyk

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  [Link to the MIT Webpage](https://www.mit.edu/~amini/LICENSE.md)

  ## Contributing 

  To report an error or bug, request a feature, contribute code and documentation, or to submit and review issues, contact me by email at sobczyk1290@gmail.com to become a contributor to the project.

  ## Tests 

  Tests are written to check the four main classes that are used in this application. The tests cover the Employee, Manager, Intern, and Engineer classes. The test were written to use Jest to run them.

  Jest package information can be found here: [Link to the Jest NPM page](https://www.npmjs.com/package/jest)

  To run the tests, type in the following command:

  ```
  npm test
  ```

  ## Questions 

  For questions contact my via Github at https://github.com/sobe1290 or my email at sobczyk1290@gmail.com.

  ## Demonstration

  Here is a link to a video walkthrough of how to use it:

  

  An example output has been added to the repo. "dist/Example Output.png" is the example output screenshot. "dist/generated.html" is the example html file output. See below screenshot.
