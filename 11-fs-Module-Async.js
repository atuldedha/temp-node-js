//This is Asynchronus handling

const {readFile, writeFile} = require('fs')
console.log('start');

//utf8 is encryption without it we cannot get true txt we get some buffer txt;
readFile('./content/First.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }

    const first = result;
    readFile('./content/Second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
    
        const second = result;
        writeFile('./content/Result-Async.txt',
        `Here is Async Result: ${first}, ${second}`
        ,(err, result) => {
            if(err){
                console.log(err);
                return;
            }
            //console.log(result);
            console.log('Done with the task');
        })
    })
})
console.log('Starting new task');

//This is fast as it is Asynchronus we offloads and continue with the remaining tasks rather to finish the first one