(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', DietCheckController);

    DietCheckController.$inject = ['$scope'];
    function DietCheckController($scope) {

        $scope.dataInput = "";
        $scope.resMsg = "";
        $scope.bordercol = 'black';


        $scope.checkVal = function () {
            if ($scope.dataInput.length == 0) {
                $scope.bordercol = 'red';
                $scope.resMsg = "Please enter data first";
            }
            else
                getVal($scope.dataInput);
        };

        function getVal(data) {


            var wordArr = data.split(",");
            

            if (wordArr.length > 3) {
                $scope.bordercol = 'green';
                $scope.resMsg = "Too much!";
            }
            else
                if (wordArr.length <= 3) {
                    $scope.bordercol = 'green';
                    $scope.resMsg = "Enjoy!";
                }

            //     var wordArr = data.split(",");
            //     console.log(wordArr);   
            //      var cleanArray = wordArr.filter(function () { return true });

        }


    }





})();