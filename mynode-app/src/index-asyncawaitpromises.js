
//async and await keywords

//callee
function getUser() {
    let user = {
        id: 1,
        name: 'Subramanian'
    };
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
//caller using then ables
// function fetchUser() {
//     getUser()
//         .then(user => console.log(user))
//         .catch(err => console.log(err))
//         .finally(() => console.log('Done!!!'))

// getUser()
//     .then(user => {
//         console.log('getting user....')
//         return login(user) // return new Promise
//     }
//     )
//     .then(status => {
//         console.log('start authentication.....')
//         return isPremiumUser(status) // return new Promise
//     }
//     )
//     .then(usertype => {
//         console.log('Welcome to My Site.....')
//         console.log(usertype)
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log('done!!'))
// }
//caller using async
async function fetchUser() {

    try {
        const user = await getUser();
        console.log('getting user....')
        const status = await login(user);
        console.log('start authentication.....')
        const usertype = await isPremiumUser(status);
        console.log('Welcome to My Site.....');
        console.log(usertype)
    }
    catch (err) {
        console.log(err)
    } finally {
        console.log('Done!!!!')
    }

}
fetchUser()