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
    }
    return api;
}

export default postsAPIService;