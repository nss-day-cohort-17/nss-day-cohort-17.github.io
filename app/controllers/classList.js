
app.controller('classListCtrl', function($scope, sunriseSunsetFactory, getDateObjFactory){
  console.log('in classListCtrl')
  $scope.dateTime = getDateObjFactory()
  sunriseSunsetFactory.getSunData()
  .then((data) => {
    $scope.sunData = data
  })
})
