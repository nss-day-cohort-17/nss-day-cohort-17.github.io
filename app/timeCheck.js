`use strict`

app.factory('getDateObjFactory', function($scope) {
  $scope.dateTime = new Date()
})

app.factory('formatDateFactory', function($scope) {
  return {
    formatDate: () => {
      let year = $scope.dateTime.getFullYear();
      /// Add 1 because JavaScript months start at 0
      let month = (1 + $scope.dateTime.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;
      let day = $scope.dateTime.getDate().toString();
      day = day.length > 1 ? day : '0' + day;
      let formattedDate = month + '/' + day + '/' + year;
      return formattedDate
    }
  }
})

app.factory('sunriseSunsetFactory', function($http, $scope, formatDateFactory){
  return {
    getSunData: () => {
      let date = formatDate()
      let tsaUrl = 'http:' + '//' + `apps.tsa.dhs.gov/MyTSAWebService/GetEventInfo.ashx?eventtype=sunrise_sunset&eventdate=${date}&airportcode=BNA&output=json`
      return $http.get(tsaUrl)
      .then(function(value) {
        console.log(`value`, value)
        return value.data
      })
    }
  }
})


// app.factory('parseTSADataFactory' function(sunriseSunset, $scope) {

// })
