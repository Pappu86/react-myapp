import React from 'react';

function Hello(props) {
    function DoThis() {
        alert("I am Do this button")
    };
    return (
        <div>
            <button onClick={DoThis}>Click Me</button>
            <h1>{props.name} I am a functional component</h1>
        </div>
    )
}

export default Hello;