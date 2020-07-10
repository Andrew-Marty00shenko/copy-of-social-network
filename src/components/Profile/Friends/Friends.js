import React from 'react'
import './Friends.css'

const Friends = () => {
    return (
        <div className="friends_component">
            <div className="friends_component_title">
                <h6>Users</h6>
                <span></span>
            </div>
            <div className="friends_component_main">
                <p style={{ margin: '5px auto', textAlign: 'center' }}>Здесь будут ваши друзья</p>
            </div>
        </div>
    )
}

export default Friends

