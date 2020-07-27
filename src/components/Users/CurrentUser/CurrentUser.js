import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/icons/user.png'

const CurrentUser = ({ user }) => {

    return (
        <div>
            <div className="users-info">
                <div className="users-info__photo">
                    <NavLink to={`profile/${user.id}`}>
                        <img src={user.photos.small || userPhoto} alt="" />
                    </NavLink>
                </div>
                <div className="users-info__text">
                    <div className="users-info__text-name">
                        <NavLink to={`profile/${user.id}`}>
                            {user.name}
                        </NavLink>
                    </div>
                    <div className="users-info__text-message">
                        Write a message
        </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CurrentUser;