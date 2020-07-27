import { authApi } from "../API/API";
import { stopSubmit } from "redux-form";

const SET_USER = "SET_USER";
const SET_LOADING = "SET_LOADING";

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isLoading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: {
            return state
        }
    }
}

export const setUser = (userId, login, email, isAuth) => ({ type: SET_USER, data: { userId, login, email, isAuth } });
export const setLoading = (isLoading) => ({ type: SET_LOADING, isLoading });

export const getUserProfile = () => dispatch => {
    return authApi.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                let { id, login, email } = res.data.data;
                dispatch(setUser(id, login, email, true));
            }
        })
}

export const login = (email, password) => dispatch => {
    dispatch(setLoading(true))
    return authApi.login(email, password)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getUserProfile());
                dispatch(setLoading(false));
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", { _error: message }));
                dispatch(setLoading(false));
            }
        })
}

export const logout = () => dispatch => {
    return authApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUser(null, null, null, false))
            }
        })
}

export default authReducer