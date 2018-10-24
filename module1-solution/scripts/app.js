
// I did NOT consider and empty item, i.e., , , as an item towards to the count

(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.menu = '';
        $scope.message = '';
        $scope.messageStatus = "normal";
        $scope.checkMenu = function () {
            $scope.message = checkStatus($scope.menu);
        };
        function checkStatus(str) {
            var items = str.split(',');
            var count = checkCount(items);
            console.log(count);
            if (count == 0) {
                $scope.messageStatus = "err";
                return 'Please enter data first';
            }
            else if (count <= 3) {
                $scope.messageStatus = "normal";
                return 'Enjoy!';
            }
            else if (count > 3) {
                $scope.messageStatus = "normal";
                return 'Too much!';
            }
            else {
                $scope.messageStatus = "err";
                return 'Something went terribly wrong!';
            }
            function checkCount(arr) {
                var num = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].length >= 1) {
                        num++;
                    }
                }
                return num;
            };
        };
    };
})();