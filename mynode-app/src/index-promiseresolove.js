//Promise implementation

//Using factory apis

function getValue() {
    return Promise.resolve(100); // returns new Promise Object
}

const promise = getValue()
//get the success result
console.log('start')
promise.then(value => console.log(value));
console.log('end')