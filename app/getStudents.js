app.factory('studentFactory', function($http){
  return {
    getStudents() {
      return $http.get('/assets/students.json')
      .then(res => {
        console.log(res.data.students)
        return res.data.students
      })
    }
  }
})
