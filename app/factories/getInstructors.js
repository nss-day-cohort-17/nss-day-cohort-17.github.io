app.factory('instructorFactory', function($http){
  return {
    getInstructors() {
      return $http.get('/assets/instructors.json')
      .then(res => {
        return res.data.instructors
      })
    }
  }
})
