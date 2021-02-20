import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'
import NavBar from './Navbar';
import background from "../images/landingPage.png";

function Home() {
    const authContext = useContext(AuthContext);
    const {
        userInfo
    } = authContext.authState;

    const userAuthentication = authContext.isAuthenticated();




    const [redirect, setRedirect] = useState(false)
    const [authRedirect, setAuthRedirect] = useState(false)
    const [redirectToSign, setRedirectToSign] = useState(false);

    function siHandle() {
        if (userAuthentication === true) {
            setAuthRedirect(true)
        } else {
            setRedirect(true)
        }

    }
    function suHandle() {
        if (userAuthentication === true) {
            setAuthRedirect(true)
        } else {
            setRedirectToSign(true)
        }
    }
    return (

        <>
            <section id="video">

                {redirect && <Redirect to="/signup" />}
                {authRedirect && <Redirect to="/dashboard" />}
                {redirectToSign && <Redirect to="/signin" />}

                <div className="bg-color" >
                    <img src={background} alt="bg" class="bg"></img>

                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">

                        <div className="container ">

                            <div className="collapse navbar-collapse a" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <button onClick={siHandle} className="btn nav-but-o-home">Get started</button>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={suHandle} className="btn nav-but-r-home" >Sign in</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>

        </>

    )
}

export default Home;