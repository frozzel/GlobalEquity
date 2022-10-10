const fs = require( "fs" );
const inquirer = require( "inquirer" );
const Manager = require("./lib/Manager");




////// Array to hold employees/////
let devProArr = [];

/// Manager Call ////////

addMngQuet = [
    {
        type: 'input',
        name: 'mngName',
        message: 'Development Project Manager Name',
        validate: mngNameInput => {
            if ( mngNameInput && mngNameInput.trim().length > 0){
                return true;
            }
            else {
                console.log('You must have a name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'mngId',
        message: 'Development Project Manager ID',
        validate: mngIdInput => {
            if ( mngIdInput && mngIdInput.trim().length > 0){
                return true;
            }
            else {
                console.log('You must have a name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'mngEmail',
        message: 'Development Project Manager Email:',
        validate: mngEmailInput => {
            if ( mngEmailInput && mngEmailInput.trim().length > 0){
                return true;
            }
            else {
                console.log('You must have a Email Address');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'mngPhone',
        message: 'Development Project Manager Office Number:',
        validate: mngPhoneInput => {
            if ( mngPhoneInput && mngPhoneInput.trim().length > 0){
                return true;
            }
            else {
                console.log('You must have a Office Number');
                return false;
            }
        }
    },
];

function addMngPro(){
    inquirer.prompt(addMngQuet)
    .then(function(data){
        const mngName= data.mngName;
        const mngId= data.mngId;
        const mngEmail = data.mngEmail;
        const mngPhone= data.mngPhone;
        const devTeamMem = new Manager( mngName, mngId, mngEmail, mngPhone);

        devProArr.push( devTeamMem);
        console.log(devProArr)
        addEmployeePro();
    })
}

///// Employee Call ///////
addEmpQuet= [
    {
        type: 'list',
        name: 'empChoices',
        message: 'Choose which team member to add!',
        choices: ['Add a Manager to the project', 'Add a Engineer to the project', 'Add a Intern to the project', 'Done create my team!'],
        validate: choiceInput => {
            if (choiceInput=== 'Add a Manager to the project' || choiceInput === 'Add a Engineer to the project' || choiceInput===  'Add a Intern to the project'){
                return true;
            }
            else if (choiceInput === 'Done create my team!'){
                return true;
            }
            else {
                console.log('You must choose at least one!!');
                return false;
            }
        }
    }
];


function addEmployeePro(){
    inquirer.prompt(addEmpQuet)
    .then(function(data)
    {
        switch (data.empChoices){
            case 'Add a Manager to the project':
                addMngPro();
                break;
            case 'Add a Engineer to the project':
                addEngPro();
                break;
            case 'Add a Intern to the project':
                    addIntPro();
                    break;
            case 'Done create my team!':
                        genHtmlFile();
                        break;
        }
    })
}

// start the process to display in with inquirer
function init(){
    inquirer.prompt([
        {
            message: 'Please name your development team:',
            name: 'devName',
            validate: devNameInput => {
                if(devNameInput && devNameInput.trim().length > 0){
                    return true;
                } else {
                    console.log('Please name you Development Team');
                    return false;
                };
            }
        }
    ])
    .then( function(data){
        const devName = data.devName;
        devProArr.push(devName);
        
        addEmployeePro();
    })
}






init();