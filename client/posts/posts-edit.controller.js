import { merge } from 'ramda';

function PostsEditController(){
    const ctrl = this;
    ctrl.editedItem = {};
    ctrl.editedItem.category = "ART";
    ctrl.editedItem.visible = true;
    ctrl.$onChanges = function $onChanges(){
        ctrl.editedItem = merge({},ctrl.post);
    }
    ctrl.saveItem = function saveItem(){
        ctrl.save({editedItem: ctrl.editedItem})
        ctrl.editedItem={};
    };
}

export default PostsEditController;