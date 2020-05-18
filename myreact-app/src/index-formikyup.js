import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';



//create basic forms
const SignUpForm = () => {

    //formik takes parameter called form configuration
    const formik = useFormik({
        initialValues: {
            email: 'admin@mydomain.com'
        },
        //validation function
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid Email Address')
                .required('Required')
        }),
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

