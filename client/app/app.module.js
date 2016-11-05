import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularCookies from 'angular-cookies';
import PostsModule from '../posts/posts.module';
import UserModule from '../users/users.module';
import appComponent from './app.component';

import userAPIService from '../users/users-api-service';
import postsAPIService from '../posts/posts-api-service';

const AppModule = angular.module('app', [
    uiRouter,
    angularCookies,
    PostsModule.name,
    UserModule.name
]).config(($resourceProvider,$stateProvider, $urlRouterProvider)=>{

    $resourceProvider.defaults.stripTrailingSlashes = false;

    $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home',{
            url:'/',
           
        })
        .state('user', {
            url: '/user',
            resolve:{
                me(postsAPIService){
                    return postsAPIService.getMe();
                },
                chat(userAPIService){
                    return userAPIService.getChat();
                },
                users(userAPIService){
                    return userAPIService.getUser();
                },
            },
            component: 'userPage',
        })
        .state('posts', {
            url: '/posts',
            resolve:{
                me(postsAPIService){
                    return postsAPIService.getMe();
                },
                posts(postsAPIService){
                    return postsAPIService.getAllPosts();
                },
            },
            component:'postsPage',
        })
        .state('addpost',{
            url:'/addpost',
            component:'postsEdit',
        });

})
    .factory('userAPIService',userAPIService)
    .component('app', appComponent)
    .run(($http, $cookies) => {
        // Add a header for CSRF token, so that POST does not fail to our API

        // eslint-disable-next-line no-param-reassign
        $http.defaults.headers.common['X-CSRFToken'] = $cookies.get('csrftoken');
    });

export default AppModule;