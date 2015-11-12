angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('PatientList', {
      url: '/patientList',
      templateUrl: 'views/patientList/patientList.html',
      controller: 'Patient.ListCtrl'
    });
});
