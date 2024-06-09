
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON);
// fs.writeFileSync('1-json.json', bookJSON);
// console.log(parseData.author);
const jsonString = `{
    "name": "Andrew",
    "planet": "Earth",
    "age": 27
}`;

const dataObject = JSON.parse(jsonString);
console.log(dataObject);

