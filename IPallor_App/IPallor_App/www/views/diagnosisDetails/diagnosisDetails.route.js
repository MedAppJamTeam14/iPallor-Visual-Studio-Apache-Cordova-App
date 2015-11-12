angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('DiagnosisDetails', {
      url: '/diagnosisDetails',
      abstract: true,
      templateUrl: 'views/diagnosisDetails/diagnosisDetails.html'
    })

    .state('DiagnosisDetails.Details', {
      url: '/details',
      views: {
        'tab-details': {
          templateUrl: 'views/diagnosisDetails/diagnosisDetails.details.html',
          controller: 'DiagnosisDetails.DetailsCtrl as vm'
        }
      }
    })

    .state('DiagnosisDetails.DataPoints', {
      url: '/dataPoints',
      views: {
        'tab-dataPoints': {
          templateUrl: 'views/diagnosisDetails/diagnosisDetails.dataPoints.html',
          controller: 'DiagnosisDetails.DataPointsCtrl as vm'
        }
      }
    });
});
