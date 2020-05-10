const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'

let initialState = {
    messages: [
        { id: 1, message: 'Message' },
        { id: 2, message: 'How are you?' }
    ],
    newText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newText = state.newText;
            return {
                ...state,
                messages: [...state.messages, { id: 2, message: newText }]
            }
        }
        case UPDATE_NEW_MESSAGE: {
            return {
                ...state,
                newText: action.body
            }
        }
        default:
            return state
    }
}

export const sendMessage = () => ({ type: SEND_MESSAGE })
export const updateMessage = (body) => ({ type: UPDATE_NEW_MESSAGE, body })

export default dialogsReducer;
