angular.module('app')
.factory('DiagnosisFactory', function (PatientFactory) {

  var currentDiagnosis;

  return {
    getDiagnosisHistory: function () {
      return PatientFactory.getCurrentPatient().diagnosisHistory;
    },

    selectDiagnosis: function (selectedDiagnosis) {
      currentDiagnosis = selectedDiagnosis;
    },

    getCurrentDiagnosis: function () {
      return currentDiagnosis;
    },

    pushDiagnosis: function (newDiagnosis) {
      PatientFactory.getCurrentPatient().diagnosisHistory.unshift(newDiagnosis);

      currentDiagnosis = newDiagnosis;
    }
  };

});