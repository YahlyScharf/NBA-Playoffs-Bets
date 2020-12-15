import React, { useContext } from 'react';
import { AuthContext } from './../context/AuthContext';
import NavBar from './NavbarDashboard';
import AuthDebugger from './AuthDebugger'




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

            
        </div>
        

    );

    
}

export default Dashboard;