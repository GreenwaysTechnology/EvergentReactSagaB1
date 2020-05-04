import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'

//break the component
const ProfileContainerComponent = props => {
    return <ProfileDisplayComponent
        firstName={props.firstName}
        lastName={props.lastName}
        city={props.city}
        state={props.state}
        active={props.active}
        likes={props.likes}
        contact={props.contact}
    />
}
//the presentational component
const ProfileDisplayComponent = props => {
    const { firstName, lastName, city, state, active, likes, contact: { email, phone } } = props; return <div>
        <h1>Profile Information</h1>
        <h2>FirstName {firstName}</h2>
        <h2>Last Name {lastName}</h2>
        <h2>Active {active ? 'Active' : 'Not Active'}</h2>
        <h2>Likes {likes}</h2>
        <AddressComponent city={city} state={state} email={email} phone={phone} />
    </div>
}
//sub presentational compoent
const AddressComponent = props => {
    const { city, state, email, phone } = props;
    return <div>
        <addr>
            <p>city {city}</p>
            <p>state {state}</p>
            <p>Phone {phone}</p>
            <p>email {email}</p>
        </addr>
    </div>
}


//data source
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

const Application = () =>
    <div className="container">
        <ProfileContainerComponent
            firstName={firstName}
            lastName={lastName}
            city={city}
            state={state}
            active={active}
            likes={likes}
            contact={contact}
        />
    </div>

ReactDOM.render(<Application />, document.getElementById('root'));
