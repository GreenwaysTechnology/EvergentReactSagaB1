//callback nesting && callback hell =>promise conversion

const getUser = () => {
    //biz logic
    let user = {
        id: 1,
        name: 'Subramanian'
    };
    //let user = null;
    return new Promise((resolve, reject) => {
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, { code: 501, message: 'User not found!!' })
        }
    })


}

const login = user => {
    //biz logic
    return new Promise((resolve, reject) => {
        if (user.name === 'Subramanian') {
            setTimeout(resolve, 1000, { code: 200, message: 'Login successfull' })
        } else {
            setTimeout(reject, 1000, { code: 501, message: 'Login failed!' })
        }
    })

}

const isPremiumUser = status => {

    return new Promise((resolve, reject) => {
        if (status.code === 200) {
            setTimeout(resolve, 1000, { code: 200, message: 'Premium User' })
        } else {
            setTimeout(reject, 1000, { code: 501, message: 'Guest User' })
        }
    });

}



// getUser(user => {
//     console.log('getting user....')
//     login(user, status => {
//         console.log('start authentication.....')
//         isPremiumUser(status,
//             usertype => console.log(usertype),
//             err => console.log(err))
//     }, err => console.log(err))
// }, err => console.log(err));

//Promise Powered
getUser()
    .then(user => {
        console.log('getting user....')
        return login(user) // return new Promise
    }
    )
    .then(status => {
        console.log('start authentication.....')
        return isPremiumUser(status) // return new Promise
    }
    )
    .then(usertype => {
        console.log('Welcome to My Site.....')
        console.log(usertype)
    })
    .catch(err => console.log(err))
    .finally(() => console.log('done!!'))