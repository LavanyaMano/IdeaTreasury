import angular from 'angular';
import PostsModule from '../posts/posts.module';
import UserModule from '../users/users.module';
import appComponent from './app.component';

const AppModule = angular.module('app', [
    PostsModule.name,
    UserModule.name
])
    .component('app', appComponent);

export default AppModule;
