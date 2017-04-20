`use strict`

app.factory('timeFactory', function($http) {
  return {
    parseData() {
      return this.getSunData()
      .then(function(data) {
        return data
      })
    },
    getSunData() {
      const sunriseSunsetOrgUrl = 'http:' + '//' + 'api.sunrise-sunset.org/json?lat=36.1627&lng=-86.7816&date=today'
      return $http.get(sunriseSunsetOrgUrl)
      .then(function(value) {
        return value.data.results
      })
    },
    formatDate() {
      let year = this.currentDate().getFullYear();
      /// Add 1 because JavaScript months start at 0
      let month = (1 + this.currentDate().getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;
      let day = this.currentDate().getDate().toString();
      day = day.length > 1 ? day : '0' + day;
      let formattedDate = month + '/' + day + '/' + year;
      return formattedDate
    },
    currentDate() {
      return new Date()
    }
  }
})
