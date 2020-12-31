import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from './Navbar';
function Home() {

    const [redirect, setRedirect] = useState(false)

    function clickHandle() {
        setRedirect(true)
    }
    return (
        <>
            {redirect && <Redirect to="/signup" />}

            <div>
                <NavBar />
                <h1 className='home-h1'>Welcome to NBA-Bets.com!</h1>
                <p className='home-p'>Make your prediction of the NBA Playoffs and match yours against your friends!</p>
                <button onClick={clickHandle} className="btn btn-info btn-primary home-but">Get Started </button>
            </div>
        </>
    )
}

export default Home;