import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../context/AuthContext';
import NavBar from './NavbarDashboard';
import Bracket from './BracketDashboard'
import { Redirect } from 'react-router-dom';
import axios from 'axios'




function Dashboard() {
    const authContext = useContext(AuthContext);
    const {
        userInfo
    } = authContext.authState;
   
   
    
    
        return (
            
            <>
            { userInfo === null ?  <Redirect to="/" /> : null}
            
            <div>
                <NavBar />
                <h1 className="text-left-h1">Hello, {userInfo.firstName}!</h1>
                <Bracket />
            </div>
            </>
        );




}

export default Dashboard;