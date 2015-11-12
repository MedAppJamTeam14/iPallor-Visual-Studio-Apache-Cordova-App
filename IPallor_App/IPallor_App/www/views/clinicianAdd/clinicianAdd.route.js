angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('addPatient', {
      url: '/page9',
      templateUrl: 'templates/addPatient.html',
      controller: 'addPatientCtrl'
    });
});
