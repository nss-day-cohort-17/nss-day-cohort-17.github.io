`use strict`

// lots of functions for figuring out if it's day or night
app.factory('timeFactory', function($http) {
  return {
    // returns an object with sunrise, sunset, and some other data for nashville today
    getSunData() {
      // sets url for get request to https://sunrise-sunset.org/api
      const sunriseSunsetOrgUrl = 'http:' + '//' + 'api.sunrise-sunset.org/json?lat=36.1627&lng=-86.7816&date=today'
      // runs the GET
      return $http.get(sunriseSunsetOrgUrl)
      .then(function(value) {
        // returns and object with just sunrise and sunset data
        let sunDataObj = {}
        sunDataObj.sunrise = value.data.results.sunrise
        sunDataObj.sunset = value.data.results.sunset
        return sunDataObj
      })
    },
    // returns the user's date
    currentDate() {
      return new Date()
    },
    // returns user's time zone offset in hours
    timeZoneOffsetInHours() {
      return this.currentDate().getTimezoneOffset()/60
    },
    // returns the current hour in nashville (24 hour clock)
    currentHourInNashville() {
      let hour = (this.currentDate().getHours() + this.timeZoneOffsetInHours() - 5)
      // handles negative numbers
      if(hour < 0) {
        hour = hour + 24
      }
      return hour
    },
    // checks to see if it's AM or PM hours
    isItAM() {
      if(this.currentHourInNashville() < 12) {
        return true
      } else {
        return false
      }
    },

  }
})
