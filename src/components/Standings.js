import React, { useEffect, useState } from 'react';
import NavBar from "./NavbarDashboard";
import axios from 'axios';





function TableGen() {
   
    const [users, setUsers] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:5000/users")
        .then(response => {
            setUsers([...response.data])
        });
    })
  
        
        function compareUsers( a, b ) {
            if ( a.score < b.score ){
              return 1;
            }
            if ( a.score> b.score ){
              return -1;
            }
            return 0;
          }
          
          users.sort( compareUsers );
    return (


        <div>

            <NavBar />
            <h1 className="text-left-h1" >Standings</h1>
            <div>
                <br />
                <br />
                <br />
                <table className="table" style={{ width: '67%', paddingRight: '200px' }}>
                    <tr className="table-h">
                        <th>Place</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                    {users.map((user,index) => {
                        return (
                            <tr>
                                <th>{index + 1}</th>
                                <th>{user.firstName} {user.lastName}</th>
                                <th>{user.score}</th>
                            </tr>
                        );
                    })}
                </table>
            </div>


        </div>

    );
}

export default TableGen;