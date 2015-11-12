angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('iPallor', {
      url: '/page1',
      templateUrl: '../../templates/iPallor.html',
      controller: 'iPallorCtrl'
    });
});
