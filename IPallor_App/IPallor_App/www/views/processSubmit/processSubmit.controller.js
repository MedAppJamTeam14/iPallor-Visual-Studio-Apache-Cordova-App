angular.module('app')
.controller('Process.SubmitCtrl', function ($location, DiagnosisFactory, PictureFactory) {

  var vm = this;

  var dataPoints = PictureFactory.getCurrentPicture().dataPoints;

  angular.extend(vm, {
    eye: 'Left',
    src: PictureFactory.getCurrentPicture().src,

    validateSubmit: PictureFactory.validateSubmit,

    createDiagnosis: function () {
      var diagnosisData = {
        eye: vm.eye
      };

      PictureFactory.createDiagnosis(diagnosisData);
      $location.path('/diagnosisDetails/details');
    }
  });

  function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var imageObj = new Image();
    imageObj.onload = function () {
      context.drawImage(imageObj, 0, 0, 300, 225);
      drawPoints(dataPoints, 20);
    };
    imageObj.src = vm.src;
  }

  function drawPoints(points, size) {
    for (var i = 0; i < points.length; ++i) {
      var x = points[i].pos.x - size / 2.0;
      var y = points[i].pos.y - size / 2.0;

      context.clearRect(0, 0, context.width, context.height);
      context.beginPath();
      context.rect(x, y, size, size);
      //context.fillStyle = "yellow";
      //context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
    }
  }

  init();

});
