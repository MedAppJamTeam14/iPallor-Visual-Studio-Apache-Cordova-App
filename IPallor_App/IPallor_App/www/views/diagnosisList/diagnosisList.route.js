angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('DiagnosisList', {
      url: '/page3',
      templateUrl: 'views/diagnosisList/diagnosisList.html',
      controller: 'DiagnosisListCtrl'
    });
});
