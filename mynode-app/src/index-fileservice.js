//file opeations
//front end program

const { readFile, WriteFile } = require('./services/FileService');

async function fetchFile() {
    // readFile(function (data) {
    //     console.log(data)
    // }, function (err) {
    //     console.log(err);
    // })
    try {

        const content = await readFile();
        console.log(content);
    } catch (err) {
        console.log(err);
    }
    finally {
        console.log('File Operation done!!')
    }

}
fetchFile();
