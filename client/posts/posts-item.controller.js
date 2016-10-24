import {merge} from "ramda";

function PostsItemController(){
    const ctrl = this;
    ctrl.showControls =false;
    ctrl.itemToEdit={};
    ctrl.editMode = false;

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
}
export default PostsItemController