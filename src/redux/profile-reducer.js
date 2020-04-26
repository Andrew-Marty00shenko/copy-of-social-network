const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE_NEW_POST'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    posts: [
        { id: 1, message: 'Как дела?', likesCount: 0 }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.id + 1,
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
                posts: [state.posts.filter(posts => posts.id !== action.payload)]
            }
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostAC = (text) => ({ type: UPDATE_NEW_POST, newText: text })
export const deletePostAC = (id) => ({ type: DELETE_POST, payload: id })

export default profileReducer