angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('DiagnosisDetails', {
      url: '/page12',
      abstract: true,
      templateUrl: 'views/diagnosisDetails/diagnosisTabsController.html'
    })

    .state('DiagnosisDetails.Details', {
      url: '/page7',
      views: {
        'tab3': {
          templateUrl: 'views/diagnosisDetails/diagnosisDetails.html',
          controller: 'DiagnosisDetails.DetailsCtrl'
        }
      }
    })

    .state('DiagnosisDetails.DataPoints', {
      url: '/page6',
      views: {
        'tab4': {
          templateUrl: 'views/diagnosisDetails/dataPoints.html',
          controller: 'DiagnosisDetails.DataPointsCtrl'
        }
      }
    });
});
