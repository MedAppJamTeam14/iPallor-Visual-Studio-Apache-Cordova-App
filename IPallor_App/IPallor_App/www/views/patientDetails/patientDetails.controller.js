angular.module('app')
.controller('Patient.DetailsCtrl', function (PatientFactory, $location) {

  var vm = this;

  angular.extend(vm, {
    currentPatient: PatientFactory.getCurrentPatient(),

    removePatientCaption: 'Remove Patient',

    removePatient: function () {
      if (vm.removePatientCaption === 'Remove Patient') {
        vm.removePatientCaption = 'Are you sure?';
      } else {
        $location.path('/patientList');
        PatientFactory.deletePatient();
      }
    }
  });

});
