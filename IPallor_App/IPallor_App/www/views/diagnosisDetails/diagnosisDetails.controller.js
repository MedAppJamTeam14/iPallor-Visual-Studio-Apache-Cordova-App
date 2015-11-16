angular.module('app')
.controller('DiagnosisDetails.DetailsCtrl', function (DiagnosisFactory) {

  var vm = this;

  angular.extend(vm, {
    currentDiagnosis: DiagnosisFactory.getCurrentDiagnosis()
  });

})

.controller('DiagnosisDetails.DataPointsCtrl', function (DiagnosisFactory) {

  var vm = this;
  var canvas;
  var context;

  var currentDiagnosis = DiagnosisFactory.getCurrentDiagnosis();

  angular.extend(vm, {
    dataPoints: currentDiagnosis.dataPoints,

    src: currentDiagnosis.src
  });

	function init() {
		canvas = document.getElementById("canvas");
		context = canvas.getContext("2d");
		var imageObj = new Image();
		imageObj.onload = function() {
			context.drawImage(imageObj, 0, 0);
		};
		imageObj.src = vm.src;
	}
  
	function drawPoints(points, size){
		for(var i = 0; i < points.length; ++i){
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
	drawPoints(currentDiagnosis.dataPoints, 20);
	
});
