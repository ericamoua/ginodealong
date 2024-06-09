// const getNotes = function () {
//     return "Your notes..."
// }

// module.exports = getNotes;

// export default function getNotes() {  // Use default export
//     return 'Your notes...';
// }

// had to update to ES6 latest update for chalked touse the the default function
// export function getNotes() {
//     return 'Your notes...';
//   }
  
import fs from 'fs'; // Importing the 'fs' module from Node.js for file system operations.
import chalk from 'chalk'; // Importing the 'chalk' library for styling console output.

/**
 * Returns a placeholder string indicating that the user's notes are being retrieved.
 * @returns {string} Placeholder string indicating that the user's notes are being retrieved.
 */
export function getNotes() {
  return 'Your notes...';
}

/**
 * Displays a list of notes stored in the 'notes.json' file.
 */
export function listNotes() {
  // Load notes from 'notes.json' file
  const notes = loadNotes();
  // Print a header for the list of notes
  console.log(chalk.inverse('Your notes'));
  // Iterate over each note and print its title
  notes.forEach((note) => console.log(note.title));
}

/**
 * Displays the content of a note with the specified title.
 * @param {string} title - The title of the note to be displayed.
 */
export function readNote(title) {
  // Load notes from 'notes.json' file
  const notes = loadNotes();
  // Find the note with the specified title
  const note = notes.find((note) => note.title === title);

  // If the note is found, display its title and body
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    // If the note is not found, display an error message
    console.log(chalk.red('Note not found'));
  }
}

/**
 * Loads notes from the 'notes.json' file.
 * @returns {Array} An array containing the parsed notes from the 'notes.json' file, or an empty array if the file does not exist.
 */
function loadNotes() {
  try {
    // Read data from 'notes.json' file
    const dataBuffer = fs.readFileSync('notes.json');
    // Convert data buffer to JSON string
    const dataJSON = dataBuffer.toString();
    // Parse JSON string to JavaScript object
  } catch {
    console.log('broken')
  }
}
