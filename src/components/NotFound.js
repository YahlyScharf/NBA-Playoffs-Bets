import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NotFound() {

    const [home, setHome] = useState(false);
    const [previous, setPrevious] = useState(false);

    function clickHandle() {
        setHome(true)
    }
    function clickHandlePrevious() {
        window.history.go(-1);
    }

    return (
        <>
            {home ? <Redirect to="/" /> : null}
            {previous ? <Redirect to="/" /> : null}

            <div className="loader">
                <h2 className="loader-h">Oops! 404 - Page not found <FontAwesomeIcon icon={faTimesCircle} color='red' /></h2>
                <h6 className="loader-l-h">Click here for the home page</h6>
                <button onClick={clickHandle} className="btn btn-outline-dark loader-btn">Home</button>
                <h6 className="loader-l-h">Click here for the previous page</h6>
                <button onClick={clickHandlePrevious} className="btn btn-outline-dark loader-btn">Previous Page</button>

            </div>
        </>
    )
}

export default NotFound;