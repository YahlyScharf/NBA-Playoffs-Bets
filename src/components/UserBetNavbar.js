import React from 'react';
import {Link} from 'react-router-dom';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavBar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">

            <div className="container">

                <div className="collapse navbar-collapse not a" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item ">
                            <Link className="nav-link " to={"/standings"}><FontAwesomeIcon size="1x" icon={faLongArrowAltLeft} /> Go Back</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;