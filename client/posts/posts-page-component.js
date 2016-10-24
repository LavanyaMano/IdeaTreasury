import template from './posts-page.html';
import PostsPageController from './posts-page-controller';

const postsPageComponent = {
    template,
    bindings:{
        filter:'<',
    },
    controller:PostsPageController,
    controllerAs:'postsPageCtrl',
};

export default postsPageComponent;