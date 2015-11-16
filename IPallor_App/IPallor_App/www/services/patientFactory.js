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
		  dataPoints: [{x:100 y:50},{x:10 y:150},{x:200 y:100},{x:150 y:100},{x:200 y:40}]
        },
        {
          eye: 'right',
          date: '9/14/15',
          likelihood: 80,
          src: ''
		  dataPoints: [{x:10 y:200},{x:50 y:150},{x:150 y:100},{x:15 y:120},{x:180 y:40}]
        },
        {
          eye: 'left',
          date: '3/6/15',
          likelihood: 75,
          src: ''
		  dataPoints: [{x:125 y:75},{x:100 y:10},{x:180 y:100},{x:150 y:120},{x:140 y:40}]
        },
        {
          eye: 'right',
          date: '11/25/14',
          likelihood: 70,
          src: ''
		  dataPoints: [{x:75 y:20},{x:130 y:150},{x:100 y:140},{x:160 y:50},{x:20 y:110}]
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
