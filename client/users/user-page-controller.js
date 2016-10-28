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


//login data posting to login api
    ctrl.login = function login(loginItem){
        userAPIService.login.save(loginItem).$promise.then((savedItem) =>{
            ctrl.login =[
                savedItem,
                ...ctrl.login,
            ];
            ctrl.loginItem={};

            //flashesService.displayMessage('Item added!','success');
            console.log('Logged in! : This is from posts-page-controller');
        });
    };

//register new user through rest-auth/registration api
    ctrl.signupUser = function signupUser(signupItem){
        userAPIService.signup.sign(signupItem).$promise.then((savedItem) =>{
            ctrl.signup =[
                savedItem,
                ...ctrl.signup,
            ];
            ctrl.loginItem={};

            //flashesService.displayMessage('Item added!','success');
            console.log('signed up! : This is from posts-page-controller');
        });
    };
}

export default UserPageController;