import React from 'react'
import './ProfileStatus.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { updateStatus } from '../../../../redux/profile-reducer';
import { useCallback } from 'react';

const ProfileStatus = ({ status }) => {
    const [editStatus, setEditStatus] = useState(false);
    const [profileStatus, setProfileStatus] = useState("");
    const dispatch = useDispatch();
    const node = useRef();

    const handleClickOutside = useCallback(e => {
        if (node.current.contains(e.target)) {
            return setEditStatus(true);;
        }
        setEditStatus(false);
    }, []);

    useEffect(() => {
        if (editStatus) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        setProfileStatus(status);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [status, editStatus, handleClickOutside]);

    const handleChange = useCallback(e => {
        setProfileStatus(e.target.value);
    }, []);

    const handleClick = () => {
        dispatch(updateStatus(profileStatus));
        setEditStatus(false);
    }

    return (
        <div ref={node} className="profile-status">
            {profileStatus ?
                <div className="profile-status__status" onClick={handleClickOutside}> {profileStatus}</div>
                :
                <li onClick={handleClickOutside}>
                    Change status
                </li>
            }
            <div className={`${editStatus ? "profile-status__edit" : "hide"}`}>
                <input type="text" placeholder="Enter your status" value={profileStatus} onChange={handleChange} />
                <button className="profile-status__edit-btn" onClick={handleClick}>Save</button>
            </div>
        </div>
    )
}

export default ProfileStatus