angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('confirmSubmission', {
      url: '/page10',
      templateUrl: 'views/processSubmit/processSubmit.html',
      controller: 'confirmSubmissionCtrl'
    });
});
