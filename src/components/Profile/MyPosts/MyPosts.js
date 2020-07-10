import React from 'react'
import './MyPosts.css'

import PhotosSvg from '../../../assets/icons/photos.svg'
import MusicSvg from '../../../assets/icons/music.svg'
import VideoSvg from '../../../assets/icons/videos.svg'
import Post from './Post/Post'
import { useSelector, useDispatch } from 'react-redux';
import { addPost, updateNewPost, removePost } from '../../../redux/profile-reducer'
import { useCallback } from 'react'

const MyPosts = () => {
    const posts = useSelector(state => state.profilePage.posts);
    const newPostText = useSelector(state => state.profilePage.newPostText);
    const dispatch = useDispatch();

    let onAddPost = useCallback(e => {
        if (e.keyCode === 13) {
            dispatch(addPost());
        }
    }, [dispatch]);

    const deletePost = useCallback(id => {
        dispatch(removePost(id));
    }, [dispatch])

    let onPostChange = useCallback(e => {
        let text = e.currentTarget.value;
        dispatch(updateNewPost(text));
    }, [dispatch])

    return (
        <div className="my-posts">
            <div className="my-posts__block">
                <img src="https://sun9-32.userapi.com/c849336/v849336730/699a2/YH3OtJVE20k.jpg?ava=1" alt="" />
                <input
                    onKeyDown={onAddPost}
                    value={newPostText}
                    type="text"
                    placeholder="Что у Вас нового?"
                    onChange={onPostChange}
                />
                <img className="photo" src={PhotosSvg} alt="prhotos" />
                <img className="video" src={VideoSvg} alt="videos" />
                <img className="music" src={MusicSvg} alt="music" />
            </div>
            {posts.map(post => {
                return <Post key={post.id} message={post.message} deletePost={deletePost} id={post.id} likesCount={post.likesCount} />
            })}
        </div>
    )
}

export default MyPosts