// practical 6 write a program to create and implement modules and controllers in angular js


var app = angular.module('DemoApp',[]);
app.controller('DemoController', function ($scope) { 
 $scope.list = ['A', 'E', 'I', 'O', 'U']; 
 $scope.choice = 'Your choice is: GeeksforGeeks'; 
 $scope.ch = function (choice) { 
 $scope.choice = "Your choice is: " + choice; 
 }; 
 $scope.c = function () { 
 $scope.choice = "Your choice is: " + $scope.mychoice; 
 }; 
});