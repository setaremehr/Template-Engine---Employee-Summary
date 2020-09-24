const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlRenderer = require('./lib/htmlRenderer');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


let employees = [];

async function addManager() {
    const data = await inquirer.prompt([
        {
         type: 'input',
            message: "what is the manager's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: 'what is the manager email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: "what is the manager's id?",
            name: 'id'
        },
        {
            type: 'number',
            message: "what is the manager's office number?",
            name: 'officeNumber'
        },
    ]);


   
            const name = data.name
            const email = data.email
            const id = data.id
            const officeNumber = data.officeNumber
            const newManager = new Manager(name, id, email, officeNumber)
            employees.push(newManager)
            addMembers();
       
}

async function addEngineer() {
    const data = await inquirer.prompt([
        {
            type: 'input',
            message: "what is the engineer's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "what is the engineer's id?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the engineer's email address?",
            name: 'email'
        },
        {
            type: "input",
            message: "What is this engineer's Github profile?",
            name: "github"
        }
    ])
        // .then(data => {
            console.log(data);
            const name = data.name
            const id = data.id
            const email = data.email
            const github = data.github
            const newEngineer = new Engineer(name, id, email, github)
            employees.push(newEngineer)
            addMembers();
        // });
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: 'input',
            message: "what is the intern's id?",
            name: 'id'
        },
        {
            type: "input",
            message: "What is the intern's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the intern's school?",
            name: "school"
        }
    ])
        .then(data => {
            const name = data.name
            const id = data.id
            const email = data.email
            const school = data.school
            const newIntern = new Intern(name, id, email, school)
            employees.push(newIntern)
            addMembers();

        });
}

async function addMembers() {
    const data = await inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add more team members?',
            choices: [
                "Yes, add a manager",
                "Yes, add an engineer",
                "Yes, add an intern",
                "No, it is already completed"
            ],
            name: "addMoreMember"
        }
    ])
        // .then(data => {
            switch (data.addMoreMember) {
                case 'Yes, add an engineer':
                    addEngineer();
                    break;

                    case 'Yes, add a manager':
                        addManager();
                        break;

                case ('Yes, add an intern'):
                    addIntern();
                    break;

                case ('No, it is already completed'):
                    console.log("i am here");
                    writehtml();
                    break;
            }
        // });
       
}
// addManager();
addMembers();

     function writehtml (){
        console.log("say somthing");
        console.log(employees);
//         fs.writeFile('./finalHtml/final.html', 'utf8', function(err){
//     if (err) {
//         throw new Error(err);
//       }
// });
const $html = htmlRenderer(employees);
console.log($html);
fs.writeFileSync(path.join("finalhtml","final.html"),$html);
     }



// const htmlRen = htmlRenderer(employees)
// fs.writeFile('./finalHtml/final.html', 'utf8', function(err){
//     if (err) {
//         throw new Error(err);
//       }
// });
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! `
