import React, { useState, useEffect } from 'react'
import './Profile.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Friends from './Friends/Friends';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { getUserProfile, getStatus } from '../../redux/profile-reducer';

const Profile = () => {
    const [showBlock, setShowBlock] = useState(false);
    const { userId } = useParams();
    const isAuth = useSelector(state => state.auth.isAuth, shallowEqual);
    const authorizedUserId = useSelector(state => state.auth.userId);
    const status = useSelector(state => state.profilePage.status);
    const profile = useSelector(state => state.profilePage.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        let id = userId;
        if (!id) {
            id = authorizedUserId;
        }
        dispatch(getUserProfile(id));
        dispatch(getStatus(id));
    }, [dispatch, userId, authorizedUserId]);

    if (!isAuth) {
        return <Redirect to="/login" />
    }

    const handleShowBlock = () => {
        setShowBlock(true)
    }
    const handleInviseBlock = () => {
        setShowBlock(false);
    }

    return (
        <div className="profile-page">
            <div className="profile-avatar" onMouseLeave={handleInviseBlock}>
                <div className="avatar__setting" >
                    <img onMouseEnter={handleShowBlock} src="https://vk.com/images/camera_200.png?ava=1" alt="" />
                    <div className={`${showBlock ? 'settings' : 'none'}`}>
                        <li> Обновить фотографию</li>
                        <li> Изменить миниатюру</li>
                        <li> Добавить эффекты</li>
                    </div>
                </div>
                <button>Редактировать</button>
            </div>
            <Friends />
            <ProfileInfo status={status} profile={profile} />
        </div>
    )
}

export default Profile