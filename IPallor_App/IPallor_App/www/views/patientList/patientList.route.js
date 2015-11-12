angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('PatientList', {
      url: '/page1',
      templateUrl: 'views/patientList/patientList.html',
      controller: 'Patient.ListCtrl'
    });
});
