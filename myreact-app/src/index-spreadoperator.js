//how to pass data from the parent compoent to child component in simple way
// how to throw the entire property to child compoents

import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'
import PROFILES from './mock-data/profile-mock';

//break the component
const ProfileContainerComponent = props => {
    return <ProfileDisplayComponent {...props} title="Profile Information" />
}
//the presentational component
const ProfileDisplayComponent = props => {
    const { id, title, firstName, lastName, active, likes } = props;
    return <div>
        <h1>{title}</h1>
        <h2>Id {id}</h2>
        <h2>FirstName {firstName}</h2>
        <h2>Last Name {lastName}</h2>
        <h2>Active {active ? 'Active' : 'Not Active'}</h2>
        <h2>Likes {likes}</h2>
        <AddressComponent {...props} />
    </div>
}
//sub presentational compoent
const AddressComponent = props => {
    const { city, state, contact: { phone, email } } = props;
    return <div>
        <address>
            <p>city {city}</p>
            <p>state {state}</p>
            <p>Phone {phone}</p>
            <p>email {email}</p>
        </address>
    </div>
}


//data source



const Application = () =>
    <div className="container">

        {
            PROFILES.map((profile, index) => {
                // const { id, firstName, lastName, city, state, active, likes } = profile;
                // return <ProfileContainerComponent
                //     id={id}
                //     firstName={firstName}
                //     lastName={lastName}
                //     city={city}
                //     state={state}
                //     active={active}
                //     likes={likes}
                //     contact={profile.contact}
                // />
                return <ProfileContainerComponent key={index} {...profile} />
            })
        }



    </div>

ReactDOM.render(<Application />, document.getElementById('root'));
