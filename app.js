/// From Node Core Module

const fs = require('fs')
// const path = require('path')
// const os = require('os')

/// From NPM Module

const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

/// From Own Module

const myObj = require('./notes.js')

// console.log(__filename)
// console.log(__dirname)
// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))
// console.log(path.join(__dirname, "hello.js"))

// fs.writeFileSync("hello.txt", "This Is Created By App.js. ")
// fs.appendFileSync("hello.txt", "Append Me.")

// console.log(myObj.name + " " + myObj.getNotes())

// const res = validator.isEmail('mk@example.com.bd')
// console.log(res);

// console.log('Welcome ' + chalk.green(process.argv[2]))

yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        
        myObj.addNotes(argv.title, argv.body)

        // const str = argv.title + ". " + argv.body
        // fs.writeFileSync('hello.txt', str)
        // console.log(argv.title)
        // console.log(argv.body)
    }
})

yargs.parse()