﻿angular.module('app')
.factory('PatientFactory', function (ClinicianFactory) {

  var patientData = {
    'Max Paulus': {
      name: 'Max Paulus',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234',
      recentDiagnosis: 'May have atrophy on left eye',
      diagnosisHistory: [
        {
          eye : 'left',
          date: '10/25/15',
          likelihood: 85,
          src: ''
        },
        {
          eye: 'right',
          date: '9/14/15',
          likelihood: 80,
          src: ''
        },
        {
          eye: 'left',
          date: '3/6/15',
          likelihood: 75,
          src: ''
        },
        {
          eye: 'right',
          date: '11/25/14',
          likelihood: 70,
          src: ''
        }
      ]
    },
    'Van Nguyen': {
      name: 'Van Nguyen',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234',
      recentDiagnosis: 'May have atrophy on right eye',
      diagnosisHistory: []
    },
    'John Collins': {
      name: 'John Collins',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234',
      recentDiagnosis: 'Healthy',
      diagnosisHistory: []
    },
    'Lewis Liu': {
      name: 'Lewis Liu',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234',
      recentDiagnosis: 'Healthy',
      diagnosisHistory: []
    },
    'Matin Khoshnevis': {
      name: 'Matin Khoshnevis',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234',
      recentDiagnosis: 'Healthy',
      diagnosisHistory: []
    },
    'Pasha Khosravi': {
      name: 'Pasha Khosravi',
      age: 21,
      gender: 'Male',
      phone: '949-555-1234',
      recentDiagnosis: 'Healthy',
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
    },

    deletePatient: function () {
      var patientToDelete = currentPatient.name;

      delete patientData[patientToDelete];
      currentPatient = null;
      ClinicianFactory.deletePatientUnderClinician(patientToDelete);
    }
  }

});
