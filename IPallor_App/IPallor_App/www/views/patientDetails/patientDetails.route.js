angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('patientInfo', {
      url: '/page2',
      templateUrl: 'views/patientDetails/patientDetails.html',
      controller: 'patientInfoCtrl'
    });
});
