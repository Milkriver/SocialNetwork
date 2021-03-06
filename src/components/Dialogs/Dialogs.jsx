import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.messagesPage;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messageElements = state.messages.map(message => <Message id={message.id} message={message.message} key={message.id}/>)
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div> <button onClick={onSendMessageClick}>Отправить сообщение</button></div>
                </div>
            </div>
        </div>
    )

}

export default Dialogs;
