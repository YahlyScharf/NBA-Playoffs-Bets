import React from 'react';
import {Link} from 'react-router-dom';

function NavBar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">

            <div className="container">

                <div className="collapse navbar-collapse not" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item ">
                            <Link className="nav-link " to={"/dashboard"}>My Bet</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to={"/hub"}>Hub</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to={"/standings"}>Standings</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;