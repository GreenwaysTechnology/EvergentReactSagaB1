const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, '../assets/info.txt');
const config = {
    encoding: 'UTF-8'
}
class FileService {
    constructor() {

    }
    //callback based
    // readFile(resolve, reject) {
    //     fs.readFile(filePath, config, function (err, data) {
    //         if (err) {
    //             reject(err)
    //         }
    //         resolve(data);
    //     });
    // }
    //promise based
    readFile() {
        return new Promise((resolve, reject) => {
            //non streaming
            fs.readFile(filePath, config, function (err, data) {
                if (err) {
                    reject(err)
                }
                resolve(data);
            });
        })

    }
    writeFile() {
        //TODO:YOURSELF
    }
}

module.exports = new FileService()