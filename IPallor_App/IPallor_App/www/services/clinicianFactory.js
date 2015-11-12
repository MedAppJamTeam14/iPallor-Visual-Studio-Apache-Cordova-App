angular.module('app')
.factory('ClinicianFactory', function () {

  var clinicians = [
    'John Doe',
    'Ivan the Terrible',
    'Mary Malpractice'
  ];

  var currentClinician;

  return {
    getClinicians: function () {
      return clinicians;
    },

    getCurrentClinician: function () {
      return currentClinician;
    },

    selectClinician: function (selectedClinician) {
      currentClinician = selectedClinician;
    }
  }

});
