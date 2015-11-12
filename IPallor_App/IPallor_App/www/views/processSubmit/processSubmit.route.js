angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('ProcessSubmit', {
      url: '/processSubmit',
      templateUrl: 'views/processSubmit/processSubmit.html',
      controller: 'Process.SubmitCtrl'
    });
});
