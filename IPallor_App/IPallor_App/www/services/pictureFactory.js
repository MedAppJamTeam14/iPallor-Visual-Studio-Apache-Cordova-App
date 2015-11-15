﻿angular.module('app')
.factory('PictureFactory', function (DiagnosisFactory) {

  var currentPicture = {
    src: '',
    eye: '',
    date: '',
    dataPoints: [],
    likelihood: -1
  };

  return {
    resetCurrentPicture: function () {
      currentPicture = {
        src: '',
        eye: '',
        date: '',
        dataPoints: [],
        likelihood: -1
      };
    },

    getCurrentPicture: function () {
      return currentPicture;
    },

    setPictureSource: function (src) {
      currentPicture.src = src;
    },

    addDataPoint: function (dataPoint) {
      currentPicture.dataPoints.push(dataPoint);
    },

    removeDataPoint: function () {
      currentPicture.dataPoints.pop();
    },

    validateSubmit: function () {
      return currentPicture.src
        && currentPicture.eye
        && currentPicture.dataPoints.length === 5;
    },

    createDiagnosis: function (diagnosisData) {
      var date = new Date();
      currentPicture.date = date.getMonth() + '/' + date.getDay() + '/' + date.getFullYear();
      currentPicture.likelihood = 66;
      currentPicture.eye = diagnosisData.eye;

      DiagnosisFactory.pushDiagnosis(currentPicture);
    }
  };
});