import React, {useState} from 'react';
import NavBar from './NavbarDashboard';
import axios from 'axios';



function Hub() {
    const [users,setUsers] = useState ([]);

    axios.get("http://localhost:5000/users")
    .then(response => {
        setUsers([...response.data])
    });
    
    return (
        <div>
            <NavBar />
            <h1 className="text-left-h1">Hub</h1>

            
        </div>
        

    );

    
}

export default Hub;