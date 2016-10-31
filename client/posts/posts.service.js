function postsService($resource, Upload, $http, $q) {
    const postsResource = $resource('/api/posts/:id/', { id: '@id' });
    const rateResource = $resource('/api/rate/:id/',{id:'@id'},);
    const commentResource = $resource('/api/comment/:id/',
            {id:'@id'},
            {
                postcomment:{
                    method:'POST',
                },
                changecomment:{
                    method:'PUT',
                },
            },);
    let me = null;

    return {
        getMe() {
            if (me) {
                return $q.when(me);
            }

            return $http.get('/api/me/').then((response) => {
                me = response.data;
                return me;
            });
        },
        getAllPosts() {
            return postsResource.get({}).$promise.then((data) => {
                return data.results;
            });
        },
        getPost(id) {
            return postsResource.get({ id }).$promise.then((data) => {
                return data;
            });
        },
        // uploadPost(file) {
        //     const upload = Upload.upload({
        //         url: '/api/posts/upload/',
        //         data: {
        //             post: file,
        //         },
        //     });

        //     return upload;
        // },
        removePost(id) {
            return postsResource.remove({ id }).$promise;
        },
    };
}

export default postsService;