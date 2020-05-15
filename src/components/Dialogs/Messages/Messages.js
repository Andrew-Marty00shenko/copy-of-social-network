import React from 'react'
import './Messages.css'

const Messages = (props) => {
    return (
        <ul className="messages">
            <li>{props.messages}</li>
            <hr style={{ opacity: 0.3 }} />
        </ul>
    )
}

export default Messages