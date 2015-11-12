angular.module('app')
.factory('PatientFactory', function (ClinicianFactory) {

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

  var patientData = {
    'Max Paulus': {
      name: 'Max Paulus',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234'
    },
    'Van Nguyen': {
      name: 'Van Nguyen',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234'
    },
    'John Collins': {
      name: 'John Collins',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234'
    },
    'Lewis Liu': {
      name: 'Lewis Liu',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234'
    },
    'Matin Khoshnevis': {
      name: 'Matin Khoshnevis',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234'
    },
    'Pasha Khosravi': {
      name: 'Pasha Khosravi',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234'
    }
  };

  var currentPatient;

  return {
    getPatients: function () {
      var currentClinician = ClinicianFactory.getCurrentClinician();

      return patientsUnderClinicians[currentClinician] || [];
    },

    selectPatient: function (selectedPatient) {
      currentPatient = patientData[selectedPatient] || {};
    },

    getCurrentPatient: function () {
      return currentPatient;
    }
  }

});
