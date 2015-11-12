angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('PatientAdd', {
      url: '/page9',
      templateUrl: 'views/patientAdd/patientAdd.html',
      controller: 'Patient.AddCtrl'
    });
});
