import React from 'react'
import './Dialogs.css'

import Messages from './Messages/Messages'
import SearchSvg from '../../assets/icons/search.svg'

const Dialogs = (props) => {
    let state = props.dialogsPage
    let messageElements = state.messages.map(m => {
        return <Messages key={m.id} messages={m.message} />
    })
    return (
        <div className="dialogs-container" >
            <div className="dialogs-top">
                <div className="dialogs-filter">
                    <input type="text" placeholder="Поиск" />
                    <img className="dialogs-icon_search" src={SearchSvg} alt="" />
                </div>
                <hr style={{ opacity: 0.3 }} />
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs