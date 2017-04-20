app.controller('classListCtrl', function($scope, studentFactory, timeFactory){

  timeFactory.getSunData()
  .then(data => {
    $scope.sunrise = data.sunrise
    $scope.sunset = data.sunset
    console.log('sunset', $scope.sunset)
  })

  const time = timeFactory.currentHourInNashville()
  console.log('timezone offset', time)

  studentFactory.getStudents()
  .then(students  => {
    $scope.students = students
  })
})
