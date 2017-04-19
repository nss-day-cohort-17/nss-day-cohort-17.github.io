app.factory('studentFactory', function($http){
  return {
    getStudents() {
      return $http.get('/assets/students.json')
      .then(res => {
        return res.data.students
      })
    }
  }
})
