angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('TakePicture', {
      url: '/page1',
      templateUrl: '../../templates/iPallor.html',
      controller: 'Take.PictureCtrl'
    });
});
