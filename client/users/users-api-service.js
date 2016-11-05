function userAPIService($resource){
    const userResource=$resource('/api/user/:id/',{id:'@id'});
    const chatResource=$resource('/api/chat/:id/',{id:'@id'});

    return{
        getUser(){
            return userResource.get({}).$promise.then((data) => {
                return data.results;
            });
        },
        getChat(){
            return chatResource.get({}).$promise.then((data)=>{
                return data.results;
            });
        },
        saveChat(chatItems){
            return chatResource.save(chatItems).$promise;
        },
    };
}

export default userAPIService;


