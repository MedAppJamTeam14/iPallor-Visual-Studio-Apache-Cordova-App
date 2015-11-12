angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('addPatient', {
      url: '/page9',
      templateUrl: 'views/patientAdd/patientAdd.html',
      controller: 'addPatientCtrl'
    });
});
