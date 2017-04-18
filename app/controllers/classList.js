app.controller('classListCtrl', function($scope, studentFactory){
  console.log('in classListCtrl')
  // $scope.dateTime = getDateObjFactory()
  // $scope.parseTSADataFactory.parseData()

  studentFactory.getStudents()
    .then(students  => {
      $scope.students = students
    })
})
