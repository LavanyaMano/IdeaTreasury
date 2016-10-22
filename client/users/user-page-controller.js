import { findIndex } from 'ramda';
function UserPageController(userAPIService,$interval){
    const ctrl = this;
    ctrl.editedItem = {};

    function getUser(){
        userAPIService.user.get().$promise.then((data)=>{
            ctrl.user = data.results;
            ctrl.itemsCount = ctrl.user.length;
        });
    }
    getUser();
    $interval(getUser,9000);

}

export default UserPageController;