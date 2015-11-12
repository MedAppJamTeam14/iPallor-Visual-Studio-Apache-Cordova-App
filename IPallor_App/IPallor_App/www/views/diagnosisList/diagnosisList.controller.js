angular.module('app')
.controller('DiagnosisListCtrl', function (DiagnosisFactory) {

  var vm = this;

  angular.extend(vm, {
    diagnosisHistory: DiagnosisFactory.getDiagnosisHistory(),

    selectDiagnosis: DiagnosisFactory.selectDiagnosis
  });

});
