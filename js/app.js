'use strict';

var app = angular.module('siteApp', ['ui.router', 'duScroll']);

app.value('duScrollDuration', 2000);

app.controller('mainCtrl', function($scope, $location, $anchorScroll) {
   $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
});
