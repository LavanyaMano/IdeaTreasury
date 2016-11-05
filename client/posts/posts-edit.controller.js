import { merge } from 'ramda';

function PostsEditController(postsAPIService,$state){
    const ctrl = this;
    ctrl.editedItem = {};
    ctrl.editedItem.category = "ART";
    ctrl.editedItem.visible = true;

    ctrl.saveItem =function saveItem(item){
        postsAPIService.addPost(item).then((data)=>{
            console.log(data)
            $state.go('posts')
        })
    };
    ctrl.cancel = function cancel(){
        $state.go('posts')
    };
}


export default PostsEditController;