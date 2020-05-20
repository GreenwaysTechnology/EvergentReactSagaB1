//complex callback programming

function getMessage(message) {
    console.log(message)
}
//resolve = success
//reject =failure
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

//blocking/sync code
getMessage('start')
getUser(response => console.log(response), err => console.log(err));
//blocking/sync code
getMessage('end')
