import { findIndex } from 'ramda';
import { merge } from 'ramda';

function PostController(postsAPIService,$state,){
    
    const ctrl = this;
    ctrl.editedItem = ctrl.post;
    ctrl.itemToComment = {};
    ctrl.itemToRate = {};
    ctrl.rateMode = false;
    ctrl.editMode = false;
    ctrl.rating = 1;

    console.log("page is reloading ==== ", ctrl.post);
    ctrl.Mode = function Mode (mode){
        if (mode == 'edit'){
            ctrl.editMode = true;
        }
        else if (mode == 'rate'){
            ctrl.rateMode = true;
        }
    };
    ctrl.setEditedItems = function setEditedItems(item){
        ctrl.editedItem = item;
        console.log("jksbfalfnblAKSf", ctrl.editedItem)
    };

    ctrl.saveItem =function saveItem(){
        postsAPIService.updatePost(ctrl.editedItem).then((data)=>{
            console.log("this is the item add to api",data)
            $state.reload();
        })
    };
    ctrl.cancel = function cancel(){
        ctrl.editMode =false;
    };

    //delete post
    ctrl.deleteItem = function deleteItem(){
        postsAPIService.removePost(ctrl.post).then(()=>{$state.go('posts');})
    };


    // add rate 
    ctrl.addRate = function addRate (){
        ctrl.itemToRate.rating = ctrl.rating;
        ctrl.itemToRate.rated_by = ctrl.me.id;
        ctrl.itemToRate.post_rated = ctrl.post.id;
        console.log('working add rate' , ctrl.post.id);
        postsAPIService.addRate(ctrl.itemToRate).then(()=>$state.reload())
    };

    //addUse
    ctrl.addUse = function addUse (){
        ctrl.post.postusers.push(ctrl.me.id);
        console.log("adduse function in post ctrl");
        console.log("this is post users  ",ctrl.post.postusers);
        postsAPIService.updatePost(ctrl.post).then((data)=>$state.reload())
    };

    //addLike
    ctrl.addLike = function addLike (){
        ctrl.post.likes.push(ctrl.me.id);
        postsAPIService.updatePost(ctrl.post).then(()=>$state.reload())
    };

    //add comment
    ctrl.addComment = function addComment(){
        ctrl.itemToComment.comment_by = ctrl.me.id;
        ctrl.itemToComment.post_comment = ctrl.post.id;
        postsAPIService.addComment(ctrl.itemToComment).then(()=>$state.reload())
    };

    //read comment
    ctrl.readComment = function readComment(data){
        data.read= true;
        if(ctrl.post.username== ctrl.me.username){
            postsAPIService.updateComment(data).then(()=> $state.reload())
        }
        
    };


}

export default PostController;