//Component : pure function: property
import ReactDOM from 'react-dom';
import React from 'react';

//pure function
//props = {} default value
//props = {variable:value}
// function ProfileComponent(props) {
//     console.log(props)
//     //props.firstName = 'foo'; pure function cant be modified
//     return <div>
//         <h1>Profile Information</h1>
//         <h2>FirstName {props.firstName}</h2>
//     </div>
// }
const ProfileComponent = props => <div>
    <h1>Profile Information</h1>
    <h2>FirstName {props.firstName}</h2>
</div>


//ReactDOM.render(ProfileComponent(input), document.getElementById('root'));
ReactDOM.render(<ProfileComponent firstName="Subramanian" />, document.getElementById('root'));