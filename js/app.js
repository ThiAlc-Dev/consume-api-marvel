"use strict";
var app = angular.module("MeuApp", []);


/* serviços */
app.service('CharactersService', function ($http) {

  var api = 'http://gateway.marvel.com/v1/public/';
  var apikey = '5a237863b3cc2061003cbbc4fe20dc06';
  var hash = 'c31c933bee7e0ba689d8d7e87a0e2ee8';
  var timeStamp = 16412542979;


  this.GetCharacters = function () {

    var url = api + 'characters?limit=56&ts=' + timeStamp + '&apikey=' + apikey + '&hash=' + hash;
    return $http.get(url);
  };
});


/* controllers */
app.controller('PageController', function ($scope, CharactersService) {

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

});