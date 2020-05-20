//callback based async programming: 
//timer api

function task(whatTask) {
    console.log(`${whatTask} Async task`)
}
console.log('start')
setTimeout(task, 1000, 'WebServer');
console.log('end')
//
function startHttpServer(callback) {
    setTimeout(callback, 2000);
}
startHttpServer(function () {
    console.log('Http Server is listening!')
})