angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('ClinicianAdd', {
      url: '/page1',
      templateUrl: '../../templates/iPallor.html',
      controller: 'Clinician.AddCtrl'
    });
});
