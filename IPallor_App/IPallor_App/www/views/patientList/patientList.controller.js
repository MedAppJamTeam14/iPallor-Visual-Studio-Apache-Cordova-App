angular.module('app')
.controller('Patient.ListCtrl', function (PatientFactory, ClinicianFactory) {

  var vm = this;

  angular.extend(vm, {
    patients: ClinicianFactory.getPatientsUnderClinician(),

    selectPatient: PatientFactory.selectPatient
  });

});
