import template from './posts-category-item.html';
import PostsCategoryItemController from './posts-category-controller';

const postsCategoryItemComponent = {
    template,
    bindings:{
        me:'<',
        posts:'<',
        category:'<',
    },
    controller:PostsCategoryItemController,
    controllerAs:'postsCategoryItemCtrl',
};

export default postsCategoryItemComponent;