"use strict";
app.controller('PageController', ['$scope', 'CharactersService',
    function ($scope, CharactersService) {

        $scope.onInit = function () {
            $scope.isDetail = false;
        }

        $scope.showAll = function () {
            CharactersService.GetCharacters($scope.nameFilter).then(function (result) {
                $scope.listCharacters = result.data.data.results;
                if($scope.listCharacters.length === 0) {
                    $scope.message = "Nenhum resultado encontrado para essa pesquisa.";
                }
            });
        };

        $scope.showDetails = function () {
            $scope.isDetail = !$scope.isDetail;
        };

    }]);