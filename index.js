const fs = require( "fs" );
const inquirer = require( "inquirer" );




////// Array to hold employees/////
let devProArr = [];

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
        console.log(devProArr)
        // addMngPro();
    })
}






init();