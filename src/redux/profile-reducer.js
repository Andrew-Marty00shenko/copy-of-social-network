import { profileApi, usersApi } from "../API/API"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE_NEW_POST'
const DELETE_POST = 'DELETE_POST'
const SET_STATUS = 'SET_STASUS'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Math.floor(Math.random() * 100),
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
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
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId) => dispatch => {
    return usersApi.getUserProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data));
        })
}

export const getStatus = (userId) => dispatch => {
    return profileApi.getStatus(userId)
        .then(res => {
            dispatch(setStatus(res.data));
        });
}

export const updateStatus = (status) => dispatch => {
    profileApi.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export const savePhoto = (file) => dispatch => {
    return profileApi.savePhoto(file)
        .then(res => {
            dispatch(savePhotoSuccess(res.data.data.photos));
            // console.log(res.data);
        })
}

export default profileReducer;