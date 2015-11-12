angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('iPallor', {
      url: '/page1',
      templateUrl: 'views/patientList/patientList.html',
      controller: 'iPallorCtrl'
    });
});
