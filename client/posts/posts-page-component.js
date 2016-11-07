import template from './posts-page.html';
import PostsPageController from './posts-page-controller';

const postsPageComponent = {
    template,
    bindings:{
        me:'<',
        posts:'<',
        filter:'<',
    },
    controller:PostsPageController,
    controllerAs:'postsPageCtrl',
};

export default postsPageComponent;