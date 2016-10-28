import template from './posts-item.html';
import PostsItemController from './posts-item.controller';

const postsItemComponent = {
    template,
    bindings:{
        post:'<',
        delete:'&',
        update:'&',
        save:'&',
        postcomment:'&',
        changecomment:'&',
    },
    controller: PostsItemController,
    controllerAs:'postsItemCtrl',
};

export default postsItemComponent;
