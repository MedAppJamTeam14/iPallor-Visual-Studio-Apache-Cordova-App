angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('diagnosisTabsController', {
      url: '/page12',
      abstract: true,
      templateUrl: 'views/diagnosisDetails/diagnosisTabsController.html'
    })

    .state('diagnosisTabsController.diagnosisDetails', {
      url: '/page7',
      views: {
        'tab3': {
          templateUrl: 'views/diagnosisDetails/diagnosisDetails.html',
          controller: 'diagnosisDetailsCtrl'
        }
      }
    })

    .state('diagnosisTabsController.dataPoints', {
      url: '/page6',
      views: {
        'tab4': {
          templateUrl: 'views/diagnosisDetails/dataPoints.html',
          controller: 'dataPointsCtrl'
        }
      }
    });
});
