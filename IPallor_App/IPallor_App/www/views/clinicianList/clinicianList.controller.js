angular.module('app')
.controller('Clinician.ListCtrl', function (ClinicianFactory) {

  var vm = this;

  angular.extend(vm, {
    clinicians: ClinicianFactory.getClinicians(),
    login: ClinicianFactory.login
  });

});
