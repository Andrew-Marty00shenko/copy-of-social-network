import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <ul className="nav">
            <li>
                <NavLink to="/">Моя страница</NavLink>
            </li>
            <li>
                <NavLink to="/news">Новости</NavLink>
            </li>
            <li>
                <NavLink to="/messages">Сообщения</NavLink>
            </li>
            <li>
                <NavLink to="/friends">Друзья</NavLink>
            </li>
            <li>
                <NavLink to="/socials">Сообщества</NavLink>
            </li>
            <li>
                <NavLink to="/photos">Фотографии</NavLink>
            </li>
            <li>
                <NavLink to="/music">Музыка</NavLink>
            </li>
            <li>
                <NavLink to="/videos">Видео</NavLink>
            </li>
            <li>
                <NavLink to="/games">Игры</NavLink>
            </li>
        </ul>
    )
}

export default NavBar