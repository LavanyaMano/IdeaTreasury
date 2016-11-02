function userAPIService($resource){
    const api={
        currentuser: $resource('/api/me/'),

        user:$resource('/api/user/:id/',
            {id:'@id'},
            {
                update:{
                    method:'PUT',
                },
            },),

        chat:$resource('/api/chat/:id/',
            {id:'@id'},),
    }
    return api;
}

export default userAPIService;


