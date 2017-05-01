app.factory('instructorFactory', function($http){
  return {
    getInstructors() {
      return $http.get('/assets/instructors.json')
      .then(res => {
        console.log("factory")
        return res.data.instructors
      })
    }
  }
})
