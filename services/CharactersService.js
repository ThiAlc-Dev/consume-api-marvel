"use strict";
app.service('CharactersService', ['$http', 'BaseConfiguration', function ($http, BaseConfiguration) {

    var api = BaseConfiguration.api;
    var apikey = BaseConfiguration.apikey;
    var hash = BaseConfiguration.hash;
    var timeStamp = BaseConfiguration.timeStamp;


    this.GetCharacters = function (nameFilter) {

        var Filter = nameFilter == "" || nameFilter == undefined ? "" : 'name=' + nameFilter + '&';
        var url = api + 'characters?limit=56&' + Filter + 'ts=' + timeStamp + '&apikey=' + apikey + '&hash=' + hash;
        return $http.get(url);
    };
}]);