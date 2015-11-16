angular.module('app')
.controller('DiagnosisDetails.DetailsCtrl', function (DiagnosisFactory) {

  var vm = this;

  angular.extend(vm, {
    currentDiagnosis: DiagnosisFactory.getCurrentDiagnosis()
  });

})

.controller('DiagnosisDetails.DataPointsCtrl', function (DiagnosisFactory) {

  var vm = this;

  angular.extend(vm, {
    src: DiagnosisFactory.getCurrentDiagnosis().src,

    dataPoints: DiagnosisFactory.getCurrentDiagnosis().dataPoints
  });

});
