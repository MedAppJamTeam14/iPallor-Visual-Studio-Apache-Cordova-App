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

    login: function (selectedClinician) {
      currentClinician = selectedClinician;
    }
  }

});
