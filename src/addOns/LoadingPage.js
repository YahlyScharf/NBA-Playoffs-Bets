import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import Loader from 'react-loader-spinner';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function LoadingPage() {

    const [timeOver, setTimeOver] = useState(false)
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
        setTimeout(() => {
            localStorage.clear();
            setRedirect(true)
        },1100)
    }

    return (
        <>

            {timeOver ? <FontAwesomeIcon color="lightGreen" className="fa-10x loadi" icon={faCheckCircle} /> : <Loader
                className="load"
                type="Oval"
                color="black"
                height={130}
                width={130}
            />}

            {timeOver ? <p className="not">{message}</p>: <p className="not">{message}</p>}


            {redirect ? <Redirect to="/signin" /> : null}

        </>
    )
}

export default LoadingPage;