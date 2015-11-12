angular.module('app')
.controller('Patient.ListCtrl', function (PatientFactory) {

  var vm = this;

  angular.extend(vm, {
    patients: PatientFactory.getPatients(),

    selectPatient: PatientFactory.selectPatient
  });

});
