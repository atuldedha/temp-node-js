//This is Syncronus method of reading writing files


//We can do it like always 
//const fs = require('fs)
//fs.readFileSync, fs.writeFileSync

//Alternatively
const {readFileSync, writeFileSync} = require('fs')
console.log('start');

const first = readFileSync('./content/First.txt', 'utf-8')
const second = readFileSync('./content/Second.txt', 'utf-8')

console.log(first,second);

writeFileSync(
    './content/Result-Sync.txt', 
    `Here is the Result : ${first} , ${second}`, {flag: 'a'}
)

console.log('Done with task');
console.log('starting next one');

//This is more time consuming as the compiler goes line by line and finishes the task that is there in the line i.e, Synchronusly