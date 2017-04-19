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
      let date = this.formatDate()
      let tsaUrl = 'http:' + '//' + `apps.tsa.dhs.gov/MyTSAWebService/GetEventInfo.ashx?eventtype=sunrise_sunset&eventdate=${date}&airportcode=BNA&output=json`
      return $http.get(tsaUrl)
      .then(function(value) {
        console.log(`value`, value)
        return value.data
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
