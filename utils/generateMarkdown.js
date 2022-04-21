// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
  if (!license)
  {
    return '';
  }

  return; //get license badge and return it
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{
  if (!license)
  {
    return '';
  }

  return; //get license link and return it
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
  if (!license)
  {
    return '';
  }

  return; //get license section of readme and return it
}

// TODO: Create a function to generate markdown for README
//the set-up for the readme file is here
//contents needs format: - [<section>](#<section>)
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ### Contents
  - [${data.contentsInfo}](#${data.contentsInfo})

  ## Installation Guide
  ${data.installation}

  ### Screenshot-Or-Demo Video
  ${data.demoInfo}

  ## Licenses
  ${data.licenses}

  ## Credits
  ${data.credits}

`;
}

module.exports = generateMarkdown;
