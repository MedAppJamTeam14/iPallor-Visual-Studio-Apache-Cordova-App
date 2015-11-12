angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('PatientDetails', {
      url: '/page2',
      templateUrl: 'views/patientDetails/patientDetails.html',
      controller: 'PatientDetailsCtrl'
    });
});
