import { merge } from 'ramda';

function LoginController(){
    const ctrl = this;
    ctrl.loginItem = {};
    ctrl.signupItem={};

    ctrl.setMode = function setMode(mode){
        if (mode == "login" ){
            ctrl.loginMode =true;
            ctrl.signupMode = false;
        }
        else if (mode == "signup" ){
            ctrl.loginMode =false;
            ctrl.signupMode = true;

        }
    };

    ctrl.saveItem = function saveItem(){
        ctrl.save({loginItem: ctrl.loginItem})
        ctrl.loginItem={};
        console.log("login working at login -page")
    };

    ctrl.signupItem = function signupItem(){
        ctrl.sign({signupItem: ctrl.signupItem})
        ctrl.signupItem={};
        console.log("signup working at login -page")
    };
}

export default LoginController;