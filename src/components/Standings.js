import React, { useState } from 'react';
import NavBar from "./NavbarDashboard";
import axios from 'axios';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 650
    },

});




function TableGen() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    axios.get("http://localhost:5000/users")
        .then(response => {
            setUsers([...response.data])
        })
        .catch(err => JSON.parse(err));
        
    users.map(user => {
    
    })
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