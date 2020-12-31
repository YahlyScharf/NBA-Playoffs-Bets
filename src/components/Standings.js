import React, { useEffect, useState } from 'react';
import NavBar from "./NavbarDashboard";
import axios from 'axios';
import { Redirect, useParams,Link } from 'react-router-dom';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





function TableGen() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(response => {
                setUsers([...response.data])
            });
    })

    function compareUsers(a, b) {
        if (a.score < b.score) {
            return 1;
        }
        if (a.score > b.score) {
            return -1;
        }
        return 0;
    }

    users.sort(compareUsers);

    function clickHandle (e,id) {
        <Redirect to ="/user-bet/${id}" />
    }

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
                        <th>Users Bet</th>
                    </tr>
                    {users.map((user, index) => {
                        const id = user._id;
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{user.firstName} {user.lastName}</th>
                                <th>{user.score}</th>
                                <th>{<Link to={`/user-bet/${user._id}`} className="bet-link"><FontAwesomeIcon color="orange" icon={faPlusCircle} /></Link>}</th>
                            </tr>
                        );
                    })}
                </table>
            </div>


        </div>

    );
}

export default TableGen;