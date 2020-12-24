import React from 'react';

function Finals(props) {
    return (
        <div>
            {props.team} <input name={props.index}
                defaultValue={props.value - 12 } onChange={props.changeHandle} className="b-ta"></input>
        </div>
    )


}

export default Finals;