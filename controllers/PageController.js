"use strict";
app.controller('PageController', ['$scope', 'CharactersService',
    function ($scope, CharactersService) {

        $scope.onInit = function () {
            $scope.isDetail = false;
        }

        $scope.showAll = function () {
            CharactersService.GetCharacters().then(function (result) {
                $scope.listCharacters = result.data.data.results;
                console.log($scope.listCharacters[0].comics);
            });
        };

        $scope.showDetails = function () {
            $scope.isDetail = !$scope.isDetail;
        };

    }]);