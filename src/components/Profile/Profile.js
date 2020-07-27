import React, { useState, useEffect, useCallback } from 'react'
import './Profile.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Friends from './Friends/Friends';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { getUserProfile, getStatus, savePhoto } from '../../redux/profile-reducer';
import userIcon from '../../assets/icons/user.png';
import Preloader from '../Common/Preloader/Preloader'

const Profile = () => {
    const [showBlock, setShowBlock] = useState(false);
    const { userId } = useParams();
    const isAuth = useSelector(state => state.auth.isAuth, shallowEqual);
    const authorizedUserId = useSelector(state => state.auth.userId, shallowEqual);
    const status = useSelector(state => state.profilePage.status, shallowEqual);
    const profile = useSelector(state => state.profilePage.profile, shallowEqual);
    const dispatch = useDispatch();

    const onChangePhoto = useCallback(e => {
        if (e.target.files.length) {
            dispatch(savePhoto(e.target.files[0]));
        }
    }, [dispatch]);

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

    if (!profile) {
        return <Preloader />
    }

    return (
        <div className="profile-page">
            <div className="profile-avatar" onMouseLeave={handleInviseBlock}>
                <div className="avatar__setting" >
                    <img onMouseEnter={handleShowBlock} src={profile ? profile.photos.large || userIcon : null} alt="vkss" />
                    {!userId ?
                        <div className={`${showBlock ? 'settings' : 'none'}`}>
                            <label htmlFor="files">Update photo</label>
                            <input id="files" style={{ visibility: "hidden" }} type="file" onChange={onChangePhoto} />
                        </div>

                        :
                        null
                    }
                </div>
                <button>Редактировать</button>
            </div>
            <Friends />
            <ProfileInfo status={status} userId={userId} profile={profile} userIcon={userIcon} />
        </div>
    )
}

export default Profile