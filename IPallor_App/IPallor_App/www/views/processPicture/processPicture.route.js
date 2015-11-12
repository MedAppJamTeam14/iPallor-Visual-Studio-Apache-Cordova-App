angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('upload', {
      url: '/page8',
      templateUrl: 'views/processPicture/processPicture.html',
      controller: 'uploadCtrl'
    });
});
