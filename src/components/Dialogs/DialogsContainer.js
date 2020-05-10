import { connect } from "react-redux"
import { sendMessage, updateMessage } from "../../redux/dialogs-reducer"
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newText: state.dialogsPage.newText
    }
}

const DialogsContainer = connect(mapStateToProps, { sendMessage, updateMessage })(Dialogs)

export default DialogsContainer