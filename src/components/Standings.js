import React, { useEffect, useState,useContext } from 'react';
import {AuthContext} from '../context/AuthContext'
import NavBar from "./NavbarDashboard";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { faEye} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserLoading from "../addOns/UserLoading";

function TableGen() {

    const authContext = useContext(AuthContext);
    const {
        userInfo
    } = authContext.authState;

    const userAuthentication =  authContext.isAuthenticated();
      
    if (userAuthentication === true) {
      console.log('Hello');
    } else {
      window.location.href = "/signin"
    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://nba-playoffbets.herokuapp.com/users")
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

    const userId = userInfo._id;

    return (


        <div>





            {users ?
                <div>
                    <NavBar />
                    <h1 className="text-left-h1" >Standings</h1>
                    <br />
                    <br />
                    <br />
                    <table className="table" style={{ width: '67%', paddingRight: '200px' }}>
                        <tr className="table-h">
                            <th>Place</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>View Users Bracket</th>
                        </tr>
                        {users.map((user, index) => {

                            if (user._id === userId) {
                                return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <th>{user.firstName} {user.lastName}</th>
                                    <th>{user.score}</th>
                                    <th></th>
                                </tr>
                            );
                            } else {
                                return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <th>{user.firstName} {user.lastName}</th>
                                    <th>{user.score}</th>
                                    <th>{<Link to={`/user-bet/${user._id}`} className="bet-link"><FontAwesomeIcon color="green" icon={faEye} /></Link>}</th>
                                </tr>
                            );
                            }

                           
                        })}
                    </table>
                </div>
                : <UserLoading />}




        </div>

    );
}

export default TableGen;