//how to write forms using hooks.

import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


function Form() {
    //first Name
    const firstNameRef = useFirstName('Subramanian');
    //last Name
    const lastNameRef = useLastName('Murugan')
    //Form submisssion state
    const [submitted, setSubmitted] = useState(false);

    //submit form 
    const handleFormSubmit = e => {
        e.preventDefault();
        let data = {
            firstName: firstNameRef.firstName,
            lastName: lastNameRef.lastName
        }
        setSubmitted(true);
        //collect the data
        alert(JSON.stringify(data))
    }

    //ui
    return <div>
        <h1>Form Using Hooks</h1>
        <pre>{firstNameRef.firstName} {lastNameRef.lastName}</pre>
        <form onSubmit={handleFormSubmit}>
            <div>
                First Name <input {...firstNameRef} value={firstNameRef.firstName} />

            </div>
            <div>
                Last Name <input {...lastNameRef} value={lastNameRef.lastName} />

            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>

        </form>

    </div>


}
//firstName
const useFirstName = initalValue => {
    const [firstName, setFirstName] = useState(initalValue);
    //event handler
    const handleChange = e => {
        setFirstName(e.target.value)
    }//
    //return object having state,listener
    return {
        firstName,
        onChange: handleChange
    }

}
//lastName
const useLastName = initalValue => {
    const [lastName, setLastName] = useState(initalValue);
    //event handler
    const handleChange = e => {
        setLastName(e.target.value)
    }//
    //return object having state,listener
    return {
        lastName,
        onChange: handleChange
    }

}




const App = () => {
    return <div className="container">
        <Form />
    </div>
}

render(<App />, document.getElementById('root'));