angular.module('app')
.controller('Process.SubmitCtrl', function ($location, PictureFactory) {

  var vm = this;

  angular.extend(vm, {
    eye: 'Left',

    validateSubmit: PictureFactory.validateSubmit,

    createDiagnosis: function () {
      var diagnosisData = {
        eye: vm.eye
      };

      PictureFactory.createDiagnosis(diagnosisData);
      $location.path('/diagnosisDetails/details');
    }
  });

});
