import React, { useState } from 'react'
import './Profile.css'

const Profile = () => {
    const [showBlock, setShowBlock] = useState(false);

    const handleShowBlock = () => {
        setShowBlock(!showBlock)
    }
    const handleInviseBlock = () => {
        setShowBlock(!showBlock);
    }

    return (
        <div className="profile-page">
            <div className="profile-avatar">
                <div onMouseEnter={handleShowBlock} onMouseLeave={handleInviseBlock} className="avatar__setting" >
                    <img src="https://sun9-4.userapi.com/impf/c849336/v849336730/6999e/RZAbcj5kt00.jpg?size=200x0&quality=90&sign=60345877c965fb6f810725b815e3233d" alt="" />
                    <div className={`${showBlock ? 'settings' : 'none'}`}>
                        <li> Обновить фотографию</li>
                        <li> Изменить миниатюру</li>
                        <li> Добавить эффекты</li>
                    </div>
                </div>
                <button>Редактировать</button>
            </div>
        </div>
    )
}

export default Profile