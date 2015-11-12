angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('ProcessSubmit', {
      url: '/page10',
      templateUrl: 'views/processSubmit/processSubmit.html',
      controller: 'Process.SubmitCtrl'
    });
});
