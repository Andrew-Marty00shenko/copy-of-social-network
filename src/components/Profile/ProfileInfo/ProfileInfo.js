import React from 'react'
import './ProfileInfo.css'

const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <div className="profile-info__user">
                <div className="user-name__user-status">
                    <div className="user-name">
                        User Name
                    </div>
                    <div className="user-status">
                        #9
                    </div>
                    <hr style={{ background: '#d7d8db', opacity: 0.3, marginTop: '15px' }} />
                </div>
                <div className="user-info">
                    <ul>
                        <li>День рождения:</li>
                        <li>Город:</li>
                        <li>Место учебы:</li>
                        <li>Ссылка:</li>
                    </ul>
                    <div className="user-side">
                        <ul>
                            <li> <a href="#">26 сентября</a> </li>
                            <li><a href="#">Ростов-на-дону</a></li>
                            <li><a href="#">ДГТУ</a></li>
                            <li><a href="http://vkontakte.ru/id145602269">http://vkontakte.ru/id145602269</a></li>
                        </ul>
                    </div>
                </div>
                <button>Показать подробную информацию</button>
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
        </div>
    )
}

export default ProfileInfo