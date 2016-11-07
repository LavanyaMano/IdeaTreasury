import template from './posts-category.html';
import PostsCategoryController from './posts-controller';

const postsCategoryComponent = {
    template,
    bindings:{
        me:'<',
        posts:'<',
    },
    controller:PostsCategoryController,
    controllerAs:'postsCategoryCtrl',
};

export default postsCategoryComponent;