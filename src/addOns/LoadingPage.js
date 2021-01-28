import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import Loader from 'react-loader-spinner';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function LoadingPage() {

    const [timeOver, setTimeOver] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState("Setting up your acoount...")


    setTimeout(() => {
        setMessage("Saving your bet...")

    }, 2000)
    if (message === "Saving your bet...") {
        setTimeout(() => {
            setMessage("Registering you to the League...")

        }, 2000);
    } else if (message === "Registering you to the League...") {

        setTimeout(() => {

            setMessage("You are all set!")
        }, 2000)
    } else if (message === "You are all set!") {
        setTimeout(() => {
            setTimeOver(true)
        })
    }

    function clickHandle() {
         setRedirect(true)
         localStorage.clear();
    }
    return (
        <>



            <div className="loader">
                {timeOver ? <div>
                <h2 className="loader-h">You are all set,</h2>
                 <h5>Good luck! </h5>
                 <FontAwesomeIcon icon={faCheckCircle} color="green" className="fa-10x loader-v"/>
                 <h6 className="loader-l-h">Click here to continue</h6>
                 <button onClick={clickHandle} className="btn btn-outline-success loader-btn">Continue</button>
                </div> : <Loader
                    className="load"
                    type="Oval"
                    color="black"
                    height={130}
                    width={130}
                />}

                {timeOver ?  null : <p className="loder-p">{message}</p>}

                {redirect ? <Redirect to="/signin" /> : null}
            </div>


        </>
    )
}

export default LoadingPage;