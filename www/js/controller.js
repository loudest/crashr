

angular.module('crashrApp.controllers', []).controller('eventsController', function($scope, crashrAPIservice){
  $scope.events = [];
  crashrAPIservice.getJSONData().success(function(e){
    for(var i=0; e.events.length; i++){
      $scope.events[i] = e.events[i];
    }
    alert($scope.events[2].eventTitle);
  }).error(function(e){
    console.log("No, no, no, no, no, no, NOOOO. FRICK"); // Error message thing
  });
});
