const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./utils/generateMarkDown.js')
const util = require('util')
const writeFile = util.promisify(fs.writeFile)


const questions = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "projectDescription",
            message: "Please describe your project."
        },
        {
            type: "input",
            name: "userName",
            message: "What is your GitHub user name?"
        },
        {
            type: "input",
            name: "installInstructions",
            message: "Please provide installation instructions."
        },
        {
            type: "input",
            name: "projectUsage",
            message: "Please describe you applications usage."
        },
        {
            type: "list",
            name: "projectLicense",
            message: "What license should your project use?",
            choices: ["MIT","APACHE 2.0","GBL 3.0","BSD 3","None"]
        },
        {
            type: "input",
            name: "Contributing",
            message: "Please describe contributors and how to contribute if open source."
        },
        {
            type: "input",
            name: "projectTests",
            message: "Please describe any tests for this project."
        },
    ])

 

    questions()
    .then((data) => writeFile('generatedREADME.md', generateMarkDown(data)))
    .then(() => console.log('Successful!'))
    .catch((err) => console.error(err));
