angular.module('crashrApp.services', []).factory('crashrAPIservice', function($http){
  var crashrAPI = {};
  crashrAPI.getJSONData = function(){
    return $http({
      method: 'GET',
      url: 'data.json'
    });
  }

  return crashrAPI;
});
