import React from 'react'
import './Messages.css'

const Messages = (props) => {
    return (
        <div className="messages">
            <ul>
                <li>{props.messages}</li>
            </ul>
            <hr style={{ opacity: 0.3, marginTop: '15px' }} />
        </div>

    )
}

export default Messages