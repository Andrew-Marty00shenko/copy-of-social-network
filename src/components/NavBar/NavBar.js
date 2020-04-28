import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

import HomeSvg from '../../assets/icons/home.svg'
import NewsSvg from '../../assets/icons/news.svg'
import MessageSvg from '../../assets/icons/message.svg'
import FriendSvg from '../../assets/icons/user.svg'
import SocialsSvg from '../../assets/icons/users.svg'
import PhotosSvg from '../../assets/icons/photos.svg'
import MusicSvg from '../../assets/icons/music.svg'
import VideoSvg from '../../assets/icons/videos.svg'
import GamesSvg from '../../assets/icons/game.svg'

const NavBar = () => {
    return (
        <ul className="nav">
            <li>
                <div>
                    <img src={HomeSvg} alt="home" />
                    <NavLink to="/profile">Моя страница</NavLink>
                </div>
            </li>
            <li>
                <div>
                    <img src={NewsSvg} alt="news" />
                    <NavLink to="/news">Новости</NavLink>
                </div>
            </li>
            <li>
                <div>
                    <img src={MessageSvg} alt="messages" />
                    <NavLink to="/dialogs">Сообщения</NavLink>
                </div>
            </li>
            <li>
                <div>
                    <img src={FriendSvg} alt="friend" />
                    <NavLink to="/friends">Друзья</NavLink>
                </div>
            </li>
            <li>
                <div>
                    <img src={SocialsSvg} alt="socials" />
                    <NavLink to="/socials">Cообщества</NavLink>
                </div>
            </li>
            <li>
                <div>
                    <img src={PhotosSvg} alt="prhotos" />
                    <NavLink to="/photos">Фотографии</NavLink>
                </div>
            </li>
            <li>
                <div>
                    <img src={MusicSvg} alt="music" />
                    <NavLink to="/music">Музыка</NavLink>
                </div>
            </li>
            <li>
                <div>
                    <img src={VideoSvg} alt="videos" />
                    <NavLink to="/videos">Видео</NavLink>
                </div>
            </li>
            <li>
                <div>
                    <img src={GamesSvg} alt="games" />
                    <NavLink to="/games">Игры</NavLink>
                </div>
            </li>
        </ul>
    )
}

export default NavBar