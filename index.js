// packages needed for this application
const fs= require('fs');
const inquirer= require('inquirer');
const generateMarkdown= require('./utils/generateMarkdown');


// main array of questions for user input
const mainQuestions= ['What is the name of your project?(required)', 'What description do you have for your project?(required)', 
'What are the installition instructions?(required)','Do you have any screenshots/demo videos of the project?', 
'Who is responsible for making the project?(required)', 'Are there any licenses?'];

//array of optional questions
const optQuestions= ['Do you want to enter a table of contents?(optional)', 
'Do you have any badges to add to the project?(optional)', 'Does the project have a lot of features?(optional)', 
'Do you want other developers to support your project?(optional)', 'Are there any tests for the project?(optional)'];

//array of followup responses to some questions
const moreQuestions= [ 
'Please give a short description as well as the path to the screenshot/demo video link.',
'Please enter your licences.',
'Please enter the table of contents', 'Please enter your badges.', 
'Can you describe the features the project has?',
 'How would you like other developers to support your project?', 'What tests do your project have?'];

// TODO: Create a function to write README file
//remember to later call the function or move it elsewhere
function writeToFile(fileName, data) 
{
    fs.writeFile(`./dist/${fileName}`, data, (err) => 
    {
        if (err) console.log(err);
        console.log('The file has been created!');
    });
}

//function to initialize app and store readme sections
function initSetup() 
{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: mainQuestions[0],
            validate: titleInput => //checks for empty string
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
            name: 'description',
            message: mainQuestions[1],
            validate: descInput => //checks for empty string
            {
                if (!descInput)
                {
                    console.log('Please enter the description of the Project');
                    return false;
                }

                return true;
            }  
        },

        {
            type: 'input',
            name: 'installation',
            message: mainQuestions[2],
                       
        },

        {
            type: 'confirm',
            name: 'demo',
            message: mainQuestions[3]
            
        },

        {
            type: 'input',
            name: 'demoInfo',
            message: moreQuestions[0],
            when: ({Demo}) =>
            {
                if (Demo)
                    return true;
                
                return false;
            }
        },

        {
            type: 'input',
            name: 'credits',
            message: mainQuestions[4]
        },

        {
            type: 'confirm',
            name: 'licenses',
            message: mainQuestions[5]
            //needs followup prompt
        },

        {
            type: 'input',
            name: 'licensesInfo',
            message: moreQuestions[1],
            when: ({licenses}) =>
            {
                if (licenses)
                    return true;
                
                return false;
            }
        },

        {
            type: 'confirm',
            name: 'contents',
            message: optQuestions[0]
        },

        {
            type: 'input',
            name: 'contentsInfo',
            message: moreQuestions[2],
            when: ({contents}) =>
            {
                if (contents)
                    return true;

                return false;
            }
        },

        {
            type: 'confirm',
            name: 'badges',
            message: optQuestions[1]
        },

        {
            type: 'input',
            name: 'badgesInfo',
            message: moreQuestions[3],
            when: ({badges}) =>
            {
                if (badges)
                    return true;

                return false;
            }
        },
        
        {
            type: 'confirm',
            name: 'features',
            message: optQuestions[2]
        },

        {
            type: 'input',
            name: 'featuresInfo',
            message: moreQuestions[4],
            when: ({features}) =>
            {
                if (features)
                    return true;

                return false;
            }
        },

        {
            type: 'confirm',
            name: 'contribution',
            message: optQuestions[3]
        },

        {
            type: 'input',
            name: 'contributionInfo',
            message: moreQuestions[5],
            when: ({contribution}) =>
            {
                if (contribution)
                    return true;

                return false;
            }
        },

        {
            type: 'confirm',
            name: 'tests',
            message: optQuestions[4]
            //needs followup prompt
        },

        {
            type: 'input',
            name: 'testsInfo',
            message: moreQuestions[6],
            when: ({tests}) =>
            {
                if (tests)
                    return true;
                
                return false;
            }
        }

    ]);
}


// Function call to initialize app
initSetup()
    .then(blueprint => 
        {
            console.log(blueprint);
            return writeToFile('README.md', generateMarkdown(blueprint));
        })
    .catch(error =>
        {
            console.log(error);
        });
       
    

//call to generate page below