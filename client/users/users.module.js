import angular from 'angular';
import 'angular-resource';
import 'ng-chatbox';
import userPageComponent from './user-page-component';
import userAPIService from './users-api-service';

const UserModule = angular.module('user',[
    'ngResource','ngChatbox',
]).config(($resourceProvider)=>{
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('userAPIService',userAPIService)
    .component('userPage',userPageComponent);

export default UserModule;