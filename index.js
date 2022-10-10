const fs = require( "fs" );
const inquirer = require( "inquirer" );
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");




////// Array to hold employees/////
let devProArr = [];

//// Intern Call ????///////

addIntQuet = [
    {
        type: 'input',
        name: 'intName',
        message: 'Development Project Intern Name',
        validate: intNameInput => {
            if ( intNameInput && intNameInput.trim().length > 0){
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
        name: 'intId',
        message: 'Development Project Intern ID',
        validate: intIdInput => {
            if ( intIdInput && intIdInput.trim().length > 0){
                return true;
            }
            else {
                console.log('You must have a ID');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'intEmail',
        message: 'Development Project Interns Email:',
        validate: intEmailInput => {
            if ( intEmailInput && intEmailInput.trim().length > 0){
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
        name: 'intSchool',
        message: 'Development Project Interns School Name:',
        validate: intSchoolInput => {
            if ( intSchoolInput && intSchoolInput.trim().length > 0){
                return true;
            }
            else {
                console.log('You must have a Interns School Name');
                return false;
            }
        }
    },
];
function addIntPro(){
    inquirer.prompt(addIntQuet)
    .then(function(data){
        const intName= data.intName;
        const intId= data.intId;
        const intEmail = data.intEmail;
        const intSchool= data.intSchool;
        const devTeamMem = new Intern( intName, intId, intEmail, intSchool);

        devProArr.push( devTeamMem);
        console.log(devProArr)
        addEmployeePro();
    })
}


////// Engineer Call//////

addEngQuet = [
    {
        type: 'input',
        name: 'engName',
        message: 'Development Project Engineer Name',
        validate: engNameInput => {
            if ( engNameInput && engNameInput.trim().length > 0){
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
        name: 'engId',
        message: 'Development Project Engineer ID',
        validate: engIdInput => {
            if ( engIdInput && engIdInput.trim().length > 0){
                return true;
            }
            else {
                console.log('You must have a ID');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engEmail',
        message: 'Development Project Engineer Email:',
        validate: engEmailInput => {
            if ( engEmailInput && engEmailInput.trim().length > 0){
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
        name: 'github',
        message: 'Development Project Engineers Github username:',
        validate: engGithubInput => {
            if ( engGithubInput && engGithubInput.trim().length > 0){
                return true;
            }
            else {
                console.log('You must have a Engineers Github username');
                return false;
            }
        }
    },
];

function addEngPro(){
    inquirer.prompt(addEngQuet)
    .then(function(data){
        const engName= data.engName;
        const engId= data.engId;
        const engEmail = data.engEmail;
        const github= data.github;
        const devTeamMem = new Engineer( engName, engId, engEmail, github);

        devProArr.push( devTeamMem);
        console.log(devProArr)
        addEmployeePro();
    })
}

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
                console.log('You must have a Id');
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