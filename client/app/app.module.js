import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularCookies from 'angular-cookies';
import PostsModule from '../posts/posts.module';
import UserModule from '../users/users.module';
import appComponent from './app.component';
import homeComponent from './home.component';
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
            url:'/home',
           component:'home',
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
            params: { 
                filter: null
            },
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
        .state('category', {
            url: '/category',
            resolve:{
                me(postsAPIService){
                    return postsAPIService.getMe();
                },
                posts(postsAPIService){
                    return postsAPIService.getAllPosts();
                },
            },
            component:'postsCategory',
        })
        .state('categorypost', {
            url: '/category/{categoryName}',
            resolve:{
                me(postsAPIService){
                    return postsAPIService.getMe();
                },
                posts(postsAPIService){
                    return postsAPIService.getAllPosts();
                },
                category($stateParams){
                    return ($stateParams);
                },
            },
            component:'postsCategoryItem',
        })
        .state('post', {
            url: '/post/{postId}',
            resolve:{
                me(postsAPIService){
                    return postsAPIService.getMe();
                },
                post(postsAPIService,$stateParams){
                    return postsAPIService.getPost($stateParams.postId);
                },
            },
            component:'post',
        })

        .state('addpost',{
            url:'/addpost',
            component:'postsEdit',
        });

})
    .factory('userAPIService',userAPIService)
    .component('app', appComponent)
    .component('home',homeComponent)
    .run(($http, $cookies) => {
        // Add a header for CSRF token, so that POST does not fail to our API

        // eslint-disable-next-line no-param-reassign
        $http.defaults.headers.common['X-CSRFToken'] = $cookies.get('csrftoken');
    });

export default AppModule;