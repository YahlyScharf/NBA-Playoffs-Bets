import React from 'react';

function SrTeam(props) {
    return (
        <div>
            {props.team} <input name={props.index}
                defaultValue={props.value - 4 } onChange={props.changeHandle} className="b-ta"></input>
        </div>
    )


}

export default SrTeam;