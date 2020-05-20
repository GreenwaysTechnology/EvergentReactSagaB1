
const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, 'assets/info.txt');
const config = {
    encoding: 'UTF-8'
}

console.log('start');
const data = fs.readFileSync(filePath, config);
console.log(data);
console.log('end')