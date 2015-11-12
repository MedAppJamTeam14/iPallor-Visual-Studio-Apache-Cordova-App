angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('clinicianAdd', {
      url: '/page9',
      templateUrl: 'templates/addPatient.html',
      controller: 'Clinician.AddCtrl'
    });
});
