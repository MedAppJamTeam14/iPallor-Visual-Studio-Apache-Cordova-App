angular.module('app')
.factory('ClinicianFactory', function () {

  var clinicians = [
    'John Doe',
    'Ivan the Terrible',
    'Mary Malpractice'
  ];

  var patientsUnderClinicians = {
    'John Doe': [
      'Max Paulus',
      'Van Nguyen'
    ],
    'Ivan the Terrible': [
      'John Collins',
      'Lewis Liu'
    ],
    'Mary Malpractice': [
      'Matin Khoshnevis',
      'Pasha Khosravi'
    ]
  };

  var currentClinician;

  return {
    getClinicians: function () {
      return clinicians;
    },

    getPatientsUnderClinician: function () {
      return patientsUnderClinicians[currentClinician];
    },

    getCurrentClinician: function () {
      return currentClinician;
    },

    selectClinician: function (selectedClinician) {
      currentClinician = selectedClinician;
    },

    addClinician: function (newClinician) {
      var name = newClinician.name;

      clinicians.push(name);
      patientsUnderClinicians[name] = [];
    },

    addPatientUnderClinician: function (name) {
      patientsUnderClinicians[currentClinician].push(name);
    }
  }

});
