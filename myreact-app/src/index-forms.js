
import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


class Form extends Component {

    //select box values
    leaves = ['Sick', 'Medical', 'Causal', 'Earned', 'others'];
    //state : form values
    state = {
        firstName: 'firstname',
        lastName: 'lastname',
        leaveType: this.leaves[0]
    }

    // //textbox1 
    // firstNameHandler = e => {
    //     console.log(e.target.value);

    // }
    // //textbox 2
    // lastNameHandler = e => {
    //     console.log(e.target.value);
    // }
    //listener
    //evt is type of SyntheticEvent
    handleChange = (evt) => {
        //get the text box values
        //which text box value
        //Get control name,input,select box
        const name = evt.target.name;
        //Get control's value
        const value = evt.target.value;
        this.setState({
            [name]: value // [firstName] : 'subramanian' [lastName]='' [leaveType]='MedicalLeave'
        });

    }
    //listener
    onSave = evt => {
        evt.preventDefault(); //will stop submitting form to server automatically.
        alert(JSON.stringify(this.state))
    }

    render() {
        return <div>
            <h1>User Form</h1>
            <h2>{JSON.stringify(this.state)}</h2>
            <form onSubmit={this.onSave}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input required onChange={this.handleChange} type="text" className="form-control" id="firstName" placeholder="Enter First name" name="firstName" value={this.state.firstName} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={this.handleChange} type="text" className="form-control" id="lastName" placeholder="Enter last name" name="lastName" value={this.state.lastName} />
                </div>
                <div className="form-group">
                    <label htmlFor="leaveType">Leave Type</label>
                    <select name="leaveType" className="form-control" value={this.state.leaveType} onChange={this.handleChange}>
                        {this.leaves.map((leave, index) => {
                            return <option key={index} value={leave}>{leave}
                            </option>
                        })};
   </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div >
    }
}

const App = () => {
    return <div className="container">
        <Form />
    </div>
}

render(<App />, document.getElementById('root'));