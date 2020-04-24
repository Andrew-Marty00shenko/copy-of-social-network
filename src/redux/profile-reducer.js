const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE_NEW_POST'

let initialState = {
    posts: [
        { id: 1, message: 'Как дела?', likesCount: 0 },
        { id: 2, message: 'Бла бла бла', likesCount: 0 },
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
                newPostText
            }
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPost = (text) => ({ type: UPDATE_NEW_POST, newText: text })

export default profileReducer