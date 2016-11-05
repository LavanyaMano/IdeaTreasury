import template from './user-page.html';
import UserPageController from './user-page-controller';

const userPageComponent = {
    template,
    bindings:{
        me:'<',
        users:'<',
        chat:'<',
    },
    controller:UserPageController,
    controllerAs:'userPageCtrl',
};

export default userPageComponent;



