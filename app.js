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

// import chalk from 'chalk';
// import getNotes from './notes.js';
 
// import Store from 'yars';


// const msg = getNotes();
// console.log(msg);
// // change style
// const greenMsg = chalk.red.inverse.bold('ERROR!');
// console.log(greenMsg);
// console.log(process.argv[2])
// console.log(yargs.argv)

// if(command === 'add') {
//     console.log('adding note!') 
// } else if (command === 'remove') {
//             console.log('Removeing note!')
// }

// import chalk from 'chalk';
// import { getNotes } from './notes.js';
// import yargs from 'yargs';
// import { hideBin } from 'yargs/helpers';

// const argv = yargs(hideBin(process.argv)).argv;

// const msg = getNotes();
// console.log(msg);

// const greenMsg = chalk.green('Success!');
// console.log(greenMsg);

// console.log(argv.title);

// Create list command 
// yargs.command({
//     command: 'list',
//     discribe: 'List your notes',
//     handler: function () {
//         console.log('listing not all notes')
//     }
// })

// // create read comnadd

// yargs.command({
//     comnand: 'read',
//     discribe: 'Read a note',
//     handler: function () {
//         console.log('Reading a note')
//     }
// })

// console.log(yargs.argv)
// Import required modules
// Import required modules
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getNotes, listNotes, readNote } from './notes.js';

// Initialize yargs to parse command-line arguments
yargs(hideBin(process.argv))
  // Define the 'add' command
  .command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title', // Describe the title option
        demandOption: true, // Make title a required option
        type: 'string' // Ensure title is a string
      },
      body: {
        describe: 'Note body', // Describe the body option
        demandOption: true, // Make body a required option
        type: 'string' // Ensure body is a string
      }
    },
    // Handler function for the 'add' command
    handler(argv) {
      console.log(chalk.inverse('Adding a new note'));
      console.log(`Title: ${argv.title}`);
      console.log(`Body: ${argv.body}`);
    }
  })
  // Define the 'list' command
  .command({
    command: 'list',
    describe: 'List all notes',
    // Handler function for the 'list' command
    handler() {
      console.log('Listing all notes...');
      listNotes();
    }
  })
  // Define the 'read' command
  .command({
    command: 'read',
    describe: 'Read a note',
    builder: {
      title: {
        describe: 'Note title', // Describe the title option
        demandOption: true, // Make title a required option
        type: 'string' // Ensure title is a string
      }
    },
    // Handler function for the 'read' command
    handler(argv) {
      console.log(`Reading note with title: ${argv.title}`);
      readNote(argv.title);
    }
  })
  // Parse the arguments and execute the appropriate command
  .parse();
