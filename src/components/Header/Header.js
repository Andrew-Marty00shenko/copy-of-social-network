import React, { useState, useCallback, useRef } from 'react'
import './Header.scss'
import VkIcon from '../../assets/icons/vk.svg'
import BellSvg from '../../assets/icons/sound.svg'
import SearchSvg from '../../assets/icons/search.svg'
import { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getUserProfile, logout } from '../../redux/auth'
import { NavLink, useHistory } from 'react-router-dom';
import ArrowDown from '../..//assets/icons/arrow-down.svg'

const Header = () => {
    const [showBlock, setShowBlock] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(state => state.auth.login, shallowEqual);
    const isAuth = useSelector(state => state.auth.isAuth, shallowEqual);
    const node = useRef();

    const handleClickOutside = useCallback(e => {
        if (node.current.contains(e.target)) {
            return setShowBlock(true);;
        }
        setShowBlock(false);
    }, [node]);

    useEffect(() => {
        if (showBlock) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }
        dispatch(getUserProfile());
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [dispatch, handleClickOutside, showBlock]);

    const handleClick = () => {
        dispatch(logout());
        history.push("/login");
    }

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
                <div ref={node} className="user__Name">
                    {isAuth && <img className="close-icon" src={ArrowDown} alt="" />}
                    {isAuth
                        ? <div className="user-Name__settings">
                            <span onClick={handleClickOutside} >{userName}</span>
                            <div className={`${showBlock ? "show-block" : "hide-block"}`}>
                                <div>{userName}</div>
                                <hr />
                                <li onClick={handleClick}>Logout</li>
                                <li>Help</li>
                            </div>
                        </div>
                        :
                        <NavLink to="login">
                            <li>Login</li>
                        </NavLink>
                    }</div>
                {/* <img className="header-ava" src="https://sun9-32.userapi.com/c849336/v849336730/699a2/YH3OtJVE20k.jpg?ava=1" alt="" /> */}
            </div>
        </div>
    )
}

export default Header