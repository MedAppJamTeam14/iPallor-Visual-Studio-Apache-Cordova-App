angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('ProcessPicture', {
      url: '/processPicture',
      templateUrl: 'views/processPicture/processPicture.html',
      controller: 'Process.PictureCtrl as vm'
    });
});
