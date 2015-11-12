angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('DiagnosisList', {
      url: '/diagnosisList',
      templateUrl: 'views/diagnosisList/diagnosisList.html',
      controller: 'DiagnosisListCtrl as vm'
    });
});
