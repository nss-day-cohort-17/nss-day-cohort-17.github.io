//assign the angular module to the var app
const app = angular.module("classList", ['ngRoute']);

//configure "app" with routeProvider
app.config(($routeProvider, $locationProvider)=> {
  $routeProvider
  //when at the base page
  .when("/", {
    //use the classList Ctrl
    controller: "classListCtrl",
    //use the partial "home"
    templateUrl : "partials/classList.html"
    })
  .otherwise({
    redirectTo: '/'
  })
});
