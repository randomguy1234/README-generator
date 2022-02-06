// packages needed for this application
const fs= require('fs');
const inquirer= require('inquirer');
const generateMarkdown= require('./utils/generateMarkdown');


// main array of questions for user input
const questions= ['What is the name of your project?', 'What description do you have for your project?',
'Do you need a table of contents?', 'Are installation instructions necessary?', 
'Is there anything to add in terms of how to use the project?', 'Are there any licenses?',
'What is your contribution guideline?', 'Are there any tests for your project?'];

//array of followup questions
const questions2= ['Please select all relevant info for the table of contents.', 
'What are the installition instructions?','Please add the usage info here.', 
'What licenses does this project have/need?', 
'Please describe the tests needed for the project and how to implement them.'];

// TODO: Create a function to write README file
//remember to later call the function or move it elsewhere
function writeToFile(fileName, data) 
{
    
}

//function to initialize app and store readme sections
function init() 
{
    return inquirer.prompt
    ([
        {
            type: 'input',
            name: 'Title',
            message: questions[0],
            //needs validation
            validate: titleInput =>
            {
                if (!titleInput)
                {
                    console.log('Please enter the name of the Project');
                    return false;
                }

                return true;
            }
        },

        {
            type: 'input',
            name: 'Description',
            message: questions[1]  
        },

        {
            type: 'confirm',
            name: 'Contents',
            message: questions[2],
            //needs followup prompt            
        },

        {
            //create option so that only selected choices are filled with details
            type: 'checkbox',
            name: 'contentsItems',
            message: questions2[0],
            choices: ['Installation','Usage', 'Licenses', 'Contribution', 'Tests'],
            when: ({Contents}) =>
            {
                if (Contents)
                {
                    return true;
                }

                return false;
            }
            
        },

        {
            type: 'confirm',
            name: 'Installation',
            message: questions[3]
            //needs followup prompt
        },

        {
            type: 'input',
            name: 'installationInfo',
            message: questions2[1],
            when: ({Installation}) =>
            {
                if (Installation)
                {
                    return true;
                }

                return false;
            }
        },

        {
            type: 'confirm',
            name: 'Usage',
            message: questions[4]
            //needs followup prompt
        },

        {
            type: 'input',
            name: 'usageInfo',
            message: questions2[2],
            when: ({Usage}) =>
            {
                if (Usage)
                {
                    return true;
                }

                return false;
            }
        },

        {
            type: 'confirm',
            name: 'Licenses',
            message: questions[5]
            //needs followup prompt
        },

        {
            type: 'input',
            name: 'licensesInfo',
            message: questions2[3],
            when: ({Licenses}) =>
            {
                if (Licenses)
                {
                    return true;
                }

                return false;
            }
        },

        {
            type: 'input',
            name: 'Contribution',
            message: questions[6]
        },

        {
            type: 'confirm',
            name: 'Tests',
            message: questions[7]
            //needs follup prompt
        },

        {
            type: 'input',
            name: 'testsInfo',
            message: questions2[4],
            when: ({Tests}) =>
            {
                if (Tests)
                {
                    return true;
                }

                return false;
            }
        }
    ])
    .then((answers) => 
    {
        console.log(answers);
    });
}

// Function call to initialize app
init();

//call to generate page below