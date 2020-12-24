import React, { useState,useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';

function PopUp() {
    const authContext = useContext(AuthContext);
    const {
        userInfo
    } = authContext.authState;
    const [redirect, setRedirect] = useState(false)
    const [show, setShow] = useState(true);

    function clickHandle() {
        setShow(false)
        setRedirect(true)
    }

    return (
        <>
            {redirect && <Redirect to="/place-bet" />}


            <div>


                <Alert show={show} variant="info" className='si-alert'>
                    <Alert.Heading>Welcome {userInfo.firstName} ,Nice to have you here!</Alert.Heading>
                    <br />
                    <p>Before you start betting, there are a few important things to keep in mind: </p>
                    <br />
                    <ul>
                        <li className="pop-up-div-li">Your bet will not be editable! Please make sure to recheck your bet prior to submitting.</li>
                        <li className="pop-up-div-li">Please place your bets round by round - for exemple, Finish betting on the first round, and only when you are finished continue to the Confrence Semi-Finals and so on.</li>
                        <li className="pop-up-div-li">Make sure your scores only contain 0-4 values - That means for exemple no "01" or "03", but "1" or "3".</li>
                    </ul>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={clickHandle} variant="outline-info">
                            Got it <FontAwesomeIcon icon={faThumbsUp} />
                        </Button>
                    </div>
                </Alert>

            </div>
        </>
    );

}

export default PopUp;