angular.module('app')
.controller('PatientDetailsCtrl', function (PatientFactory) {

  var vm = this;

  angular.extend(vm, {
    currentPatient: PatientFactory.getCurrentPatient()
  });

});
