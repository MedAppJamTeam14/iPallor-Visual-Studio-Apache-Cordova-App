angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('PatientAdd', {
      url: '/patientAdd',
      templateUrl: 'views/patientAdd/patientAdd.html',
      controller: 'Patient.AddCtrl as vm'
    });
});
