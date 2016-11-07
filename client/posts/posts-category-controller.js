import { findIndex } from 'ramda';
import { merge } from 'ramda';

function PostsCategoryItemController(postsAPIService,){
    
    const ctrl = this;
    ctrl.postlist = [];

    ctrl.postsbycategory = function postsbycategory(){
        ctrl.postlist = [];
        for (var item in ctrl.posts){
            if (ctrl.posts[item].category === ctrl.category.categoryName){
                ctrl.postlist.push(ctrl.posts[item]);
            }
        }
        console.log("retuurnningsd this ", ctrl.postlist);
        return (ctrl.postlist)
        
    };
    // ctrl.postsbycategory();
}

export default PostsCategoryItemController;