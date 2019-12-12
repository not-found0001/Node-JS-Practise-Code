
// const name = "MK"

// const getNotes = function(){
//     return "Your Notes..."
// }

// module.exports = {
//     name,
//     getNotes
// }

const fs = require('fs')

// const book = {
//     name: 'Data Structure And Algorithm',
//     description: 'very nice book'
// }

// const bookJSON = JSON.stringify(book) /// Convert Object To JSON
// fs.writeFileSync('data.json', bookJSON);

const readJSON = fs.readFileSync('data.json')
const dataJSON = readJSON.toString()

const obj = JSON.parse(dataJSON) /// Convert JSON To Object

obj.name = 'Algorithm Design'
const objJSON = JSON.stringify(obj)

fs.writeFileSync('data.json', objJSON)

const newJSON = fs.readFileSync('data.json', 'utf-8')
const newObj = JSON.parse(newJSON)
console.log(newObj.description)