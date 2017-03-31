
app.controller('classListCtrl', function($scope, parseTSADataFactory, getDateObjFactory){
  console.log('in classListCtrl')
  $scope.dateTime = getDateObjFactory()
  $scope.parseTSADataFactory.parseData()
})
