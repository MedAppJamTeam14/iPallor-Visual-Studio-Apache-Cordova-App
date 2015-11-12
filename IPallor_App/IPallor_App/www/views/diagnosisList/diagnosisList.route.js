angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('diagnosisHistory', {
      url: '/page3',
      templateUrl: 'views/diagnosisList/diagnosisList.html',
      controller: 'diagnosisHistoryCtrl'
    });
});
