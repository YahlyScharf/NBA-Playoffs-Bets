import React, { useContext } from 'react';
import { AuthContext } from './../context/AuthContext';
import NavBar from './NavbarDashboard';
import AuthDebugger from './AuthDebugger'
import Bracket from './Bracket'
import { Redirect } from 'react-router-dom';




function Dashboard() {
    const authContext = useContext(AuthContext);
    const {
        token,
        expiresAt,
        userInfo
    } = authContext.authState;

    
        return (

            <div>
                <NavBar />
                <h1 className="text-left-h1">Hello, {userInfo.firstName}!</h1>
                <Bracket />
            </div>
        );




}

export default Dashboard;