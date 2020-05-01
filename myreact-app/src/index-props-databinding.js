//Component : property values
import ReactDOM from 'react-dom';
import React from 'react';

const ProfileComponent = props => <div>
    <h1>Profile Information</h1>
    <h2>FirstName {props.firstName}</h2>
    <h2>Last Name {props.lastName}</h2>
    <h2>City {props.city}</h2>
    <h2>State {props.state}</h2>
    <h2>Active {props.active ? 'Active' : 'Not Active'}</h2>
    <h2>Likes {props.likes}</h2>
    <h2>Contact {props.contact.email} {props.contact.phone}</h2>
</div>


//propertyName=value
/**
 * property value can be hardcoded
 * property value can be an variable
 */

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