function userAPIService($resource){
    const userResource=$resource('/api/user/:id/',{id:'@id'},{update:{method:'PUT'},});
    const chatResource=$resource('/api/chat/:id/',{id:'@id'},{update:{method:'PUT'},});

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
        updateChat(chatItems){
            return chatResource.update(chatItems).$promise;
        },
    };
}

export default userAPIService;


