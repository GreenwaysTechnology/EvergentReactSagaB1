//async and await keywords
/**
 * async function by default returns Promise.resolve
 */
//normal function
function getName() {
    return 'Subramanian'; //now return type is string
}
console.log(getName());
//async function : by default return promise
async function getValue() {
    return 100; // Promise.resolve(100)
}
getValue().then(value => console.log(value));

//async function and Promsise
async function getStock() {
    return Promise.reject(1000)// Promise.resolve(100)
}
getStock().then(value => console.log(value));
