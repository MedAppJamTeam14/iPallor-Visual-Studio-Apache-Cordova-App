angular.module('app')
.controller('Patient.DetailsCtrl', function (PatientFactory, $location) {

  var vm = this;

  angular.extend(vm, {
    currentPatient: PatientFactory.getCurrentPatient(),

    categories: [
      ['Name', 'name'],
      ['Age', 'age'],
      ['Gender', 'gender'],
      ['Phone', 'phone'],
      ['Recent Diagnosis', 'recentDiagnosis']
    ],

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
