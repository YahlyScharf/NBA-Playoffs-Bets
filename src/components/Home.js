import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from './Navbar';
import background from "../images/landingPage.png";
function Home() {

    const [redirect, setRedirect] = useState(false)
    const [redirectToSign,setRedirectToSign] = useState(false);

    function siHandle() {
        setRedirect(true)
    }
    function suHandle() {
        setRedirectToSign(true)

    }
    return (

        <>
            <section id="video">

                {redirect && <Redirect to="/signup" />}
                {redirectToSign && <Redirect to="/signin" />}

                <div className="bg-color" >
                    <img src={background} alt="bg" class="bg"></img>

                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">

                        <div className="container ">

                            <div className="collapse navbar-collapse a" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <button onClick={siHandle} className="btn btn-dark nav-but-o">Get started</button>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={suHandle} className="btn btn-outline-dark nav-but-r" >Sign in</button>
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