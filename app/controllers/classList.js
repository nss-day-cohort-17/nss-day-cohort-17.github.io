app.controller('classListCtrl', function($scope, studentFactory, timeFactory){

  // makes http GET call to find sunrise and sunset time
  timeFactory.getSunData()
  .then(data => {
    // takes response, figures out if it's AM or PM in Nashville then uses sunrise or sunset based on outcome and splits string into array so the hours can be broken off
    let whichSunArray = timeFactory.useSunriseSunset(data).split(':')
    // takes the hour of sunrise or sunset and subtracts 5 (for central time)
    let nashSunHourTent = whichSunArray[0] - 5
    // deals with negative numbers from previous operation
    let nashSunHour = timeFactory.handleNeg(nashSunHourTent)
    let dayOrNight = timeFactory.dayOrNight(nashSunHour)
    $scope.backgroundImg = timeFactory.getTimeSettings(dayOrNight).backgroundImg
    $scope.backgroundColor = timeFactory.getTimeSettings(dayOrNight).backgroundCol
    console.log('backgroundImg', $scope.backgroundImg)

    // $scope.backgroundColor = settingsObj.backgroundCol
  })

  studentFactory.getStudents()
  .then(students  => {
    let studentArray = studentFactory.shuffleStudents(students)
    $scope.students = studentArray
  })
})
