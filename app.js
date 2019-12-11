/// From Node Core Module

// const fs = require('fs')
// const path = require('path')
// const os = require('os')

/// From NPM Module

const validator = require('validator')
const chalk = require('chalk')

/// From Own Module

// const myObj = require('./notes.js')

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

const command = process.argv[2]

if (command === 'add'){
    console.log(chalk.green('Note Is Added'))
}
else if (command === 'remove') {
    console.log(chalk.red('Note Is removed'))
}
else {
    console.log(chalk.blue('Nothing'))
}