// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Andrew.')

// fs.appendFileSync('notes.txt', ' I live in Philadelphia ')
// Challenge: Append a message to notes.txt
// 
// 1. Use appendFileSync to append the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the append text

// const add = require('./utils.js')

// const sum = add(4, -2)
// console.log(sum);


// Challenge: define and use a functin in a new file
// 
// 1. Create a new file called notes.js
// 2 .Create getNotes function that returns "Your notes.."
// 3. Export getNotes function 
// 4. from app.js load in and call the function printing message to console
// const chalk = require('chalk')
// const getNotes = require('./notes')
// const msg = getNotes()

// console.log(msg);

// const greenMsg = chalk.green('Success!')
// console.log(greenMsg)

import chalk from 'chalk';
import getNotes from './notes.js';

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.green.inverse.bold('Success!');
console.log(greenMsg);
