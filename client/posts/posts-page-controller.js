import { findIndex } from 'ramda';

function PostsPageController(postsAPIService,$interval){
    const ctrl = this;
    ctrl.editedItem = {};

    function getPosts(){
        postsAPIService.posts.get().$promise.then((data)=>{
            ctrl.posts = data.results;
            ctrl.itemsCount = ctrl.posts.length;
        });
    }
    getPosts();
    $interval(getPosts,9000);

}

export default PostsPageController;