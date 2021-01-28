import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function NavBar() {

    function siHandle() {
        window.location.href = "/signin"
    }
    function suHandle() {
        window.location.href = "/signup"
    }

    const place = window.location.href.split("/").pop();
    console.log(place);
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">

            <div className="container ">

                <div className="collapse navbar-collapse a" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button onClick={siHandle} className={place === "signin" ?"btn btn-outline-dark nav-but-r" : "btn btn-dark nav-but-o" }>Log in <FontAwesomeIcon icon={faSignInAlt} /></button>
                        </li>
                        <li className="nav-item">
                            <button  onClick={suHandle} className={place === "signup" ? "btn btn-outline-dark nav-but-r" : "btn btn-dark nav-but-o" }> Sign up <FontAwesomeIcon icon={faUserPlus} /></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;