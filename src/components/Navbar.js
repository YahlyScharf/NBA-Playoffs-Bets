import React from 'react';
import {Link} from 'react-router-dom';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">

            <div className="container">

                <div className="collapse navbar-collapse a" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link not" to={"/signin"}>Log in <FontAwesomeIcon icon={faSignInAlt} /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link not" to={"/signup"}>Sign up <FontAwesomeIcon icon={faUserPlus} /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;