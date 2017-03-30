
app.controller('classListCtrl', function($scope, sunriseSunsetFactory, getDateObjFactory){
  getDateObjFactory()
  sunriseSunsetFactory()
})
