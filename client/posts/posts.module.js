import angular from 'angular';
import 'angular-resource';
import postsPageComponent from './posts-page-component';
import postsEditComponent from './posts-edit.component';
import postsAPIService from './posts-api-service';

const PostsModule = angular.module('posts',[
    'ngResource',
]).config(($resourceProvider)=>{
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('postsAPIService',postsAPIService)
    .component('postsPage',postsPageComponent)
    .component('postsEdit',postsEditComponent);

export default PostsModule;