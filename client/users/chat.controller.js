import { merge } from 'ramda';

function ChatController(){
    const ctrl = this;
    ctrl.ChatItem = {};


    ctrl.saveChat = function saveChat(){
        ctrl.ChatItem.sender = 1;
        ctrl.save({chatToSave: ctrl.ChatItem})
        ctrl.ChatItem={};
        console.log("Chat working at Chat -page")
    };

}

export default ChatController;