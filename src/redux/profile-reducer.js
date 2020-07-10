import { profileApi } from "../API/API"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE_NEW_POST'
const DELETE_POST = 'DELETE_POST'
const SET_STATUS = 'SET_STASUS'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        { id: 1, message: 'Как дела?', likesCount: 0 },
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(posts => posts.id !== action.payload)
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST });
export const updateNewPost = (text) => ({ type: UPDATE_NEW_POST, newText: text });
export const removePost = (id) => ({ type: DELETE_POST, payload: id });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setUserProfile = (userId) => ({ type: SET_USER_PROFILE, userId })

export const getUserProfile = (userId) => dispatch => {
    return profileApi.getUserProfile(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserProfile(res.data));
            }
        })
}

export const getStatus = (userId) => dispatch => {
    return profileApi.getStatus(userId)
        .then(res => {
            dispatch(setStatus(res.data));
        })
}

export const updateStatus = (status) => dispatch => {
    profileApi.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}

export default profileReducer