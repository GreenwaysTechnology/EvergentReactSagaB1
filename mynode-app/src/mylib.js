
//share code : it could be any thing.
//exports is variable which inital value is empty literal object
/**
 * //internal code
 * function require(){
 *  var exports = {};
 * 
 * //my code
 * exports.name = 'subramanian'
 * 
 *  return exports
 * }
 */
exports.name = 'Subramanian'
exports.city = 'Coimbatore'
exports.state = 'Tamil Nadu';
exports.ranking = 10;
exports.isValid = true;
exports.sayGreet = function () {
    return 'Greet'
}
exports.skills = [
    'Javascript', 'MicroServices', 'Devops', 'Node', 'React'
]