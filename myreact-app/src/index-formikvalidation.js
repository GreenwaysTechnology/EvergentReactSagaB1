import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { useFormik } from 'formik';

//validation function

const validate = values => {
    const errors = {};
    //name

    //email field
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors;
}


//create basic forms
const SignUpForm = () => {

    //formik takes parameter called form configuration
    const formik = useFormik({
        initialValues: {
            email: 'admin@mydomain.com'
        },
        //validation function
        validate,
        onSubmit: values => {
            //submit form values
            alert(JSON.stringify(values));
        },

    });

    return <form onSubmit={formik.handleSubmit}>
        <div className="form-group container" >
            <label htmlFor="email">Email Address</label>
            <input className="form-control"
                id="email" name="email" onChange={formik.handleChange} type="email" value={formik.values.email}
            />
            <div>
                {formik.errors.email ? <pre>{formik.errors.email}</pre> : null}
            </div>
            <button type="submit">Submit</button>

        </div>

    </form>
}

render(<SignUpForm />, document.getElementById('root'));

