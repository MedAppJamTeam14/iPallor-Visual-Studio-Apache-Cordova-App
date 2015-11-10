angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('iPallor', {
      url: '/page1',
      templateUrl: 'templates/iPallor.html',
      controller: 'iPallorCtrl'
    })
        
      
    
      
        
    .state('patientInfo', {
      url: '/page2',
      templateUrl: 'templates/patientInfo.html',
      controller: 'patientInfoCtrl'
    })
        
      
    
      
        
    .state('diagnosisHistory', {
      url: '/page3',
      templateUrl: 'templates/diagnosisHistory.html',
      controller: 'diagnosisHistoryCtrl'
    })
        
      
    
      
        
    .state('diagnosisTabsController.dataPoints', {
      url: '/page6',
      views: {
        'tab4': {
          templateUrl: 'templates/dataPoints.html',
          controller: 'dataPointsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('diagnosisTabsController.diagnosisDetails', {
      url: '/page7',
      views: {
        'tab3': {
          templateUrl: 'templates/diagnosisDetails.html',
          controller: 'diagnosisDetailsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('upload', {
      url: '/page8',
      templateUrl: 'templates/upload.html',
      controller: 'uploadCtrl'
    })
        
      
    
      
        
    .state('addPatient', {
      url: '/page9',
      templateUrl: 'templates/addPatient.html',
      controller: 'addPatientCtrl'
    })
        
      
    
      
        
    .state('confirmSubmission', {
      url: '/page10',
      templateUrl: 'templates/confirmSubmission.html',
      controller: 'confirmSubmissionCtrl'
    })
        
      
    
      
    .state('diagnosisTabsController', {
      url: '/page12',
      abstract:true,
      templateUrl: 'templates/diagnosisTabsController.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});