import template from './user-login.html';
import LoginController from './user-login.controller';

const loginComponent ={
    template,
    bindings:{
        save:'&',
        sign:'&',
    },
    controller:LoginController,
    controllerAs:'loginCtrl',
};

export default loginComponent;
