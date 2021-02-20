import React, { useState } from 'react';
import { faTable, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from "react-router-dom";


function NavBar() {

    const place = window.location.href.split("/").pop();
    const [redirectOnSignOut, setRedirectOnSignout] = useState(false);

    function siHandle() {
        window.location.href = "/dashboard"
    }
    function suHandle() {
        window.location.href = "/standings"
    }
    function logOutHandle() {
        setRedirectOnSignout(true)
        localStorage.clear();
    }
    return (
        <>
        {redirectOnSignOut ? <Redirect to = "/signin" /> : null }

        <nav className="navbar navbar-expand-lg navbar-light fixed-top myNav">

            <div className="container">

                <div className="collapse navbar-collapse not a" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <button onClick={siHandle} className={place === "dashboard" ? "btn nav-but-r" : "btn nav-but-o"}>My Bet <FontAwesomeIcon icon={faUser} /></button>
                        </li>
                        <li className="nav-item">
                            <button onClick={suHandle} className={place === "standings" ? "btn nav-but-r" : "btn nav-but-o"}> Standings  <FontAwesomeIcon icon={faTable} /></button>
                        </li>
                        <li className="nav-item">
                            <button onClick={logOutHandle} className={"btn btn-danger log-out-button"}> Log Out <FontAwesomeIcon icon={faSignOutAlt} /></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;