const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./page-template.js');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the name of this project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter project name!');
          return false;
        }
      }
    },
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
   
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you use for this project? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter published site link for your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a published site link!');
            return false;
          }
        }
      },
      
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    const page = generatePage(portfolioData);

   fs.writeFile('./dist/readme.md',page, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Page created! Check out ReadMe in this directory to see it!');

})

})
