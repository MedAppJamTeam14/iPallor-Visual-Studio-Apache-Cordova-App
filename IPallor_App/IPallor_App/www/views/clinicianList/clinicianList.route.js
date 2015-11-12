angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('ClinicianList', {
      url: '/clinicianList',
      templateUrl: 'views/clinicianList/clinicianList.html',
      controller: 'Clinician.ListCtrl'
    });
});
