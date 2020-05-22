const USERS = require('../mockdata/Users');

class UserService {
    constructor() { }
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, USERS);
        });
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            const filteredUser = USERS.filter((user, index) => {
                return user.id === parseInt(id);
            })
            if (filteredUser && filteredUser.length > 0) {
                resolve(filteredUser)
            } else {
                reject({ message: 'No Users' })
            }
        });
    }
}
module.exports = new UserService();