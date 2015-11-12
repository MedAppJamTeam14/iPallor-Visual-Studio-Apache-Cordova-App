angular.module('app')
.factory('PatientFactory', function (ClinicianFactory) {

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
    selectPatient: function (selectedPatient) {
      currentPatient = patientData[selectedPatient] || {};
    },

    getCurrentPatient: function () {
      return currentPatient;
    },

    addPatient: function (newPatient) {
      patientData[newPatient.name] = newPatient;
      ClinicianFactory.addPatientUnderClinician(newPatient.name);
    }
  }

});
