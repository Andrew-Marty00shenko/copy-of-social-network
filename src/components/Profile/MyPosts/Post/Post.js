import React, { Component } from 'react'
import './Post.css'

import ArrowDown from '../../../../assets/icons/arrow-down.svg'
class Post extends Component {
    constructor() {
        super();
        this.state = {
            currentTime: null,
            showMenu: false
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString()
            })
        }, 1000)
    }

    render() {
        return (
            <div className="post-container">
                <div className="post__block">
                    <div className="ava__post">
                        <img className="user-ava" src="https://sun9-32.userapi.com/c849336/v849336730/699a2/YH3OtJVE20k.jpg?ava=1" alt="" />
                        <div className="show_menu">
                            <ul>
                                <li>Удалить запись</li>
                                <li>Архивировать запись</li>
                                <li>Сохранить в закладках</li>
                                <li>Закрепить</li>
                                <li>Выключить комметарии</li>
                            </ul>
                        </div>
                        <img className="close-icon" src={ArrowDown} alt="close" />
                        <div className="user_name__date">
                            <p>User name</p>
                            <span>date: {this.state.currentTime}</span>
                        </div>
                    </div>
                </div>
                <div className="existing_posts">
                    <div>
                        {this.props.message}
                    </div>
                </div>
            </div>
        )
    }
}

export default Post