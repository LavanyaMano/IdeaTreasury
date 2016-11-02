import { findIndex } from 'ramda';

function AppController(userAPIService,$interval) {
    const ctrl = this;

    function getCurrentUser(){
        userAPIService.currentuser.get().$promise.then((data)=>{
            ctrl.currentuser = data;
        });
    }
    getCurrentUser();
    $interval(getCurrentUser,9000);

}
export default AppController;