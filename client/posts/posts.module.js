import angular from 'angular';
import 'angular-resource';
import "angular-chart.js";
import postsPageComponent from './posts-page-component';
import postsCategoryComponent from './posts-component';
import postComponent from './post.component';
import postsCategoryItemComponent from './posts-category-component'
import postsEditComponent from './posts-edit.component';
import postsAPIService from './posts-api-service';

const PostsModule = angular.module('posts',[
    'ngResource','chart.js',
]).config(($resourceProvider)=>{
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('postsAPIService',postsAPIService)
    .component('postsPage',postsPageComponent)
    .component('post',postComponent)
    .component('postsEdit',postsEditComponent)
    .component('postsCategory',postsCategoryComponent)
    .component('postsCategoryItem',postsCategoryItemComponent);

export default PostsModule;