import template from './posts-edit.html';
import PostsEditController from './posts-edit.controller';

const postsEditComponent ={
    template,
    bindings:{
        save:'&',
        post:'<',
        cancel:'&?',
    },
    controller:PostsEditController,
    controllerAs:'postsEditCtrl',
};

export default postsEditComponent;
