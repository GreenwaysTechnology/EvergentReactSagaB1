//streaming
const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, 'assets/info.txt');
const config = {
    encoding: 'UTF-8'
}

//create inputstream
const inputstream = fs.createReadStream(filePath, config);

//streaming apis are event driven
let data = ''
inputstream.on('data', function (chunk) {
    console.log(`Received ${chunk.length} bytes of data.`)
    data += chunk;
});
inputstream.on('end', function () {
    console.log('end : no more data to read')
    console.log(data);
});
inputstream.on('close', function () {
    console.log('file has been closed')
});
inputstream.on('error', function (err) {
    console.log(err);
});
