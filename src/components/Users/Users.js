import React, { useEffect } from 'react'
import './Users.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getUsers } from '../../redux/users';
import { NavLink } from 'react-router-dom';
import Preloader from '../Common/Preloader';
import userPhoto from '../../assets/icons/user.png'
import { useState } from 'react';
import { useCallback } from 'react';
import Axios from 'axios';

const Users = () => {
    const users = useSelector(state => state.usersPage.users, shallowEqual);
    const isFetching = useSelector(state => state.usersPage.isFetching, shallowEqual);
    const pageSize = useSelector(state => state.usersPage.pageSize, shallowEqual);
    // const totalUsersCount = useSelector(state => state.usersPage.totalUsersCount, shallowEqual);
    const currentPage = useSelector(state => state.usersPage.currentPage, shallowEqual);
    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        dispatch(getUsers(currentPage + 1, pageSize));
    }, [currentPage, pageSize, dispatch]);

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
        window.addEventListener("click", () => handleClick());
        return window.removeEventListener("click", () => handleClick());
    }, []);

    return (
        <>
            {isFetching ? <Preloader />
                :
                <div className="users"  >
                    {
                        users.map(user => {
                            return <div key={user.id}>
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
                        })
                    }
                    {isFetching && 'Fetching more list items...'}
                    <button onClick={handleClick}>click</button>
                </div>
            }
        </>
    )
}

export default Users;