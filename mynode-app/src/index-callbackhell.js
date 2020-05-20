//callback nesting && callback hell

const getUser = (resolve, reject) => {
    //biz logic
    let user = {
        id: 1,
        name: 'Subramanian'
    };
    //let user = null;
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, { code: 501, message: 'User not found!!' })
    }

}

const login = (user, resolve, reject) => {

    //biz logic
    if (user.name === 'Subramanian') {
        setTimeout(resolve, 1000, { code: 200, message: 'Login successfull' })
    } else {
        setTimeout(reject, 1000, { code: 501, message: 'Login failed!' })
    }
}

const isPremiumUser = (status, resolve, reject) => {

    if (status.code === 200) {
        setTimeout(resolve, 1000, { code: 200, message: 'Premium User' })
    } else {
        setTimeout(reject, 1000, { code: 501, message: 'Guest User' })
    }
}



getUser(user => {
    console.log('getting user....')
    login(user, status => {
        console.log('start authentication.....')
        isPremiumUser(status,
            usertype => console.log(usertype),
            err => console.log(err))
    }, err => console.log(err))
}, err => console.log(err));

