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
      // sets a default time in case api call fails
      .catch(function(err) {
        let sunDataObj = {"sunrise": "10:56:22 AM", "sunset": "12:32:36 AM"}
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
    // checks to see if sunrise or sunset should be used for comparison
    useSunriseSunset(sunriseSunsetObj) {
      if(this.isItAM()) {
        return sunriseSunsetObj.sunrise
      } else {
        return sunriseSunsetObj.sunset
      }
    },
    // handles negative numbers resulting from subtracting time zone offset from 12 hour clock
    handleNeg(hour) {
      if(hour <= 0) {
        return hour + 12
      } else {
        return hour
      }
    },
    // figures out if it's day or night
    dayOrNight(sunHour) {
      // gets current time in nashville (12 hour clock)
      let currentNashHour12 = this.currentHourInNashville() - 12
      // handles negative numbers
      if (currentNashHour12 <= 0) {
        currentNashHour12 = currentNashHour12 + 12
      }
      // if it's morning it will look to see if current time in nashville is after sunrise hour and set to day otherwise set to night
      if(this.isItAM()) {
        if(currentNashHour12 >= sunHour) {
          return 'day'
        } else {
          return 'night'
        }
      // if it's night it will look to see if current time in nashville is before sunset hour and set to day otherwise set to night
      } else {
        if(currentNashHour12 <= sunHour) {
          return 'day'
        } else {
          return 'night'
        }
      }
    },
    // returns the settings for day or nighttime
    getTimeSettings(dayOrNight) {
      let timeSettingsObj = {
        backgroundImg: "",
        backgroundCol: ""
      }
      if(dayOrNight === 'day') {
        timeSettingsObj.backgroundImg = '/img/c17_backdrop.svg'
        timeSettingsObj.backgroundCol = '#ffcc00'
      } else {
        timeSettingsObj.backgroundImg = '/img/c17_backdrop_night.png'
        timeSettingsObj.backgroundCol = '#336699'
      }
      return timeSettingsObj
    }
  }
})
