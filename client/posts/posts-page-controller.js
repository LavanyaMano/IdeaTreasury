import { findIndex } from 'ramda';
import { merge } from 'ramda';

function PostsPageController(postsAPIService,$state, $window){
    
    const ctrl = this;
    ctrl.itemToComment ={};
    ctrl.itemToRate = {};
    ctrl.itemToAdd = {};
    ctrl.itemToEdit={};
    ctrl.addMode= false;
    ctrl.editMode = false;

    ctrl.setMode = function setMode(mode){
        if (mode == "add"){
            ctrl.addMode = true;
            ctrl.editMode =false;
        }
        else if(mode == "edit"){
            ctrl.addMode = false;
            ctrl.editMode =true;
        }
        else{
            ctrl.addMode = false;
            ctrl.editMode = false
            console.log("addMode working");
        }
    };
    ctrl.addItem = function addItem(item){
        postsAPIService.addPost(item).then(()=>$state.reload())
    };
    ctrl.saveItem =function saveItem(item){
        postsAPIService.addPost(item).then(()=>$state.reload())
    };
    ctrl.deleteItem = function deleteItem(item){
        postsAPIService.removePost(item).then(()=>$state.reload())
    };
     
     ctrl.rateAdd = function rateAdd(item){
        postsAPIService.addRate(item).then(()=>$state.reload())

     };
     ctrl.rateDelete = function rateDelete(item){
        postsAPIService.removeRate(item).then(()=>$state.reload())
     };
     ctrl.commentAdd = function commentAdd(item){
        postsAPIService.addComment(item)
     };


     ctrl.changeComment = function changeComment(id){
        ctrl.itemToComment.id = id;
        ctrl.itemToComment.read = true;

        console.log("jkgdksjgdashgs===="+ ctrl.itemToComment.id);
        ctrl.commentAdd(ctrl.itemToComment);
        ctrl.itemToComment={};
    }

    ctrl.comment = function comment(id){
        ctrl.itemToComment.post_comment = id;
        ctrl.commentAdd(ctrl.itemToComment);
        console.log("commment"+ ctrl.itemToComment.comment);
        ctrl.itemToComment={};
    }

}

export default PostsPageController;