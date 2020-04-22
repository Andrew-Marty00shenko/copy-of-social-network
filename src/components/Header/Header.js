import React from 'react'
import './Header.css'

import VkIcon from '../../assets/icons/vk.svg'
import BellSvg from '../../assets/icons/sound.svg'
import SearchSvg from '../../assets/icons/search.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="header-items">
                <img src={VkIcon} className="logo" alt="icon logo" />
                <div className="header-hashtag">#лучшедома</div>
            </div>
            <div className="search-filter">
                <input type="text" placeholder="Поиск" />
                <img className="search" src={SearchSvg} alt="" />
                <img className="bell" src={BellSvg} alt="bell icon" />
            </div>
            <div className="ava_user-name">
                <div className="user__Name">User Name</div>
                <img className="header-ava" src="https://sun9-32.userapi.com/c849336/v849336730/699a2/YH3OtJVE20k.jpg?ava=1" alt="" />
            </div>
        </div>
    )
}

export default Header