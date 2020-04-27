import React, { useState } from 'react'
import './MyPosts.css'

import PhotosSvg from '../../../assets/icons/photos.svg'
import MusicSvg from '../../../assets/icons/music.svg'
import VideoSvg from '../../../assets/icons/videos.svg'
import Post from './Post/Post'

const MyPosts = (props) => {

    let myPosts = props.posts.map(i => {
        return <Post message={i.message} likesCount={i.likesCount} />
    })

    let onAddPost = (e) => {
        if (e.keyCode == '13') {
            props.addPost();
        }
    }

    const onPostRemove = (id) => {
        props.deletePost(id);
    }

    let onPostChange = (e) => {
        // let text = newPostElement.current.value;
        let text = e.currentTarget.value;
        props.updateNewPost(text);
    }

    return (
        <div className="my-posts">
            <div className="my-posts__block">
                <img src="https://sun9-32.userapi.com/c849336/v849336730/699a2/YH3OtJVE20k.jpg?ava=1" alt="" />
                <input
                    onKeyDown={onAddPost}
                    value={props.newPostText}
                    type="text"
                    placeholder="Что у Вас нового?"
                    onChange={onPostChange}
                />
                <img className="photo" src={PhotosSvg} alt="prhotos" />
                <img className="video" src={VideoSvg} alt="videos" />
                <img className="music" src={MusicSvg} alt="music" />
            </div>
            {myPosts}
        </div>
    )
}

export default MyPosts