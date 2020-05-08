import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function Users() {
    //state to hold ajax data
    const [users, setUsers] = useState({ error: null, isLoaded: false, items: [] })
    //use Effect for making ajax calls
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url).then(response => response.json())
            .then(result => {
                setUsers({ ...users, isLoaded: true, items: result })
            },
                (error) => {

                    setUsers({ ...users, isLoaded: true, error: error })
                })
    });
    if (users.error) {
        return <div>Error: {users.error.message}</div>;
    } else if (!users.isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {users.items.map((user, index) => (
                    <li key={index}>
                        {user.username} {user.email}
                    </li>
                ))}
            </ul>
        );
    }

}
render(<Users />, document.getElementById('root'));