

angular.module('crashrApp.controllers', []).controller('eventsController', function($scope, crashrAPIservice){
  $scope.events = [];
  crashrAPIservice.getJSONData().success(function(e){
    for(var i=0; i < e.events.length; i++){
      $scope.events[i] = e.events[i];
    }
    $scope.nextEvent = function(){
      var nEvents = $scope.events.length;
      var nCounter = Math.floor(Math.random() * nEvents);
      var oEvent = $scope.events[nCounter];
      $scope.currentEvent = oEvent;
      //console.log($scope.currentEvent.eventTitle);
    }



    $scope.nextEvent();


  }).error(function(e){
    console.log("No, no, no, no, no, no, NOOOO. FRICK"); // Error message thing
  });

  $scope.noEvent = function(){
    $scope.string = "Decline";
    $scope.nextEvent();
  }

  $scope.yesEvent = function(){
    $scope.string = "RSVP!";
    $scope.nextEvent();
  }

  $scope.infoEvent = function(){
    $scope.string = "EVENT INFO";
  }

});
