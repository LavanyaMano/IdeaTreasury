function postsAPIService($resource){
    const api={
        posts:$resource('/api/posts/:id/',
            {id:'@id'},
            {
                update:{
                    method:'PUT',
                },
            }),
    }
    return api;
}

export default postsAPIService;