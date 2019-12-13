const fs = require('fs')
const chalk = require('chalk')

// const name = "MK"

// const getNotes = function(){
//     return "Your Notes..."
// }

const addNotes = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        return (note.title === title)
    })

    if(duplicateNotes.length === 0){
        notes.push({ 
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('New Note Added.')
    }
    else{
        console.log('Note Already Taken.')
    }
}

const removeNote = function(title){
    const notes = loadNotes()
    const Notes = notes.filter((note) => {
        return note.title !== title;
    })

    if(Notes.length === notes.length){
        console.log(chalk.red.inverse("This Note Are Not Available."))
    }
    else{
        saveNotes(Notes)
        console.log("This Note Are Removed")
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach( (note) => {
        console.log(note.title)
        console.log(note.body)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find( (note) => {
        return note.title === title
    })

    if(note){
        console.log(note.title)
        console.log(note.body)
    }
    else{
        console.log("Note Not Found")
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('data1.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataJSON = fs.readFileSync('data1.json', 'utf-8')
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

module.exports = {
    addNotes,
    removeNote,
    listNotes,
    readNote
}


// const book = {
//     name: 'Data Structure And Algorithm',
//     description: 'very nice book'
// }

// const bookJSON = JSON.stringify(book) /// Convert Object To JSON
// fs.writeFileSync('data.json', bookJSON);

// const readJSON = fs.readFileSync('data.json')
// const dataJSON = readJSON.toString()

// const obj = JSON.parse(dataJSON) /// Convert JSON To Object

// obj.name = 'Algorithm Design'
// const objJSON = JSON.stringify(obj)

// fs.writeFileSync('data.json', objJSON)

// const newJSON = fs.readFileSync('data.json', 'utf-8')
// const newObj = JSON.parse(newJSON)
// console.log(newObj.description)