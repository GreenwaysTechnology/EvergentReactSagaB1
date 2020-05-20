
const getUser = () => {
    let user = {
        id: 1,
        name: 'Subramanian'
    }
    if (user) {
        return Promise.resolve(user); //settimeout with 0ms
    } else {
        return Promise.reject({ code: 500, message: 'User not Found!' })
    }
}

// const promise = getUser()
// promise.then(user => console.log(user));
// promise.catch(err => console.log(err));

//command chain
getUser()
    .then(user => console.log(user))
    .catch(err => console.log(err));
