import React from 'react';

function TrTeam(props) {

    
    return (
        <div>
            {props.team} <input name={props.index}
                defaultValue={props.value - 8 } onChange={props.changeHandle} className="b-ta"></input>
        </div>
    )


}

export default TrTeam;