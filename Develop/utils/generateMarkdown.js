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
function generateMarkdown(data) {
  return `# ${data.title}

          ## ${data.description}

          ## ${data.contents}
          ${data.contentsInfo}

          ### ${data.demo}
          ${data.demoInfo}

          ## ${data.credits}

          ## ${data.license}

`;
}

module.exports = generateMarkdown;
