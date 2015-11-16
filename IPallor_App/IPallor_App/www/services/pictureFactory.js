angular.module('app')
.factory('PictureFactory', function (DiagnosisFactory) {

  var currentPicture = {
    src: '',
    eye: '',
    date: '',
    dataPoints: [],
    likelihood: -1
  };

  function analyzeDataPoints(vein_one, vein_two, vein_three, vein_four, temp_disc, nasal_disc) {
    
      // model 1
      var tempr = temp_disc.getRGB().r;
      var tempg = temp_disc.getRGB().g;
      var tempb = temp_disc.getRGB().b;
      var nasalg = nasal_disc.getRGB().g;
      var coeffs = [0.0627,-18.536,-1.662,0.003,13.5847];
      var powers = [4.87,-1.1,1.366,2.2,0.0];
    
      var logy_model1 =  coeffs[0]*Math.pow(tempr, powers[0]) +
                         coeffs[1]*Math.pow(nasalg, powers[1]) +
                         coeffs[2]*Math.pow(tempg, powers[2]) +
                         coeefs[3]*Math.pow(tempb, powers[3]) +
                         coeffs[4];
    
      //var coeffs2 = [2.0415,0.159,-9.01439,5.574,-3.597];
      //var logy_model2 =
      var pallor_max = 1.0;
      var pallor_min = 0.0;
    
      var diagnosis = (logy_model1 - pallor_min) / (pallor_max - pallor_min);

      return diagnosis;
  }

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

    createDiagnosis: function (diagnosisData) {
      var date = new Date();
      currentPicture.date = (1 + date.getMonth()) + '/' + date.getDate() + '/' + date.getFullYear().toString().substr(2, 2);
      currentPicture.likelihood = 66;
      currentPicture.eye = diagnosisData.eye;

      DiagnosisFactory.pushDiagnosis(currentPicture);
    }
  };
});