import React from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'
import HomeSvg from '../../assets/icons/home.svg'
import NewsSvg from '../../assets/icons/news.svg'
import MessageSvg from '../../assets/icons/message.svg'
import FriendSvg from '../../assets/icons/user.svg'

const links = [
    { id: 1, link: "My profile", image: <img src={HomeSvg} alt="home" />, to: "/profile" },
    { id: 2, link: "News", image: <img src={NewsSvg} alt="news" />, to: "/news" },
    { id: 3, link: "Messages", image: <img src={MessageSvg} alt="messages" />, to: "/messages" },
    { id: 4, link: "Users", image: <img src={FriendSvg} alt="users" />, to: "/users" },
]

const NavBar = () => {
    return (
        <ul className="nav">
            {links.map(l => {
                return <NavLink key={l.id} to={l.to}>
                    <li>
                        {l.image}
                        {l.link}
                    </li>
                </NavLink>
            })}
        </ul>
    )
}

export default NavBar