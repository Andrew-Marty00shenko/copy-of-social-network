import React, { useEffect, useCallback } from 'react'
import CurrentUser from './CurrentUser/CurrentUser';
import Paginate from '../Common/Pagination/Pagination';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getUsers } from '../../redux/users';
import './Users.scss';
import Preloader from '../Common/Preloader/Preloader';

const Users = () => {
    const users = useSelector(state => state.usersPage.users, shallowEqual);
    const isFetching = useSelector(state => state.usersPage.isFetching, shallowEqual);
    const pageSize = useSelector(state => state.usersPage.pageSize, shallowEqual);
    const totalUsersCount = useSelector(state => state.usersPage.totalUsersCount, shallowEqual);
    const currentPage = useSelector(state => state.usersPage.currentPage, shallowEqual);
    const dispatch = useDispatch();

    const onPageChanged = useCallback(pageNumber => {
        dispatch(getUsers(pageNumber, pageSize));
    }, [dispatch, pageSize]);

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize));
    }, [dispatch, currentPage, pageSize]);

    return (
        <>
            {isFetching ? <Preloader />
                :
                <div className="users"  >
                    {
                        users.map(user => {
                            return <CurrentUser key={user.id} user={user} />
                        })
                    }
                    <Paginate currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
                </div>
            }
        </>
    )
}

export default Users;