function postsAPIService($resource){
    const api={
        posts:$resource('/api/posts/:id/',
            {id:'@id'},
            {
                update:{
                    method:'PUT',
                },
            }),

        rate:$resource('/api/rate/:id/',
            {id:'@id'},),

        comment:$resource('/api/comment/:id/',
            {id:'@id'},
            {
                postcomment:{
                    method:'POST',
                },
                changecomment:{
                    method:'PUT',
                },
            },),
    }
    return api;
}

export default postsAPIService;