import React, {useEffect,useState } from 'react';
import Bracket from './Bracket'
import { Redirect } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'


function NewBet() {
    const [show,setShow] = useState(true)

    return (
        <div>
            <h1 className="text-left-h1">Place Your Bet</h1>
            {show ? <Alert variant="info" onClose={() => setShow(false)} dismissible className='info-alert'>
                This is where you place your bet! Please follow the instructions mentioned before.
                Need a reminder? <Alert.Link href="/placeBet">Click Here.</Alert.Link>
            </Alert> : null}
            <Bracket />
        </div>
    );
}

export default NewBet;