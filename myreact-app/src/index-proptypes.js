//Component : typechecking with Props
import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';


const ProfileComponent = ({ firstName, lastName, city, state, active, likes, contact: { email, phone } }) => <div>
    <h1>Profile Information</h1>
    <h2>FirstName {firstName}</h2>
    <h2>Last Name {lastName}</h2>
    <h2>City {city}</h2>
    <h2>State {state}</h2>
    <h2>Active {active ? 'Active' : 'Not Active'}</h2>
    <h2>Likes {likes}</h2>
    <h2>Contact {email} {phone}</h2>
</div>;
//define property rules
ProfileComponent.propTypes = {
    firstName: PropTypes.string.isRequired,
    likes: PropTypes.number
}
//default Props
ProfileComponent.defaultProps = {
    firstName: 'defaultName'
}

const firstName = "Subramanian"
const lastName = 'Murugan';
const city = "Coimbatore";
const state = "Tamil nadu";
const active = true;
const likes = 100;
const contact = {
    email: 'admin@foo.com',
    phone: '9003706368'
}

ReactDOM.render(<ProfileComponent
    firstName={firstName}
    lastName={lastName}
    city={city}
    state={state}
    active={active}
    likes={likes}
    contact={contact}
/>,

    document.getElementById('root'));
