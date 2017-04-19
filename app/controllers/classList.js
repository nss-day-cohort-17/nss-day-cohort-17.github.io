app.controller('classListCtrl', function($scope, studentFactory, timeFactory){

  timeFactory.getSunData()
    .then(data => {
      // console.log(data)
    })

  studentFactory.getStudents()
    .then(students  => {
      $scope.students = students
    })
})
