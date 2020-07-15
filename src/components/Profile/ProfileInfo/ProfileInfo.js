import React from 'react'
import './ProfileInfo.css'
import MyPosts from '../MyPosts/MyPosts'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileInfo = ({ status, profile }) => {

    return (
        <div className="profile-info">
            <div className="profile-info__user">
                <div className="user-name__user-status">
                    <div className="user-name">
                        {profile ? profile.fullName : null}
                    </div>
                    <div className="user-status">
                        <ProfileStatus status={status} />
                    </div>
                    <hr style={{ background: '#d7d8db', opacity: 0.3, marginTop: '10px' }} />
                </div>
                <div className="user-info">
                    <ul>
                        <li>День рождения:</li>
                        <li>Город:</li>
                        <li>Место учебы:</li>
                        <li>Ссылка:</li>
                    </ul>
                </div>
                <button className="profile-info__name">Показать подробную информацию</button>
                <hr style={{ background: '#d7d8db', opacity: 0.3, marginTop: '15px' }} />
                <div className="user-info__lower">
                    <ul>
                        <div>
                            0
                            <li>Друзья</li>
                        </div>
                        <div>
                            0
                            <li>Подписчики</li>
                        </div>
                        <div>
                            0
                            <li>Музыка</li>
                        </div>
                        <div>
                            0
                            <li>Фотографии</li>
                        </div>
                    </ul>
                </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default ProfileInfo