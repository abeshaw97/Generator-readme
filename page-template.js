function template(projectData){
    console.log(projectData)
    const{Title,projects}=projectData
// const [Description, Title,Content,Usage]=projectData
    console.log (Title) 
    console.log(Description)

return 
`
#Title
${Title}

## Description
 ${Description}


// ## Table of Contents
-[Description](#Description)
-[Installation](#Installation)
-[Usage](#Usage)
-[Questions](#Questions)

## Installation
${installation}

## Usage
${Usage}


## Questions
${rest}
    `;
}

module.exports= template;