import React, { useState } from 'react'
import './Post.css'

import ArrowDown from '../../../../assets/icons/arrow-down.svg'

const Post = (props) => {
    const [showMenu, setShowMenu] = useState(false)

    const showMenus = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="post-container" >
            <div className="post__block">
                <div className="ava__post">
                    <img className="user-ava" src="https://sun9-32.userapi.com/c849336/v849336730/699a2/YH3OtJVE20k.jpg?ava=1" alt="" />
                    <img onClick={showMenus} className="close-icon" src={ArrowDown} alt="close" />
                    <div className={`${showMenu ? 'show_menu' : 'hide_menu'}`}  >
                        <ul>
                            <li>Удалить запись</li>
                            <li>Архивировать запись</li>
                            <li>Сохранить в закладках</li>
                            <li>Закрепить</li>
                            <li>Выключить комметарии</li>
                        </ul>
                    </div>
                    <div className="user_name__date" >
                        <p>User name</p>
                        <span>date: 26/09/2022</span>
                    </div>
                </div>
            </div>
            <ul className="existing_posts">
                {props.message}
            </ul>
        </div>

    )
}

export default Post