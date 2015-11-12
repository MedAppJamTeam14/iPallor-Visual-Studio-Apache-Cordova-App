angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('ProcessPicture', {
      url: '/page8',
      templateUrl: 'views/processPicture/processPicture.html',
      controller: 'Process.PictureCtrl'
    });
});
