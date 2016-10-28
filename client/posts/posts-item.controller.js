import {merge} from "ramda";

function PostsItemController(){
    const ctrl = this;
    ctrl.showControls =false;
    ctrl.itemToEdit={};
    ctrl.editMode = false;
    ctrl.editRate ={};
    ctrl.itemToComment = {};
    ctrl.selectedComment = ctrl.post.comment_set[0]

    ctrl.setShowControls = function setShowControls(showControls){
        ctrl.showControls = showControls;
    };

    ctrl.setMode = function setMode(mode){
        if (mode == "edit"){
            ctrl.editMode = true;
            ctrl.itemToEdit = merge({},ctrl.post);
        }
        else{
            ctrl.editMode = false;
        }
    };
    ctrl.deleteItem = function deleteItem(){
        ctrl.delete({itemToDelete: ctrl.post});
    };
    ctrl.editItem = function editItem(itemToEdit){
        ctrl.update({itemToUpdate:itemToEdit});
        ctrl.post = itemToEdit;
        ctrl.editMode = false;
    };


    //adding use and undo use of post by users section

    ctrl.addUseMode = true;
    ctrl.addUse = function addUse(){
        ctrl.post.postusers.push(1);
        ctrl.update({itemToUpdate:ctrl.post});
        console.log("working adduse in item-controller");
        ctrl.addUseMode = false;
    };
    ctrl.removeUse = function removeUse(){
        ctrl.post.postusers.pop(1);
        ctrl.update({itemToUpdate:ctrl.post});
        console.log("working removeuse in item-controller");
        ctrl.addUseMode = true;
    };

    //adding Like and undo Like of post by Likes section

    ctrl.addLikeMode = true;
    ctrl.addLike = function addLike(){
        ctrl.post.likes.push(1);
        ctrl.update({itemToUpdate:ctrl.post});
        console.log("working addLike in item-controller");
        ctrl.addLikeMode = false;
    };
    ctrl.removeLike = function removeLike(){
        ctrl.post.likes.pop(1);
        ctrl.update({itemToUpdate:ctrl.post});
        console.log("working removeLike in item-controller");
        ctrl.addLikeMode = true;
    };

    //rating the post section 
    ctrl.rating = 1;
    ctrl.rateMode=false;
    ctrl.setRateMode = function setRateMode(mode){
        ctrl.rateMode=true;
        console.log("rateMode = true")
    };
    ctrl.addRate = function addRate(){
        ctrl.itemToEdit={};
        ctrl.itemToEdit.rating = ctrl.rating;
        ctrl.itemToEdit.rated_by = 2;
        ctrl.itemToEdit.post_rated = ctrl.post.id;
        ctrl.save({itemToRate:ctrl.itemToEdit});
        console.log("working rating in item-controller");
        ctrl.rateMode=false;
    };

    //comment the post section and mark as read

    ctrl.addComment = function addComment(){
        if(ctrl.itemToComment.comment != null){
            ctrl.itemToComment.comment_by = 2;
            ctrl.itemToComment.post_comment = ctrl.post.id;
            ctrl.itemToComment.read = false;
            ctrl.postcomment({itemToComment:ctrl.itemToComment});
        }
        else{
            console.log("enter something to comment");
        }
        console.log("working === comment in item-controller");
        ctrl.itemToComment={};
    };
    ctrl.changeComment = function changeComment(id){
        ctrl.itemToComment.id = id;
        ctrl.itemToComment.read = true;
        ctrl.itemToComment.post_comment = ctrl.post.id;
        ctrl.changecomment({itemToComment:ctrl.itemToComment});
        console.log("mark as read in item-controller");
    };

}
export default PostsItemController