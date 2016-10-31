import angular from 'angular';
import 'angular-resource';
import postsPageComponent from './posts-page-component';
import postsItemComponent from './posts-item.component';
import postsEditComponent from './posts-edit.component';
import postsService from './posts.service';

const PostsModule = angular.module('posts',[
    'ngResource',
]).config(($resourceProvider)=>{
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('postsService',postsService)
    .component('postsPage',postsPageComponent)
    .component('postsItem',postsItemComponent)
    .component('postsEdit',postsEditComponent);

export default PostsModule;