import React, { useState, useContext } from 'react';
import Bracket from './Bracket'
import { Redirect, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'


function NewBet() {

    const authContext = useContext(AuthContext);
    const {
        userInfo
    } = authContext.authState;

    const [show, setShow] = useState(true);
    const [showAlret, setShowAlert] = useState(true);
  

    function clickHandle() {
        setShow(false)
    }

    function linkClickHandle() {
        setShow(true)
    }

    return (
        <>
            <div>
                {userInfo.hasBet ? <Redirect to="/dashboard" /> : null}
                {show ? <div>
                    <Alert show={show} variant="info" className='form-outer-2'>
                        <Alert.Heading>Welcome {userInfo.firstName} ,Nice to have you here!</Alert.Heading>
                        <br />
                        <p>Before you start betting, there are a few important things to keep in mind: </p>
                        <br />
                        <ul>
                            <li className="pop-up-div-li">Your bet will not be editable! Please make sure to recheck your bet prior to submitting.</li>
                            <li className="pop-up-div-li">Make sure your scores only contain 0-4 values - For exemple, no "01" or "03", but "1" or "3".</li>
                        </ul>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={clickHandle} variant="outline-light">
                                Got it <FontAwesomeIcon icon={faThumbsUp} />
                            </Button>
                        </div>
                    </Alert>
                </div>
                    : <>  <h1 className="text-left-h1">Place Your Bet</h1>
            { showAlret ? <Alert variant="primary" onClose={() => setShowAlert(false)} dismissible className='info-alert'>
                    This is where you place your bet! Please follow the instructions mentioned before.
                Need a reminder? <Link className="alert-l" onClick={linkClickHandle}>Click Here.</Link>
                </Alert> : null}
                <Bracket /> </>}


        </div>
        </>
    );
}

export default NewBet;