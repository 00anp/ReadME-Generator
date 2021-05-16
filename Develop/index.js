// TODO: Include packages needed for this application
const iquirer = require("iquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        //Validate input to not be empty
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please provide an answer to continue";
            }
        },
    },
    {
        type: "input",
        message: "Please provide a description of your project: ",
        name: "description",
        //Validate input to not be empty
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please provide an answer to continue";
            }
        },
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
        //Validate input to not be empty
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please provide an answer to continue";
            }
        },
    },
    {
        type: "input",
        message: "Provide instructions for use: ",
        name: "usage",
        //Validate input to not be empty
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please provide an answer to continue";
            }
        },
    },
    {
        type: "input",
        message: "Would like other developers to contribute to your project? If yes, you can include guidelines for how to do so: ",
        name: "contribute",
        //Validate input to not be empty
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please provide an answer to continue";
            }
        },
    },
    {
        type: "input",
        message: "If you have tests created, provide examples on how to run them here: ",
        name: "tests",
        //Validate input to not be empty
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please provide an answer to continue";
            }
        },
    },
    {
        type: "input",
        message: "Please enter your GitHub username: ",
        name: "github",
        //Validate input to not be empty
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please provide an answer to continue";
            }
        },
    },
    {
        type: "input",
        message: "Please enter your email address: ",
        name: "email",
        //Validate input to not be empty
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please provide an answer to continue";
            }
        },
    },
    {
        type: "list",
        message: "Please select a license: ",
        name: "license",
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
        //Validate input to not be empty
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please provide an answer to continue";
            }
        },
    },
])
.then(({
    title,
    description,
    installation,
    usage,
    contribute,
    tests,
    github,
    email,
    license
}) => {
    const readmeTemplate = `# ${title}
    ## Table of Contents
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[Contributions](#contributions)
    *[Tests](#tests)
    *[License](#license)
    *[Questions](#questions)
    ## Description
    ${description}
    ## Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contributions
    ${contribute}
    ## Tests
    ${tests}
    ## License
    ${license}
    ## Questions
    GitHub: ${github}
    E-mail: ${email}`;
//Write File function
writeToFile(title, readmeTemplate);
});

// TODO: Create a function to write README file
function writeToFile(title, readmeTemplate) { 
    //fs
    fs.writeFile(`./${title.toLowerCase().split('').join('')}.md`, readmeTemplate, (err) =>{
        if(err){
            console.log(err);
        }
        console.log("Your README file has been generated.")
    })
};

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
