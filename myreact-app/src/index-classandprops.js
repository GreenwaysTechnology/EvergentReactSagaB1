//Component : props and classes
import ReactDOM from 'react-dom';
import React from 'react';



// class ProfileComponent extends React.Component {
//     render() {
//         console.log(this.props) //by default value is empty object = 
//         return <div>
//             <h1>Profile Information</h1>
//             <h2>FirstName {this.props.firstName}</h2>
//             <h2>Last Name {this.props.lastName}</h2>
//             <h2>City {this.props.city}</h2>
//             <h2>State {this.props.state}</h2>
//             <h2>Active {this.props.active ? 'Active' : 'Not Active'}</h2>
//             <h2>Likes {this.props.likes}</h2>
//             <h2>Contact {this.props.contact.email} {this.props.contact.phone}</h2>
//         </div>
//     }
// }
class ProfileComponent extends React.Component {
    render() {
        const { firstName, lastName, city, state, active, likes, contact: { email, phone } } = this.props;
        return <div>
            <h1>Profile Information</h1>
            <h2>FirstName {firstName}</h2>
            <h2>Last Name {lastName}</h2>
            <h2>City {city}</h2>
            <h2>State {state}</h2>
            <h2>Active {active ? 'Active' : 'Not Active'}</h2>
            <h2>Likes {likes}</h2>
            <h2>Contact {email} {phone}</h2>
        </div>
    }
}

const lastName = 'Murugan';
const city = "Coimbatore";
const state = "Tamil nadu";
const active = true;
const likes = 1000;
const contact = {
    email: 'admin@foo.com',
    phone: '9003706368'
}

ReactDOM.render(<ProfileComponent
    firstName="Subramanian"
    lastName={lastName}
    city={city}
    state={state}
    active={active}
    likes={likes}
    contact={contact}
/>,

    document.getElementById('root'));