angular.module('app')
.controller('Clinician.AddCtrl', function ($scope, ClinicianFactory) {

  $scope.formData = {};

  var vm = this;

  angular.extend(vm, {
    addClinician: function () {
      var newClinician = {
        name: $scope.formData.firstName + ' ' + $scope.formData.lastName
      };

      ClinicianFactory.addClinician(newClinician);
    }
  });

});
