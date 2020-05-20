//how to write existing callbacks with promise implementation.
//how to wrap with timeout with more ms.

const getUser = () => {
    let user = {
        id: 1,
        name: 'Subramanian'
    }
    //with constructor pattern
    return new Promise((resolve, reject) => {

        if (user) {
            setTimeout(resolve, 5000, user);
        } else {
            setTimeout(reject, 1000, { code: 500, message: 'User Not Found!!' })
        }
    });

}
getUser()
    .then(user => console.log(user))
    .catch(err => console.log(err))
    .finally(() => {
        console.log('done!!!')
    })

