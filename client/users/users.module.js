import angular from 'angular';
import 'angular-resource';
import userPageComponent from './user-page-component';
import chatComponent from './chat.component';
import userAPIService from './users-api-service';

const UserModule = angular.module('user',[
    'ngResource',
]).config(($resourceProvider)=>{
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('userAPIService',userAPIService)
    .component('userPage',userPageComponent)
    .component('chat',chatComponent);

export default UserModule;