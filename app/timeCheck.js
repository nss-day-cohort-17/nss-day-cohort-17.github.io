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
    currentDate() {
      return new Date()
    },
    currentHour() {
      return this.currentDate().getHours()
    }
  }
})
