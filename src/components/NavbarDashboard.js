import { faTable, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


function NavBar () {

    const place = window.location.href.split("/").pop();

    function siHandle() {
        window.location.href = "/dashboard"
    }
    function suHandle() {
        window.location.href = "/standings"
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">

            <div className="container">

                <div className="collapse navbar-collapse not a" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                            <button onClick={siHandle} className={place === "dashboard" ?"btn nav-but-r" : "btn nav-but-o" }>My Bet <FontAwesomeIcon icon={faUser} /></button>
                        </li>
                        <li className="nav-item">
                            <button  onClick={suHandle} className={place === "standings" ? "btn nav-but-r" : "btn nav-but-o" }> Standings  <FontAwesomeIcon icon={faTable} /></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;