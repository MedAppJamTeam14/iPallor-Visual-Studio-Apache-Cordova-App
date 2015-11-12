angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('clinicianAdd', {
      url: '/clinicianAdd',
      templateUrl: 'views/clinicianAdd/clinicianAdd.html',
      controller: 'Clinician.AddCtrl as vm'
    });
});
