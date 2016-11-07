import { findIndex } from 'ramda';
import { merge } from 'ramda';

function PostsCategoryController(postsAPIService,$state, $window){
    
    const ctrl = this;
    ctrl.list =['Art',
                'Science',
                'Finance',
                'Technology',
                'Business'];
}

export default PostsCategoryController;