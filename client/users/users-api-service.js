function userAPIService($resource){
    const api={
        user:$resource('/api/user/:id/',
            {id:'@id'},
            {
                update:{
                    method:'PUT',
                },
            },),
    }
    return api;
}

export default userAPIService;


