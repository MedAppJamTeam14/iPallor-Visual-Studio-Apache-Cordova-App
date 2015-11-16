angular.module('app')
.controller('Process.PictureCtrl', function (PictureFactory) {

    var vm = this;

    angular.extend(vm, {
        defaultPicture : "../../assets/images/donald_duck_zombie.jpg",
        
        currentPicture: '',

        addDataPoint: function () {
            console.log("added data point");
        },

        undoDataPoint: function () {
            console.log("Undid data point");
        }
    });

    var init = function () {
        try {
            navigator.camera.getPicture(
                function (imageURI) {
                  document.getElementById('processed-picture').src = imageURI;
                    //$('processed-picture').panzoom({
                    //  increment: 0.5,
                    //  maxScale: 10,
                    //  startTransform: 'rotate(90deg)',
                    //  $reset: $("#resetBtn")
                    //});

                  PictureFactory.setPictureSource(imageURI);
                },
                function (err) {
                  console.log(err);
                });
        } catch (e) {
            console.log("Couldn't access camera. Using Default picture.");
            document.getElementById("procPic").src = vm.defaultPicture; //default
        }
    };

    init();
});
