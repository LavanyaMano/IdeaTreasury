import angular from 'angular';
import uiRouter from 'angular-ui-router';

import PostsModule from '../posts/posts.module';
import UserModule from '../users/users.module';
import appComponent from './app.component';

import userAPIService from '../users/users-api-service';

const AppModule = angular.module('app', [
    uiRouter,
    PostsModule.name,
    UserModule.name
]).config(($resourceProvider,$stateProvider, $urlRouterProvider)=>{

    $resourceProvider.defaults.stripTrailingSlashes = false;

    $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('otherwise',{
            url:'/',
            component:'appComponent',
        })
        .state('user', {
            url: '/user',
            component: 'userPage',
        })
        .state('posts', {
            url: '/posts',
            component: 'postsPage',
        });

})
    .factory('userAPIService',userAPIService)
    .component('app', appComponent);

export default AppModule;