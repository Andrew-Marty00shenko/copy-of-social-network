import React from 'react'
import './MyPosts.css'

import PhotosSvg from '../../../../assets/icons/photos.svg'
import MusicSvg from '../../../../assets/icons/music.svg'
import VideoSvg from '../../../../assets/icons/videos.svg'

const MyPosts = (props) => {
    return (
        <div className="my-posts">
            <div className="my-posts__block">
                <img src="https://sun9-32.userapi.com/c849336/v849336730/699a2/YH3OtJVE20k.jpg?ava=1" alt="" />
                <input
                    type="text"
                    placeholder="Что у Вас нового?"
                />
                <img className="photo" src={PhotosSvg} alt="prhotos" />
                <img className="video" src={VideoSvg} alt="videos" />
                <img className="music" src={MusicSvg} alt="music" />
            </div>
        </div>
    )
}

export default MyPosts