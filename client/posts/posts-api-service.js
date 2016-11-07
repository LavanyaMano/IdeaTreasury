function postsAPIService($resource, $http, $q){
    const postsResource=$resource('/api/posts/:id/',{id:'@id'},{update:{method:'PUT'},});
    const rateResource = $resource('/api/rate/:id/',{id:'@id'},{update:{method:'PUT'},});
    const commentResource = $resource('/api/comment/:id/',{id:'@id'},{update:{method:'PUT'},});

    let me =null;

    return {
        getMe(){
            if(me){
                return $q.when(me);
            }
            return $http.get('/api/me/').then((response) => {
                me = response.data;
                return me;
            });
        },
        getAllPosts(){
            return postsResource.get({}).$promise.then((data) => {
                return data.results;
            });
        },
        getPost(id){
            return postsResource.get({id}).$promise.then((data)=>{
                return data;
            });
        },
        addPost(postToAdd){
            return postsResource.save(postToAdd).$promise;
        },
        updatePost(postToupdate){
            return postsResource.update(postToupdate).$promise;
        },
        removePost(postToRemove){
            return postsResource.remove(postToRemove).$promise;
        },
        addRate(rateItem){
            return rateResource.save(rateItem).$promise;
        },
        removeRate(rateToRemove){
            return rateResource.delete(rateToRemove).$promise;
        },
        addComment(commentItem){
            return commentResource.save(commentItem).$promise;
        },
        updateComment(commentItem){
            return commentResource.update(commentItem).$promise;
        },
    };
}

export default postsAPIService;