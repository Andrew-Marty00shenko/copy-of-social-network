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
        setShowBlock(!showBlock)
    }
    const handleInviseBlock = () => {
        setShowBlock(!showBlock);
    }

    return (
        <div className="profile-page">
            <div className="profile-avatar">
                <div className="avatar__setting" onMouseLeave={handleInviseBlock}>
                    <img onMouseEnter={handleShowBlock} src="https://sun9-4.userapi.com/impf/c849336/v849336730/6999e/RZAbcj5kt00.jpg?size=200x0&quality=90&sign=60345877c965fb6f810725b815e3233d" alt="" />
                    <div className={`${showBlock ? 'settings' : 'none'}`}>
                        <li> Обновить фотографию</li>
                        <li> Изменить миниатюру</li>
                        <li> Добавить эффекты</li>
                    </div>
                </div>
                <button>Редактировать</button>
            </div>
            <Friends />
            <ProfileInfo status={status} />
        </div>
    )
}

export default Profile