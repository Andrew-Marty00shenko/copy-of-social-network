import { addPostAC, updateNewPostAC, deletePostAC } from "../../../redux/profile-reducer"
import { connect } from "react-redux"
import MyPosts from "./MyPosts"

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updateNewPost: (text) => {
            dispatch(updateNewPostAC(text))
        },
        deletePost: (id) => {
            dispatch(deletePostAC(id))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer