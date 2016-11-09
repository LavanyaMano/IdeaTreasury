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
    ctrl.receiver='';
    ctrl.chatMode = false;

    ctrl.setUserImage = function setUserImage (){
        if(ctrl.me.rating_user<=10){
            ctrl.img1 = true;
            ctrl.img2 = false;
            ctrl.img3 = false;
        }
        if((ctrl.me.rating_user < 50)&& (ctrl.me.rating_user>10)){
            ctrl.img2 = true;
            ctrl.img1 = false;
            ctrl.img3 = false;
        }
        if(ctrl.me.rating_user>=50){
            ctrl.img3 = true;
            ctrl.img2 = false;
            ctrl.img1 = false;
        }
    }
    ctrl.setUserImage();
    ctrl.setReceiver = function setReceiver(name){
        ctrl.receiver = name;
        console.log("receiver name ---",ctrl.receiver);
    };
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
        ctrl.receiverid;
        for (var dchat in ctrl.mychat){
            if (ctrl.receiverid == ctrl.mychat[dchat].sender[1] ){
                ctrl.thischat.push(ctrl.mychat[dchat]);}
            else if(ctrl.receiverid == ctrl.mychat[dchat].receiver){
                ctrl.thischat.push(ctrl.mychat[dchat]);
        }}
        ctrl.chatMode = true;
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

    ctrl.readChat= function readChat(chat){
        ctrl.itemToChat = chat;
        ctrl.itemToChat.read = true;
        console.log("chat receiverid -----,", chat.receiver);
        console.log("me .....id", ctrl.me.id);
        if(chat.receiver == ctrl.me.id){
            userAPIService.updateChat(ctrl.itemToChat).then((data)=>{
                console.log(data,"here inside read chat function");
        });
        }
        ctrl.itemToChat = {};
    };
}

export default UserPageController;