//how to use lodash third party module

const array = require('lodash/array');

var myarray = [1];
var other = array.concat(myarray, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(myarray);
// => [1]