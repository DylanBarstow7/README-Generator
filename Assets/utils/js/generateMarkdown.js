// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license ==="Apache 2.0") {
    return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } 
  else if (license === "GNU GPL v2") {
    return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
  }
  else if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else (license === "No License") 
    return ( ``)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `
# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Usage](#Usage)
- [Installation](#Installation)
- [Contributions](#Contributions)
- [Testing](#Testing)
- [Questions / Contacts](#Contacts)
- [License](#License)
## Usage
${data.usage}
## Installation
${data.installation}
## Contributions
${data.contribution}
## Test
${data.test}
## Contact
For enquiries contact me at ${data.email}. 
To see other projects, please visit https://github.com/${data.username}/.
## License
${data.license}
`;
}

module.exports = generateMarkdown;
