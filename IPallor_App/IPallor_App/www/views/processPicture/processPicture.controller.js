﻿angular.module('app')
.controller('Process.PictureCtrl', function ($scope, $location, PictureFactory) {

    var vm = this;

    var canvasElement = document.getElementById('processed-picture');
    var canvas = canvasElement.getContext('2d');

    $scope.rgb = {
      r: 0,
      g: 0,
      b: 0
    };

    $scope.mousePos = {
      x: 0,
      y: 0
    };

    $scope.dataPoints = 0;

    $scope.photoChoice = false;

    angular.extend(vm, {
        addDataPoint: function () {
          PictureFactory.addDataPoint({
            rgb: $scope.rgb,
            pos: $scope.mousePos 
          });

          ++$scope.dataPoints;

          $scope.rgb = {
            r: 0,
            g: 0,
            b: 0
          };

          $scope.mousePos = {
            x: 0,
            y: 0
          };
        },

        undoDataPoint: function () {
          --$scope.dataPoints;
          PictureFactory.removeDataPoint();
        },

        getMousePos: function (canvas, evt) {
          var rect = canvas.getBoundingClientRect();

          return {
            x: Math.floor(evt.clientX - rect.left),
            y: Math.floor(evt.clientY - rect.top)
          };
        },

        navigateToSubmit: function () {
          $location.path('/processSubmit');
        },

        takePicture: function () {
          try {
              navigator.camera.getPicture(
                  function (imageURI) {
                    var image = new Image();
                    image.src = imageURI;

                    $(image).load(function () {
                      canvas.drawImage(image, 0, 0, 300, 225);
                    });

                    document.getElementById('processed-picture').src = imageURI;
                    PictureFactory.setPictureSource(imageURI);
                    $scope.$apply(function () {
                      $scope.photoChoice = true;
                    });
                  },
                  function (err) {
                    console.log(err);
                  });
          } catch (e) {
              console.log("Couldn't access camera. Using Default picture.");
              document.getElementById("procPic").src = vm.defaultPicture; //default
          }
        },

        chooseFromGallery: function () {
          try {
              navigator.camera.getPicture(
                  function (imageURI) {
                    var image = new Image();
                    image.src = imageURI;

                    $(image).load(function () {
                      canvas.drawImage(image, 0, 0, 300, 225);
                    });

                    document.getElementById('processed-picture').src = imageURI;
                    PictureFactory.setPictureSource(imageURI);
                    $scope.$apply(function () {
                      $scope.photoChoice = true;
                    });
                  },
                  function (err) {
                    console.log(err);
                  }, {
                    quality: 100,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
                  });
          } catch (e) {
              console.log("Couldn't access camera. Using Default picture.");
          }
        }
    });

    $('#processed-picture').click(function (event) {
      // getting user coordinates
      var x = event.pageX - this.offsetLeft;
      var y = event.pageY -this.offsetTop;
      // getting image data and RGB values
      var img_data = canvas.getImageData(x, y, 1, 1).data;
      var R = img_data[0];
      var G = img_data[1];
      var B = img_data[2];

      $scope.$apply(function () {
        $scope.rgb = {
          r: R,
          g: G,
          b: B
        };

        $scope.mousePos = vm.getMousePos(canvasElement, event);
      });
    });

});
