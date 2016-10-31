import template from './chat.html';
import ChatController from './chat.controller';

const chatComponent ={
    template,
    bindings:{
        save:'&'
    },
    controller:ChatController,
    controllerAs:'chatCtrl',
};

export default chatComponent;
