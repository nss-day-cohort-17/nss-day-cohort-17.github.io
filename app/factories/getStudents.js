app.factory('studentFactory', function($http){
  return {
    getStudents() {
      return $http.get('/assets/students.json')
      .then(res => {
        return res.data.students
      })
    },
    // gets students in random order
    shuffleStudents(studentArray) {
      // -> Fisher–Yates shuffle algorithm
      let m = studentArray.length, t, i;
      // While there remain elements to shuffle
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = studentArray[m];
        studentArray[m] = studentArray[i];
        studentArray[i] = t;
      }
      return studentArray;
    }
  }
})
