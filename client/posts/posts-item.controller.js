import {merge} from "ramda";

function PostsItemController(){
    const ctrl = this;
    ctrl.showControls =false;
    ctrl.itemToEdit={};
    ctrl.editMode = false;
    ctrl.editRate ={};

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

    ctrl.rateMode=false;
    ctrl.rating = 1;
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

}
export default PostsItemController