angular.module('app')
.controller('Patient.DetailsCtrl', function (PatientFactory) {

  var vm = this;

  angular.extend(vm, {
    currentPatient: PatientFactory.getCurrentPatient()
  });

});
