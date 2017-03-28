//assign the angular module to the var app
var app = angular.module("classList", ['ngRoute']);

//configure "app" with routeProvider
app.config(($routeProvider)=> {
  $routeProvider
    //when at the base page
    .when("/", {
      //use the classList Ctrl
      controller: "classListCtrl",
      //use the partial "home"
      templateUrl : "partials/classList.html"
      })
});
