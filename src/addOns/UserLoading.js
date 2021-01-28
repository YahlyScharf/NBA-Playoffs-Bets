import React from 'react';
import Loader from 'react-loader-spinner';

function UserLoading(props) {
    return (
        <Loader
                className="loaditer"
                type="Oval"
                color="black"
                height={130}
                width={130}
            />
    )
}

export default UserLoading;