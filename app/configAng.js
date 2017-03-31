//assign the angular module to the var app
var app = angular.module("classList", ['ngRoute']);
console.log('in configAng.js')

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
