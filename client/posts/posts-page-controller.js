import { findIndex } from 'ramda';
import { merge } from 'ramda';

function PostsPageController(postsAPIService,$interval){
    const ctrl = this;
    ctrl.editedItem = {};
    ctrl.addMode = false;

    function getPosts(){
        postsAPIService.posts.get().$promise.then((data)=>{
            ctrl.posts = data.results;
            ctrl.itemsCount = ctrl.posts.length;
        });
    }
    
    getPosts();


    $interval(getPosts,9000);


    ctrl.setMode = function setMode(mode){
        if (mode == "add"){
            ctrl.addMode = true;
        }
        else{
            ctrl.addMode = false;
            console.log("addMode working");
        }
    };
    
    ctrl.saveItem = function saveItem(editedItem){
        postsAPIService.posts.save(editedItem).$promise.then((savedItem) =>{
            ctrl.posts =[
                savedItem,
                ...ctrl.posts,
            ];
            ctrl.editedItem={};
            ctrl.addMode = false;
            //flashesService.displayMessage('Item added!','success');
            console.log('Item added! : This is from posts-page-controller');
        });
    };
    ctrl.updateItem = function updateItem(itemToUpdate){
        postsAPIService.posts.update(itemToUpdate).$promise.then(() =>{
            //flashesService.displayMessage('Item is update!','warning');
            console.log('Item updated! : This is from posts-page-controller');
        });
    };
    ctrl.deleteItem = function deleteItem(itemToDelete){
        const index =findIndex(item => itemToDelete.id === item.id)(ctrl.posts);
            if(index !== -1) {
                ctrl.posts.splice(index,1);
            }
        postsAPIService.posts.delete(itemToDelete).$promise.then(() => {
            //flashesService.displayMessage('Item removed!',"danger");
            console.log('Item removed! : This is from posts-page-controller');
        });
    };
    ctrl.addUse = function addUse(postToUse){
        const index =findIndex(item => postToUse.id === item.id)(ctrl.posts);
            if(index !== -1) {
                ctrl.posts.add_use(index,1);
            }
        postsAPIService.posts.update(postToUse).$promise.then(() => {
            //flashesService.displayMessage('Item removed!',"danger");
            console.log('post used! : This is from posts-page-controller');
        });
    };

    //Rate API, getting rate API, updating rate API.

    function getRate(){
        postsAPIService.rate.get().$promise.then((data)=>{
            ctrl.rate = data.results;
        });
    }
    getRate();
    $interval(getRate,9000);
    ctrl.rateItem = function rateItem(itemToRate){
        postsAPIService.rate.save(itemToRate).$promise.then((savedItem) =>{
            ctrl.rate =[
                savedItem,
                ...ctrl.rate,
            ];
            ctrl.itemToRate={};
            //flashesService.displayMessage('Item added!','success');
            console.log('Ratings added! : This is from posts-page-controller');
        });
    };

    //commenting on post, posting comment, commented by, post-commented on to comment API.
    function getComment(){
        postsAPIService.comment.get().$promise.then((data)=>{
            ctrl.comment= data.results;
        });
    }
    getComment();
    $interval(getComment,9000);

    ctrl.commentItem = function commentItem(itemToComment){
        postsAPIService.comment.postcomment(itemToComment).$promise.then((savedItem) =>{
            ctrl.comment=[
                savedItem,
                ...ctrl.comment,
            ];
            ctrl.itemToComment={};
            //flashesService.displayMessage('Item added!','success');
            console.log('comments added! : This is from posts-page-controller');
        });
    };

    //changing comment.read == true
    ctrl.commentChange = function commentChange(itemToComment){
        postsAPIService.comment.changecomment(itemToComment).$promise.then((savedItem) =>{
            ctrl.comment=[
                savedItem,
                ...ctrl.comment,
            ];
            ctrl.itemToComment={};
            //flashesService.displayMessage('Item added!','success');
            console.log('comments changed! : This is from posts-page-controller');
        });
    };

}

export default PostsPageController;