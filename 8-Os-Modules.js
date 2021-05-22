const os = require('os')

//info of current user

const user = os.userInfo()
console.log(user);

//returns the system uptime of system
console.log(`the System uptime is ${os.uptime()} seconds`);

const currentOs = {
    name : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)