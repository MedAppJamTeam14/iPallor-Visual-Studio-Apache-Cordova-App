angular.module('app')
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
          src: '',
		  dataPoints: [{rgb: {r: 0, g: 0, b: 255},pos:{x:100, y:50}},{rgb: {r: 0, g: 0, b: 255},pos:{x:10, y:150}},{rgb: {r: 0, g: 0, b: 255},pos:{x:200, y:100}},{rgb: {r: 0, g: 0, b: 255},pos:{x:150, y:100}},{rgb: {r: 0, g: 0, b: 255},pos:{x:200, y:40}}]
        },
        {
          eye: 'right',
          date: '9/14/15',
          likelihood: 80,
          src: '',
		  dataPoints: [{rgb: {r: 0, g: 0, b: 255},pos:{x:10, y:200}},{rgb: {r: 0, g: 0, b: 255},pos:{x:50, y:150}},{rgb: {r: 0, g: 0, b: 255},pos:{x:150, y:100}},{rgb: {r: 0, g: 0, b: 255},pos:{x:15, y:120}},{rgb: {r: 0, g: 0, b: 255},pos:{x:180, y:40}}]
        },
        {
          eye: 'left',
          date: '3/6/15',
          likelihood: 75,
          src: '',
		  dataPoints: [{rgb: {r: 0, g: 0, b: 255},pos:{x:125, y:75}},{rgb: {r: 0, g: 0, b: 255},pos:{x:100, y:10}},{rgb: {r: 0, g: 0, b: 255},pos:{x:180, y:100}},{rgb: {r: 0, g: 0, b: 255},pos:{x:150, y:120}},{rgb: {r: 0, g: 0, b: 255},pos:{x:140, y:40}}]
        },
        {
          eye: 'right',
          date: '11/25/14',
          likelihood: 70,
          src: '',
		  dataPoints: [{rgb: {r: 0, g: 0, b: 255},pos:{x:75, y:20}},{rgb: {r: 0, g: 0, b: 255},pos:{x:130, y:150}},{rgb: {r: 0, g: 0, b: 255},pos:{x:100, y:140}},{rgb: {r: 0, g: 0, b: 255},pos:{x:160, y:50}},{rgb: {r: 0, g: 0, b: 255},pos:{x:20, y:110}}]
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
