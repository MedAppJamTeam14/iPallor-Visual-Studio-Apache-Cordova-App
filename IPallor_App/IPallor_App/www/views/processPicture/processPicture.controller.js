﻿angular.module('app')
.controller('Process.PictureCtrl', function ($scope) {

    var vm = this;

    angular.extend(vm, {
        defaultPicture : "../../assets/images/donald_duck_zombie.jpg",

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
                    $("#procPic").src(imageURI);

                    $("#procPic").panzoom({
                        increment: 0.5,
                        maxScale: 10,
                        $reset: $("#resetBtn")
                    });
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
