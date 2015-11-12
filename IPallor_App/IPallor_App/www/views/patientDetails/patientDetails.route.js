angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('PatientDetails', {
      url: '/patientDetails',
      templateUrl: 'views/patientDetails/patientDetails.html',
      controller: 'PatientDetailsCtrl'
    });
});
