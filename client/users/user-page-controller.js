import { findIndex } from 'ramda';
function UserPageController(userAPIService,$interval){
    const ctrl = this;
    ctrl.editedItem = {};
    ctrl.loginItem={};

    function getUser(){
        userAPIService.user.get().$promise.then((data)=>{
            ctrl.user = data.results;
            ctrl.itemsCount = ctrl.user.length;
        });
    }
    getUser();
    $interval(getUser,9000);

    //saving chat messages
    function getChat(){
        userAPIService.chat.get().$promise.then((data)=>{
            ctrl.chat = data.results;
        });
    }
    getChat();
    $interval(getChat,9000);
    ctrl.saveChat= function saveChat(editedItem){
        userAPIService.chat.save(editedItem).$promise.then((savedItem) =>{
            ctrl.chat =[
                savedItem,
                ...ctrl.chat,
            ];
            //flashesService.displayMessage('Chatadded!','success');
            console.log('Chatadded! : This is from posts-page-controller');
        });
    };
}

export default UserPageController;