//non blocking io
const fs = require('fs');

//read file in non blocking mode
let filePath = './src/assets/info.txt'
const config = {
    encoding: 'UTF-8'
}
console.log('start')
//read file ; async way
fs.readFile(filePath, config, function (err, data) {
    if (err) throw err;
    console.log(data);
});
console.log('end')

//write data into file
filePath = './src/assets/info-copy.txt'
let data = 'How do I start with Node.js after I installed it?'

fs.writeFile(filePath, data, function (err) {
    if (err) throw err;
    console.log('file has been written succefully')
});

