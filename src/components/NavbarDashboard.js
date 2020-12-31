import React from 'react';
import {Link} from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTable} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavBar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">

            <div className="container">

                <div className="collapse navbar-collapse not a" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item ">
                            <Link className="nav-link " to={"/dashboard"}>My Bet <FontAwesomeIcon icon={faUser} /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to={"/standings"}>Standings <FontAwesomeIcon icon={faTable} /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;