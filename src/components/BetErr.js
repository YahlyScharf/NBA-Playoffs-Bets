import React from 'react';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BetErr() {


    function clickHandle() {
        window.location.href = "/"
    }


    return (
        <>

            <div className="loader">
                <h2 className="loader-h">Oops! <FontAwesomeIcon icon={faTimesCircle} color='red' /> </h2>
                <h5 className="loader-h"  > There seems to be a problem with your bet...</h5>
                <h5 className="loader-h"  > Contact the websits admin to solve the issue.</h5>
                <br />
                <br />
                <br />
                <br />

                <h6 className="loader-l-h">Click here for the home page</h6>
                <button onClick={clickHandle} className="btn btn-outline-dark loader-btn">Home</button>
            </div>
        </>
    )
}

export default BetErr;