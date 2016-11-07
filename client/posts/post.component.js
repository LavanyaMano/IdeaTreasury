import template from './post.html';
import PostController from './post.controller';

const postComponent = {
    template,
    bindings:{
        me:'<',
        post:'<',
    },
    controller:PostController,
    controllerAs:'postCtrl',
};

export default postComponent;