angular.module('app')
.controller('Patient.AddCtrl', function ($scope, PatientFactory) {

  $scope.formData = {};

  var vm = this;

  angular.extend(vm, {
    addPatient: function () {
      var formData = {
        name: $scope.formData.firstName + ' ' + $scope.formData.lastName,
        age: $scope.formData.age,
        phone: $scope.formData.phone,
        gender: $scope.formData.gender
      }

      PatientFactory.addPatient(formData);
    }
  });

});
