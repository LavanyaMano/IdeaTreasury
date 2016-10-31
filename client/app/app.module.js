import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import angularCookies from 'angular-cookies';
import PostsModule from '../posts/posts.module';
import UserModule from '../users/users.module';
import appComponent from './app.component';

const AppModule = angular.module('app', [
    uiRouter,
    uiBootstrap,
    angularCookies,
    PostsModule.name,
    UserModule.name
])
    .component('app', appComponent)
    .config(($stateProvider,$urlRouterProvider) =>{
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('index', {
            url: '/',
            resolve: {
                posts(postsService) {
                    return postsService.getAllPosts();
                },
            },
            component: 'postsList',
        }).state('post', {
            url: '/post/{postId}',
            resolve: {
                post(postsService, $stateParams) {
                    return postsService
                        .getScreenshot($stateParams.postId);
                },
            },
            component: 'postsDetail',
        });
    })
    .run(($http, $cookies) => {
        // Add a header for CSRF token, so that POST does not fail to our API

        // eslint-disable-next-line no-param-reassign
        $http.defaults.headers.common['X-CSRFToken'] = $cookies.get('csrftoken');
    });

export default AppModule;
