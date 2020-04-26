import React from 'react'
import './Friends.css'

const Friends = () => {
    return (
        <div className="friends_component">
            <div className="friends_component_title">
                <h6>Друзья</h6>
                <span>0</span>
                <p>обновления</p>
            </div>
            <div className="friends_component_main">
                <p style={{ margin: '5px auto', textAlign: 'center' }}>Здесь будут ваши друзья</p>
            </div>
        </div>
    )
}

export default Friends

