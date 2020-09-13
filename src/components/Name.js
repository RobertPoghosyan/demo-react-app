import React from 'react';

function Name(props) {
    const {name}=props;
    return (
        <>
            <h2>Hello {name} !!!</h2>
        </>
    );
}

export default Name;