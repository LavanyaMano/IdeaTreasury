import { findIndex } from 'ramda';
function UserPageController(userAPIService,$state){
    const ctrl = this;
    ctrl.editedItem = {};
    ctrl.loginItem={};
    ctrl.itemToChat = {};
    ctrl.showChat = false;
    ctrl.mychat=[];
    ctrl.sent= [];
    ctrl.received =[];
    ctrl.thischat =[];
    ctrl.receiverid = null;
    ctrl.mychats = function mychats(){
        console.log("here"+ctrl.me.id);
        if (ctrl.chat){
            for (var data in ctrl.chat){
                if (ctrl.me.id == ctrl.chat[data].sender[1]){
                    ctrl.sent.push(ctrl.chat[data]);
                    ctrl.mychat.push(ctrl.chat[data]);
                }
                if (ctrl.me.id == ctrl.chat[data].receiver){
                    ctrl.received.push(ctrl.chat[data]);
                    ctrl.mychat.push(ctrl.chat[data]);
                }
            }
        };
    };
    ctrl.mychats();

    ctrl.showChatNotification = function showChatNotification(){
        ctrl.showChat = true;
    };


    ctrl.chatlog = function chatlog(){
        ctrl.mychat;
        console.log("my chat =====",ctrl.mychat);
        ctrl.receiverid;
        console.log("receiverid ;;;;",ctrl.receiverid);
        for (var dchat in ctrl.mychat){
            console.log("Loop is working");
            console.log("userdasfid id .  ", ctrl.receiverid);
            if (ctrl.receiverid == ctrl.mychat[dchat].sender[1] ){

                ctrl.thischat.push(ctrl.mychat[dchat]);}
            else if(ctrl.receiverid == ctrl.mychat[dchat].receiver){
                ctrl.thischat.push(ctrl.mychat[dchat]);
        }}
        console.log("this chat is ", ctrl.thischat)
    };

    ctrl.saveChat = function saveChat() {
        ctrl.itemToChat.receiver = ctrl.receiverid;
        console.log(ctrl.receiverid);
        console.log(ctrl.itemToChat);
        console.log("saveChat function working")
        userAPIService.saveChat(ctrl.itemToChat).then(()=>{
            $state.reload();
        });
        ctrl.itemToChat = {};
    };
    ctrl.readChat= function readChat(id){
        ctrl.itemToChat.id = id;
        ctrl.itemToChat.read = true;
        console.log("readchat function working", ctrl.itemToChat)
        userAPIService.saveChat(ctrl.itemToChat).then(()=>{
            $state.reload();
        });
        ctrl.itemToChat = {};
    };
}

export default UserPageController;