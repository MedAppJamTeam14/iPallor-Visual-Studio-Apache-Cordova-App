angular.module('app')
.factory('PatientFactory', function (ClinicianFactory) {

  var patientData = {
    'Max Paulus': {
      name: 'Max Paulus',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234',
      diagnosisHistory: [
        {
          date: '10/25/15',
          likelihood: 85
        },
        {
          date: '9/14/15',
          likelihood: 80
        },
        {
          date: '3/6/15',
          likelihood: 75
        },
        {
          date: '11/25/14',
          likelihood: 70
        }
      ]
    },
    'Van Nguyen': {
      name: 'Van Nguyen',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234',
      diagnosisHistory: []
    },
    'John Collins': {
      name: 'John Collins',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234',
      diagnosisHistory: []
    },
    'Lewis Liu': {
      name: 'Lewis Liu',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234',
      diagnosisHistory: []
    },
    'Matin Khoshnevis': {
      name: 'Matin Khoshnevis',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234',
      diagnosisHistory: []
    },
    'Pasha Khosravi': {
      name: 'Pasha Khosravi',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234',
      diagnosisHistory: []
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
      newPatient.diagnosisHistory = [];
      patientData[newPatient.name] = newPatient;
      ClinicianFactory.addPatientUnderClinician(newPatient.name);
    }
  }

});
