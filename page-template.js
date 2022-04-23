function template(projectData){
const [Description, Title,Content,Usage, ...rest] =projectData
     console.log(projectData)

    return`
# Title
${Title}

## Description
 ${Description}


## Table of Contents
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