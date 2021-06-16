import React from 'react'


export default function AlertUser(props) {
    return (
        <div>
            <button onClick={() => props.alertUser()}>Click Me</button>
        </div>
    )
}
